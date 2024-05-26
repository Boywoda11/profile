// import express.js
const express = require("express");

// Buat instance aplikasi express
const app = express();

// defenisikan rute atau middleware di sini

// mulai server
const port = 3000; //port yang di gunakan (misalnya, 3000)
app.listen(port, () => {
  console.log("server berjalan di http://localhost:${port}");
});
