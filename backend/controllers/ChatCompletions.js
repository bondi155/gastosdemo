const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function ChatCompletions(req, res) {
  const question = req.body.question;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: question },
      ],
    });
    res.json({ message: response.data.choices[0].message.content.trim() });
    console.log('la respuesta de chat es :', response.data.choices[0].message);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
    console.error(error);
  }
}

module.exports = {
  ChatCompletions,
};
