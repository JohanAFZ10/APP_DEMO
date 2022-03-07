const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hola',function (req, res){
    res.send('hola soy el servidor')
});
app.get('/test',function (req, res){
    res.send('inicie con el test')
});

app.listen(3000)