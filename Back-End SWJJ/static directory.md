static 디레고리 설정												2019 03 21 목요일 07:40

- 목적 
  - main.html 을 보강하는 강좌
  - main.html 파일에 script src 를 통해 .js 파일을 연동하고 싶을경우



- 아무설정을 하지않고 html 파일에 src 를 통해 넣을경우 

  - .js 파일이 404 에러가 뜨며 작동되지 않고 html 파일만 작동이 된다.
    - .js 파일에 대한 URL 설정을 하지 않았기 때문에 동작하지 않는다
    - javascript / css / 이미지 파일 을 static 파일이라 부른다 ( 정적이기 때문 ) ; 

- static 디렉토리를 express 에 설정하는 법

  - `app.use( express.static ('디렉토리' ) );`
  - 디렉토리 의 폴더를 설정해도 된다.
  - app.get()  보다 위쪽에 타이핑한다 ( ? );

- 다른 URL 을 설정하고싶은경우

  - `app.get('/', function(req, res) { `

    `res.send("<h1>hi friend!</h1>")})`

     와 같이

    `app.get ( '/main', function(req, res ) {` 

    `res.sendFile(__dirname + " /test/main.html ")`

    `})`

    `__dirname+"/test/main.html" //대신`

    `"${__dirname}/test/main.html" //로 남길수있다.`

    

    설정을 하면 localhost:3000/ 을 입력하면 hi friend! 	가 출력되고

    localhost:3000/main 을 입력하면 test 파일안에 있는 main.html 이 출력된다.

    - localhost:3000 대신 127.0.0.1:3000 으로 들어갈수 있다



## 최종 코드

**app.js**

```javascript
var express = require('express')
var app = express()

app.listen(3000,function() {
console.log("start! express code")
})

app.use(express.static(__dirname + "/test"))
app.get('/',function(req,res) {
res.sendFile(__dirname +"/test/main.html")
})
console.log("end of code")
```



**main.html**

```javascript
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1> hello world </h1>
    <script src = "main.js"> </script>
 </body>
</html>
```

**main.js**

```javascript
console.log("hello world")
```



