const {Pool} = require('pg')
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: process.env.PASSWORD,
  database: "bookDB"
 
})
module.exports = pool