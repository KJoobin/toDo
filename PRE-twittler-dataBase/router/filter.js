var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'opentutorials'
});

connection.connect();

router.get('/',function(req,res) {
  var author = req.query.author;
  connection.query(`SELECT * FROM twit WHERE author = ?`,[author],function(err, rows) {
    if(err) throw err;
    res.send(rows);
    // res.render(path.join(__dirname , "../index/index.ejs"),{title:"hello world",twit_text:rows})
    // res.send(rows);
  })
})

module.exports = router;
