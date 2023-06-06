const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, 
});
const pool = require('../config/postdbconfig');
const openai = new OpenAIApi(configuration);

async function ChatCompletions(req, res) {
  const prompt = req.body.prompt;
  const messages = req.body.messages;

  let errorMsg;
  let errorSeverity;
  let errorCode;
  let errorPosition;
  let errorFile;
  let errorLine;
  let errorRoutine;


  if (!prompt) {
    console.error('No se proporcionó ninguna pregunta.');
    return res
      .status(400)
      .json({ error: 'No se proporcionó ninguna pregunta.' });
  }
  //hacemos que busque el token destructurado del prompt
  //const tokenResult = tokens.some(token => gastosKeywords.includes(token));
  try {
   

    const contentPostgre = `Por favor trabaja como un sql translate para PostgreSQL Nunca incluyas comentarios, solo la consulta.
    Acuerdate que current_date en PostgreSQL es clock_timestamp y que necesito solo el query sin ninguna palabra ni comentario de mas por favor!`;


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
    console.log('respuesta segmentada :', sqlQuery);

    console.log('respuesta del chat :', responseGpt.data.choices[0].message);

    //console.log(gptResponseContent);

    //const prueba ="SELECT * FROM form_gasto";

    //haciendo select con la variable del response de chatGPT
    //const queryChat = prueba;

      pool.query(sqlQuery, (err, result) => {
        if (err) {
          errorMsg = err.message;
          errorSeverity = err.severity;
          errorCode = err.code;
          errorPosition = err.position;
          errorFile = err.file;
          errorLine = err.line;
          errorRoutine = err.routine;
          console.log(errorPosition)
          console.log(errorMsg)
          console.log(errorCode)
          res.status(500).json({ error: 'Hubo un error ejecutandose el query' });

          // Insertar en la base de datos aquí
    const errorQuery = `
    INSERT INTO stage.error_logs (message, severity, code, position, file, line, routine, timestamp, prompt , respuesta)
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), $8, $9)
  `;
  pool.query(
    errorQuery,
    [
      errorMsg,
      errorSeverity,
      errorCode,
      errorPosition,
      errorFile,
      errorLine,
      errorRoutine,
      prompt,
      gptResponseContent.replace(/\n/g, ' '), // Reemplazar los caracteres de salto de línea por espacios en blanco


    ],
    (err, result) => {
      if (err) {
        console.error('Error al registrar el error en la base de datos:', err);
      } else {
        console.log('Datos del error registrado correctamente en la base de datos.');
      }
    }
  );
        //parte importante 
        } else {
          console.log(result.rows);
          const finalResponse = {
            message: gptResponseContent,
            results: result.rows,
          };
          res.json(finalResponse);
        }

      });


    } catch (error) {
      if (error.code === 'ENOTFOUND') {
        console.error(error.code, 'Error de conexión. Asegúrese de que esté conectado a internet o que su apiKey sea correcta.');
        res.status(503).json({ code: error.code });
      }
     if( error.message === 'Request failed with status code 401'){
        console.error(error.message, 'Asegurese que su apiKey sea correcta.')//okey
        res.status(503).json({ code: 'UNAUTHORIZED' });
      
      } if (error.message === "Cannot read properties of null (reading '0')"){
        console.error(error,'No entendí su pregunta');
        res.status(503).json({ code: 'PREGUNTA_INCO' });
  
      } 
    }

}

module.exports = {
  ChatCompletions,
};
