    require('dotenv').config()
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    async function getChatGPTResponse() {
        try {
        const prompt = 'cuanto es una docena?';
        
    const response = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: prompt,
        max_tokens: 60
    });
    
    console.log("la respuesta de completions es :", response.data.choices[0].text.trim());

    }catch (error) {
        console.error('Error al llamar a la API de OpenAI:', error.code, error.response.status, error.response.data);
    }

    }

module.exports={   
getChatGPTResponse
}