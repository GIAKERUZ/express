const express = require('express')

const app = express()

app.get('/hello/:name', (req, res) => {
  console.log(req.params.name)
  res.send(`hello ${req.params.name.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
  const { x, y } = req.params
  res.send(`Result ${parseInt(x) + parseInt(y)}`)
})

app.get('/user/:usuario/photo', (req, res) => {
  if (req.params.usuario === 'kake') {
     return res.sendFile('./huevos.png', { root: __dirname })
  }
    res.send('el usuario no tiene acceso')
  
})

const port = 3000
app.listen(port)
console.log(`se llamo al puerto ${port}`)
