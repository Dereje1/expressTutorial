var express = require('express')
var style = require('stylus')
var app=express()
console.log(process.argv[3]+"\\main.styl")
app.use(style.middleware(process.argv[3]))
app.use(express.static(process.argv[3]))
//app.get("/")
app.listen(process.argv[2])