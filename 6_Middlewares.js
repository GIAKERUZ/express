const express = require('express')

const app = express()

// middleware
app.use((req, res, next) => {
  console.log(`Route: ${req.url} Metodo: ${req.method}`)
  next()
})

app.use((req, res, next) => {
  if (req.query.login === 'gianco@gmail.com') {
    next()
  } else {
    res.send('No autorizado')
  }
  next()
})

app.all('/dashboard', (req, res) => {
  res.send('dashboard page ')
})

// app.use((req, res) => {
//   console.log('se fue de aqui')
// })

const port = 3000
app.listen(port)
console.log(`se llamo al puerto ${port}`)
