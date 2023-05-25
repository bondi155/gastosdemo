const Pool = require('pg').Pool


const pool = new Pool({
  user: 'pgetl',
  host: 'localhost',
  database: 'chatgpt',
  password: 'infor123',
  port: 5432,
});

module.exports = pool;