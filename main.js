var express = require('express')
var app = express()

//web
app.use('/web', express.static('web'));

//API
var api = require('./api')
app.use('/api', api)

app.listen(3000, function(){
    console.log('Servidor express iniciado!')
})