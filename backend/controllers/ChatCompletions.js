const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const axios = require('axios');

const openai = new OpenAIApi(configuration);

async function ChatCompletions(req, res) {
  const prompt = req.body.prompt;
  const messages = req.body.messages;

  const gastosKeywords = [
    'mis ultimos gastos',
    'mis datos de gasto',
    'mi tabla de gastos',
    'mi informacion de gastos',
  ];
  const result = gastosKeywords.some((gastosKeywords) =>
    prompt.includes(gastosKeywords)
  );
  let responseGastos = [];

  if (!prompt) {
    console.error('No se proporcionó ninguna pregunta.');
    return res
      .status(400)
      .json({ error: 'No se proporcionó ninguna pregunta.' });
  }

  if (result) {
    try {
      const apiResponse = await axios.get(
        'http://localhost:5005/consultaformgasto'
      );
      responseGastos = apiResponse.data;

      const gastosMessage = `El usuario tiene los siguientes datos de gastos:
        - Formato de pago: deposito
        - FTO: 12345
        - Sector: contadoria
        - Razón Social: proveedor 1
        - Folio: 123456
        - Total: 5567
        - descripcion : silla
        `;
      //console.log(responseGastos); falta crear de resppnseGastsos la respuesta en lenguaje natural acordarse

      const newPrompt = `${prompt}\n${gastosMessage}`;

      console.log(gastosMessage);

      const responseGpt = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: newPrompt },
        ],
      });

      const finalResponse = {
        message: responseGpt.data.choices[0].message.content.trim(),
        responseGastos: responseGastos,
      };

      res.json(finalResponse);
      console.log(
        'la respuesta de chat es :',
        responseGpt.data.choices[0].message
      );
    } catch (error) {
      console.error(
        'Error en la solicitud de la API interna de gastos:',
        error
      );
    }
  } else {
    //llamada normal a api , hay que factorizar esto luego
    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          ...messages.map((message) => ({
            role: message.sender === 'Usuario' ? 'user' : 'assistant',
            content: message.text,
          })),
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
          
        ],
      });
      res.json({ message: response.data.choices[0].message.content.trim() });
      console.log(
        'la respuesta de chat es :',
        response.data.choices[0].message
      );
    } catch (error) {
      res.status(500).json({ error: error.toString() });
      console.error(
        'Error al llamar a la API de OpenAI:',
        error.code,
        error.response.status,
        error.response.data
      );
      //    console.error('Error al llamar a la API de OpenAI:', error.code, error.response.status, error.response.data);
    }
  }

  //catch (error) {
  //res.status(500).json({ error: error.toString() });
  //console.error('Error al llamar a la API de OpenAI:', error.code, error.response.status, error.response.data);
  //console.error('Error al llamar a la API de OpenAI:', error.code, error.response.status, error.response.data);

  //}
}

module.exports = {
  ChatCompletions,
};
