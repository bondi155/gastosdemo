const db = require('../config/dbconfig');


function consultaFolio__ (req, res) {

    const sqlGetfolioConsul = "SELECT * FROM form_gasto";
    db.query(sqlGetfolioConsul, (err, result) => {
        err? console.log(err) : res.send(result);
    });
}


//meter en el post del formulario el usuario? asi cuando hacemos el where sea por usuario...ahora empezamos general depues
//por usuario

module.exports = {

    consultaFolio__:consultaFolio__
}