var express = require('express')
var fs = require('fs')
var app=express()

fs.readFile(process.argv[3],function(err,data){
  if(err){res.send("Error ",err)}
  app.get('/books',function(req,res){
    res.json(JSON.parse(data.toString()))
  })
})

app.listen(process.argv[2])

/**solution
var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
**/
