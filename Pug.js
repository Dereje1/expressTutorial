var express = require('express')
var app=express()
app.set('view engine','pug')//engine must be specified
app.set('views', process.argv[3])//views must be set to absoolute path
app.get('/home',function(req,res){
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
