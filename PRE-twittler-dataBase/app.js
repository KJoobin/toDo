var express = require('express');
var app = express();
var router = require('./router/index')
var path = require('path') //path.join(__dirname,/../public/index.html)




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs")

app.listen(3000,function() {
  console.log("strat! port 3000;")
})

app.use(express.static(__dirname + "/js"))

app.use(router);
