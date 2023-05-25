const pool = require ('../config/postdbconfig');



function getMerchants (req, res) {
    const getMerchants = "SELECT * FROM clientes_puntas_tickets limit 10";
    pool.query(getMerchants, (err, result) => {
        err? console.log(err) : res.send(result.rows);
    });
}

  module.exports={
    getMerchants
  }

  