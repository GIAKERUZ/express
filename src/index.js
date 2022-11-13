const express = require('express')
const morgan = require('morgan')
const path = require('path')
const connectDB = require('./db')
require('ejs')

connectDB()

const app = express()

const HomeRouter = require('./routes/home')
const UserRouter = require('./routes/users')

//settings set and get
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
// morgan me muestra informacion de el servidor
app.use(morgan('dev'))

app.use(HomeRouter)
app.use(UserRouter)

app.use('/upload', express.static(path.join(__dirname, 'upload')))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'))
console.log(`Server en el puerto ${app.get('port')}`)
