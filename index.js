// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳 ha ha ha')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})


const mysql = require("mysql2/promise");

const insertIntoDB = async () => {
    const connection = await mysql.createConnection({
        host: "sql9.freemysqlhosting.net",
        user: "sql9610911",
        password: "NaSUMz2EYi",
        database: "sql9610911",
        port: 3306,
    })

    try {
        await connection.query(
            "SELECT * FROM teamMembers"
        ).then(
          data=>{
            console.log(data);
          }
        )
    } catch (e) {
        console.log(e)
    }
}

insertIntoDB();

// Export the Express API
module.exports = app