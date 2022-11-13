const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
// morgan me muestra informacion de el servidor
app.use(morgan('dev'))
//settings set and get
app.set('port', 3000)

//rutas
app.get('texto.txt', (req, res) => {
  res.send('ESTE ES UNA RUTA TEXTO.TXT')
})

app.get('note.txt', (req, res) => {
  res.send('ESTE ES UNA RUTA note.TXT')
})

app.use('/upload', express.static('./upload'))
///upload/texto.txt
app.use('/public', express.static('./public'))
//public/note.txt

// 

// app.use('/public', express.static(path.join(__dirname,'public')))
// path.join, une una parte a la url
// 
app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} en el puerto ${app.get('port')}`)
