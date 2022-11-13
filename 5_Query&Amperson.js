const express = require('express')

const app = express()

app.get('/hola/:nombre', (req, res) => {
  console.log(req.query)
  res.send(`hola ${req.params.nombre}`)
//   http://localhost:3000/hola/gianfranco?marquez
})

const port = 3000
app.listen(port)
console.log(`se llamo al puerto ${port}`)
