# El chat segmenta de las respuestas el sql y los manda a un select de postgres , las preguntas que se hagan deben ser basadas a la base y tablas que tengas.


# Para Crear base de datos donde guarda errores si la consulta no se ejecuta bien o no encuentra tabla   :

CREATE TABLE stage.error_logs (
  id SERIAL PRIMARY KEY,
  message varchar,
  severity varchar,
  code varchar,
  position varchar,
  file varchar,
  line varchar,
  routine varchar,
 timestamp TIMESTAMP DEFAULT NOW(),
 prompt varchar, 
  respuesta varchar(250)
);

