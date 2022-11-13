const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/miarchivo', (req, res) => {
  res.sendFile('./huevos.png', { root: __dirname })
})

app.get('/user', (req, res) => {
  res.json({
    name: 'gianfranco',
    age: 26,
    color: 'red',
    game: 'dragon nest'
  })
})

app.get('/isalive', (req, res) => {
    //envia un status sin mostrar ningun contenido ni cambiar de ruta
    //muy diferente a .status que si envia algo
  res.sendStatus(204)
})

const port = 3000
app.listen(port)
console.log(`se llamo al puerto ${port}`)
