const db = require('../config/dbconfig');

//Para que no se desconecte solo el mysql con nodejs
function handleDisconnect() { 
    console.log('handleDisconnect()');                                                                                     
    db.connect(function(err) {                     
    if(err) {                                      
        console.log(' Error when connecting to db:', err);
        setTimeout(handleDisconnect, 1000);      
    }                                             
    });                                                                                     
    db.on('  Database Error', function(err) {
        console.log('db error: ' + err.code, err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
            handleDisconnect();                      
        } else {                                     
            throw err;                             
        }
    });
  }
  

  
function postFormulario__ (req, res) {

    
    const formato_pago = req.body.formato_pago;
    const fto = req.body.fto;
    const sector = req.body.sector;
    const razon_social = req.body.razon_social;
    const fecha_elabora = req.body.fecha_elabora;
    const folio = req.body.folio;
    const fecha_fac = req.body.fecha_fac;
    const ceco = req.body.ceco;
    const empresa_pagadora = req.body.empresa_pagadora;
    const concepto = req.body.concepto;
    const area = req.body.area;
    const tipo_partida = req.body.tipo_partida;
    const articulo = req.body.articulo;
    const descripcion = req.body.descripcion;
    const precioUni = req.body.precioUni;
    const subtotal = req.body.subtotal;
    const descuento = req.body.descuento;
    const iva = req.body.iva;
    const total = req.body.total;
  
    const sqlPostFormulario = "INSERT INTO form_gasto (formato_pago, fto, sector, razon_social, folio, fecha_elabora, fecha_fac, ceco, empresa_pagadora, concepto, area, tipo_partida, articulo, descripcion, preciou, descuento, subtotal, iva, total) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     
    db.query(
      sqlPostFormulario, 
      [formato_pago, fto, sector, razon_social, folio, fecha_elabora, fecha_fac, ceco, empresa_pagadora, concepto, area, tipo_partida, articulo, descripcion, precioUni, descuento, subtotal, iva, total],
      (err, result) => {
        err ? console.log(err) && setTimeout(handleDisconnect, 2000)
        : res.send("Valores insertados del formulario en Tabla form_gasto correctamente");
      }
    );
  
  }

  module.exports ={
    postFormulario__:postFormulario__
  }