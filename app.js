const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Sistema')
console.log('Conectado com mongo!')




app.listen(3000, function () {
  console.log('Servidor rodando na port 3000!');
});