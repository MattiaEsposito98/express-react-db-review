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

module.exports = { index }