const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function ChatCompletions(req, res) {
  const prompt = req.body.prompt;

  if (!prompt) {
    console.error('No se proporcionó ninguna pregunta.');
    return res.status(400).json({ error: 'No se proporcionó ninguna pregunta.' });
  }
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
    });
    res.json({ message: response.data.choices[0].message.content.trim() });
    console.log('la respuesta de chat es :', response.data.choices[0].message);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
    console.error('Error al llamar a la API de OpenAI:', error.code, error.response.status, error.response.data);
    //    console.error('Error al llamar a la API de OpenAI:', error.code, error.response.status, error.response.data);

  }
}

module.exports = {
  ChatCompletions,
};
