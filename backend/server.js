const express = require("express");
const app = express();
const cors = require("cors");
//const fileupload = require("express-fileupload");
const port = 5005;
const getControllers = require('./controllers/Getfunc');
const postControllers = require ('./controllers/Postfunc');
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
//app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log("servidor funcionando en el puerto " + port );
  });
  
  app.post("/postformgasto",postControllers.postFormulario__ );



  app.get("/consultaformgasto",getControllers.consultaFolio__ );
