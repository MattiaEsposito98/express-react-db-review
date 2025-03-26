const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const itemRouter = require('./routers/itemRouter')

app.use(cors())

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Server is running')
})


// Rotte
app.use('/', itemRouter)



app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})