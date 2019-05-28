const express = require('express')
// const mysql = require('mysql')
// const con = mysql.createConnection({
//   host: "localhost",
//   port: 8001,
//   user: "root",
//   password: "complexpassword",
//   database: 'Customers'
// })

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!")
// })

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello Chris!'))

app.get('/docker', (req, res) => {
  res.send('eae men')
})

app.get('/nodemon', (req, res) => {
  res.send('<h1>Eae</h1><p>teste</p>')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))