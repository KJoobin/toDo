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
  res.sendFile(__dirname + "/index/index.html")
})

app.post('/text',function(req,res) {  //행위 기술  write post , write twit
  connection.query(`SELECT * FROM twit`, function(err,rows) {
    if(err) throw err;
    res.json(rows);
  })
})

app.post('/text_add',function(req,res) {
  var responseData = [];
  connection.query(`INSERT INTO twit (author,description,created) VALUES("${req.body.author}","${req.body.description}",NOW())`, function(err,rows) {
    if(err) throw err;
    responseData.push(req.body)
    res.json(responseData);
  })
})

app.post('/filter',function(req,res) {
  var author = req.body.author;
  app.get(`/${req.body.author}`,function(require,response) {
    response.sendFile(__dirname + `/index/user.html`);
    connection.query(`SELECT * FROM twit WHERE author = "${author}"`,function(err,rows) {
    if(err) throw err;
    console.log(author);
    app.post('/author',function(req,res) {
      console.log(author);
        res.json(rows);
    })
    })
  })
})
