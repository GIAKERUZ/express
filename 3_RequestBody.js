const express = require('express')

const app = express()

app.use(express.text())
app.use(express.json())
//le decimos que es una url simple y que no necesita interpretar ningun dato complicado solo textos (FORM)
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('Nuevo usuario creado')
})

const port = 3000
app.listen(port)
console.log(`se llamo al puerto ${port}`)