const connection = require('../data/db')

// index
function index(req, res) {
  const sql = ` SELECT * FROM dati_a_caso.items;`

  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  })
}

function show(req, res) {
  const { id } = req.params
  const sql = `SELECT * FROM dati_a_caso.items WHERE items.id = ?`

  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Errore nel database:", err) // Aggiunto log di errore
      return res.status(500).json({ error: "Errore interno del server" })
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Numero non presente" })
    }

    res.json(results[0])
  })
}

module.exports = { index, show }