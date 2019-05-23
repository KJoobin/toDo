var express = require('express');
var app = express();
var router = express.Router()
var writeTwit = require('./writeTwit')
var filter = require('./filter')
var path = require('path') //path.join(__dirname,/../public/index.html)
var mysql = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'opentutorials'
});

connection.connect();


router.get('/',function(req,res) {
  res.render(path.join(__dirname, "../index/index.ejs"),{title:"Hello twit",twit_text : "write text"})
})

router.use('/write_twit',writeTwit)
router.use('/filter',filter)

module.exports = router;
