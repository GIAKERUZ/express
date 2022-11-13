const express = require('express')
const morgan = require('morgan')
const app = express()

// setting and case sensitive
app.set('case sensitive routing', true)
// guardar una variable set en express
app.set('appName', 'Express ELKAKE')
app.set('port', 3000)

let products = [
  {
    id: 1,
    name: 'remera',
    price: '15$'
  }
]
app.use(express.json())
app.use(morgan('dev'))

// gettt
app.get('/products', (req, res) => {
  res.json(products)
})

// post
app.post('/products', (req, res) => {
  const producto = { ...req.body, id: products.length + 1 }
  products = [...products, producto]
  res.json(producto)
})

// put
app.put('/products/:id', (req, res) => {
  const newData = req.body
  const id = parseInt(req.params.id)
  const productFound = products.find(e => e.id === id)

  if (!productFound)
    return res.status(404).json({ mensaje: 'No se encontro el id' })

  products = products.map(p => (p.id === id ? { ...p, ...newData } : p))
  res.json(products)
})

// delete
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const productFound = products.find(e => e.id === id)

  if (!productFound)
    return res.status(404).json({ mensaje: 'No se encontro el id' })

  products = products.filter(p => p.id != id)
  res.sendStatus(204)
})

// find get
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const productFound = products.find(e => e.id === id)

  if (!productFound)
    return res.status(404).json({ mensaje: 'No se encontro el id' })

  res.json(productFound)
})

const port = 3000
app.listen(app.get('port'))
console.log(`se llamo al puerto ${port}`)
