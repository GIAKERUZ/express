const express = require('express')

const app = express()

// app.get('/', (req, res) => {
//   res.send('<h1>Hellow World</h1>')
// })

// app.get('/about', (req, res) => {
//   res.send('Acerca de')
// })

// app.get('/weather', (req, res) => {
//   res.send('The curren weather is Nice')
// })

// app.use((req, res) => {
//   res.status(404).send('La pagina no se encontro')
// })

app.get('/products', (req, res) => {
  res.send('lista de productos')
})

app.post('/products', (req, res) => {
  res.send('creando productos')
})

app.put('/products', (req, res) => {
  res.send('actualizando productos')
})

app.delete('/products', (req, res) => {
  res.send('borrando productos')
})

app.patch('/products', (req, res) => {
  res.send('actualizando un dato de un producto')
})

app.all('/info', (req, res) => {
  res.send('server info')
})

const port = 3000
app.listen(port)
console.log(`se llamo al puerto ${port}`)
