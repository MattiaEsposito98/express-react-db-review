const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Server is running')
})



app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})