const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ganti URL koneksi dengan URL MongoDB Anda
require('dotenv').config();
const url = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;


MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err);
  
  const db = client.db(dbName);

  // Endpoint untuk menyimpan data login
  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const collection = db.collection('users');

    collection.findOne({ username, password }, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // Endpoint untuk menyimpan data penjualan harian
  app.post('/api/penjualanHarian', (req, res) => {
    const { namaBarang, jumlahBarang, hargaBarang } = req.body;
    const collection = db.collection('penjualan_harian');

    collection.insertOne({ namaBarang, jumlahBarang, hargaBarang }, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // Tambahan endpoint lain sesuai kebutuhan

  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
});
