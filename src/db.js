const mysql = require('mysql2/promise')

const connectDB = async () => {
  const connection = await mysql.createConnection({
    host: 'aws-sa-east-1.connect.psdb.cloud',
    user: '2tugxuqbgonl6p6fxh5m',
    password: 'pscale_pw_2lcNxXa7YubRmbXben2jxygL7bopsBeS1zpNDsgu2lU',
    database: 'expressdb',
    ssl: {
      rejectUnauthorized: false
    }
  })

  const result = await connection.query('SELECT "Hello world" AS Result')
  
}

module.exports = connectDB
