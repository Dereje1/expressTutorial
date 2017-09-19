var express = require('express')
var app=express()
app.use(express.static(process.argv[3]))
//note argv[3] is a folder where the static files are saved
app.listen(process.argv[2])
