    require('dotenv').config()
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    async function getChatGPTResponse() {
        try {
        const prompt = `tengo la siguientes tablas en una base de datos postgresql 11.5:
        CREATE TABLE stage.ia_clientes (
            id_cliente varchar,
            nombre_cliente varchar
            CONSTRAINT ia_clie_pk PRIMARY KEY (id_cliente)
        );
        CREATE TABLE stage.ia_utilizacion (
            id_cliente varchar,
            ip_sn_punta varchar,
            nombre_punta varchar,
            tipo_punta varchar,
            alcanzabilidad_punta float8,
            utilizacion_punta float8,
            CONSTRAINT util_vw_pk PRIMARY KEY (id_cliente, ip_sn_punta)
            CONSTRAINT fk_id_cliente
              FOREIGN KEY(id_cliente) 
              REFERENCES stage.ia_clientes(id_cliente)
        );
        
        
        CREATE TABLE stage.ia_tickets(
            id_cliente varchar,
            tipo_punta varchar,
            ip_sn_punta varchar,
            id_ticket varchar,
            descripcion_ticket text,    
            id_estado_ticket varchar,
            fecha_apertura_ticket timestamp,
            fecha_modificacion_ticket timestamp,
            fecha_cierre_ticket timestamp ,
            fecha_resolucion_ticket timestamp ,
            grupo_ticket varchar,
            categoria_ticket varchar,
            descripcion_estado_ticket varchar,
            CONSTRAINT ia_tt_pk PRIMARY KEY (id_cliente, id_ticket)
            CONSTRAINT fk_id_cliente
              FOREIGN KEY(id_cliente) 
              REFERENCES stage.ia_clientes(id_cliente)
            CONSTRAINT fk_ip_sn
              FOREIGN KEY(id_cliente,ip_sn_punta) 
              REFERENCES stage.ia_utilizacion(id_cliente,ip_sn_punta)
        );
        
        podrias crear una consulta sql que consteste la siguiente pregunta y solo darme el codigo sin explicaciones:
        Cuales son las 10 puntas que tienen mas utilizacion y de que clientes son?
        selecciona la mayor cantidad de columnas posible`
        
    const response = await openai.createCompletion({
        model: 'text-curie-001',
        prompt: prompt,
        max_tokens: 400,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: [";"],
    });
    
    console.log("la respuesta de completions es :", response.data.choices[0].text.trim());

    }catch (error) {
        console.error('Error al llamar a la API de OpenAI:', error.code, error.response.status, error.response.data);
    }

    }

module.exports={   
getChatGPTResponse
}