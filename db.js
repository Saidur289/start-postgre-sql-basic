const {Pool} = require('pg')
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'saidur140141',
  database: "bookDB"
 
})
module.exports = pool