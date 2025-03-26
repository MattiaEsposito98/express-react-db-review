const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dati_a_caso'
});

connection.connect(err => {
  if (err) {
    console.error('Errore di connessione al database:', err.message);
    return;
  }
  console.log('✅ Connessione a MySQL riuscita!');
});

module.exports = connection;
