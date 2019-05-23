var express = require("express")
var app = express()
var router = express.Router();
var mysql = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'opentutorials'
});

connection.connect();


router.get('/',function(req,res) {
  console.log(req.body);
  if(req.body.id === undefined) {
  connection.query(`SELECT * FROM twit`, function(err,rows) {
    if(err) throw err;
    res.json(rows);
  })
  } else {
    connection.query(`SELECT * FROM twit WHERE id < ${req.body.id} && id > ${req. body.id + 5}`,function(err, rows) {
    if(err) throw err;
    res.json(rows);
  })
}
})

router.post('/',function(req,res) {
  var responseData = [];
  console.log(req.body);
  connection.query(`INSERT INTO twit (author,description,created) VALUES("${req.body.author}","${req.body.description}",NOW())`, function(err,rows) {
    if(err) throw err;
    res.json(req.body);
  })
})

module.exports = router;
