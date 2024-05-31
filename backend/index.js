const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000
connectToMongo();
app.use(cors())
app.use(express.json())


// Availble routes
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Mern stack login form listening at http://localhost:${port}`)
})