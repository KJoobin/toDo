var express = require('express');
var app = express();
var mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'opentutorials'
});

connection.connect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,function() {
  console.log("strat! port 3000;")
})

app.get('/',function(req,res) {
  res.sendFile(__dirname + "/index/index.html")
})

app.use(express.static("js"))

app.get('/write_twit',function(req,res) {
  connection.query(`SELECT * FROM twit`, function(err,rows) {
    if(err) throw err;
    res.json(rows);
  })
})

app.post('/write_twit',function(req,res) {
  var responseData = [];
  console.log(req.body);
  connection.query(`INSERT INTO twit (author,description,created) VALUES("${req.body.author}","${req.body.description}",NOW())`, function(err,rows) {
    if(err) throw err;
    res.json(req.body);
  })
})
