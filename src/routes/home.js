const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  let isActive = false

  const users = [
    {
      id: 1,
      name: 'Ryan',
      lastname: 'Perez'
    },
    { id: 2, name: 'Nicol', lastname: 'Marquez' }
  ]

  res.render('index', { title: 'titulo de home', isActive, users })
})

router.get('/about', (req, res) => {
  res.render('about')
})

// llamando datos de otro servidor

router.get('/posts', async (req, res) => {
  const call = await fetch('https://jsonplaceholder.typicode.com/posts')
  const response = await call.json()
  
  res.render('posts',{response})
})
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router
