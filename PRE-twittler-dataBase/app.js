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

app.use(express.static(__dirname + "/js"))

app.get('/',function(req,res) {
  console.log(req.body);
  res.sendFile(__dirname + "/index/index.html");
})

app.post('/text',function(req,res) {
  connection.query(`SELECT * FROM twit`, function(err,rows) {
    if(err) throw err;
    res.json(rows);
  })
})

app.post('/text_add',function(req,res) {
  var responseData = [];
  console.log(`${req.body.author},${req.body.description}`);
  connection.query(`INSERT INTO twit (author,description,created) VALUES("${req.body.author}","${req.body.description}",NOW())`, function(err,rows) {
    if(err) throw err;
    responseData.push(req.body)
    res.json(responseData);
    // connection.query(`SELECT * FROM twit`, function(err,rows) {
    //   if(err) throw err;
    //   res.json(rows[rows.length - 1]);
    // })
  })
})

app.get('/user',function(req,res) {
  console.log(req._parsedOriginalUrl.path)
res.sendFile(__dirname + "/index/user.html");
})
