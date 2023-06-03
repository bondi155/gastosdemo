const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const pool = require ('../config/postdbconfig');
const axios = require('axios');
//const natural = require('natural');
//const tokenizer = new natural.WordTokenizer();
const openai = new OpenAIApi(configuration);

async function ChatCompletions(req, res) {
  const prompt = req.body.prompt;
  const messages = req.body.messages;

  //divido el prompt en palabras
  /* const tokens = tokenizer.tokenize(prompt);

   const gastosKeywords = [
      'gastos',
      'mis',
    ' informacion',
      'mi'
    ];
 const result = gastosKeywords.some((gastosKeywords) =>
    prompt.includes(gastosKeywords)
  );*/
  let responseGastos = [];

  if (!prompt) {
    console.error('No se proporcionó ninguna pregunta.');
    return res
      .status(400)
      .json({ error: 'No se proporcionó ninguna pregunta.' });
  }
  //hacemos que busque el token destructurado del prompt
  //const tokenResult = tokens.some(token => gastosKeywords.includes(token));
  try {
    const apiResponse = await axios.get(
      'http://localhost:5005/consultaformgasto'
    );

    const contentPostgre = `Por favor trabaja como un sql translate para PostgreSQL Nunca incluyas comentarios, solo la consulta.
    Acuerdate que current_date en PostgreSQL es clock_timestamp y que necesito solo el query sin ninguna palabra ni comentario de mas por favor!`;

    //convertir la respuesta de la base de datos en lenguaje natural ...esa sera la verdadera const gastosMessage...
    responseGastos = apiResponse.data;

    /*const gastosMessage = `El usuario tiene los siguientes datos de gastos:
        - Formato de pago: deposito
        - FTO: 12345
        - Sector: contadoria
        - Razón Social: proveedor 1
        - Folio: 123456
        - Total: 5567
        - descripcion : silla, mesa
        `;
      console.log(responseGastos); falta crear de resppnseGastsos la respuesta en lenguaje natural acordarse


      console.log(gastosMessage);
        */

    const responseGpt = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.2,
      messages: [
        ...messages.map((message) => ({
          role: message.sender === 'Usuario' ? 'user' : 'assistant',
          content: message.text,
        })),
        //{ role: 'system', content: tokenResult ? gastosMessage: contentPostgre },
        { role: 'system', content: contentPostgre },
        { role: 'user', content: prompt },
      ],
    });

    const gptResponseContent =
      responseGpt.data.choices[0].message.content.trim();


 let sqlQuery = gptResponseContent.match(/(SELECT.*;)/is)[0];
console.log("respuesta segmentada :",sqlQuery);

    console.log(
      'respuesta del chat :',
      responseGpt.data.choices[0].message
    );

    //console.log(gptResponseContent);

    //const prueba ="SELECT * FROM form_gasto";

    //haciendo select con la variable del response de chatGPT
    //const queryChat = prueba;

pool.query(sqlQuery, (err, result) => {
    if(err) {
        console.log(err);
        res.status(500).json({error: "Hubo un error ejecutandose el query"});
    } else {
        console.log(result.rows);
        const finalResponse = {
            message: gptResponseContent,
           results: result.rows,
        };
        res.json(finalResponse);
    }});
  
  } catch (error) {
    res.status(500).json({ error: error.toString() });
    console.error(
      'Error al llamar a la API de OpenAI:',
      error.response.status,
      error.response.data
    );
  }
}

module.exports = {
  ChatCompletions,
};
