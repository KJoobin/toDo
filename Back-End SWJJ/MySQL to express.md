#### MySQL 연동



express mysql 검색 



```javascript
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'opentutorials'
});

connection.connect();

connection.query('SELECT author FROM topic', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
});

connection.end();
```

