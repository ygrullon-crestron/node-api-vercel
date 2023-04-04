// index.js
// const express = require('express');

// const app = express();
// const PORT = 4000;
const app = () => {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://yesmargrullon:<password>@cluster0.fagt6lv.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log(collection);
    client.close();
  });
}
// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `)
// })

// app.get('/', (req, res) => {
//   res.send('Hey this is my API running 🥳')
// })

// app.get('/about', (req, res) => {
//   res.send('This is my about route..... ')
// })

// Export the Express API
module.exports = app