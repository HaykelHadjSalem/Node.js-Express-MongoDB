const express = require("express")
const cors = require('cors')
const Item = require('./database/index')

//Create an Express App and define the port to listen on
const app = express()
const PORT = 3000

//Middleware for CORS (Cross Origin Resource Sharing)
app.use(cors())

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//Request Handler for the Read Operation on the endpoint /api/items
app.get('/api/items', (req, res) => {
    //Fetch all data stored inside the items collection
    
})


//listening for connections to http://localhost:3000
app.listen(PORT, function () {
    console.log("listening on port 3000!");
  });