const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dati_a_caso'
})

connection.connection(err => {
  if (err) throw err
  console.log('Connected to Mysql')
})

module.exports = connection