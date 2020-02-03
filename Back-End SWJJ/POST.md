**POST 요청처리**											 2019 03 21 목요일 22:00

-  get 과 POST 는 비슷하지만 다르다.

  - get 은 POST 와 다르게 url 에 정보가 담겨 길이에도 제한이 있으며 모두가 그 정보를 볼수있다.
  - 따라서 서버로 데이터를 보낼때에는 get 보다는 POST 가 더 좋은 방법이다.

- HTML 에서 form 태그 사용법

  - 기본 html 구조를 작성후 body 태그안에 form 태그를 작성한다

    - 이떄 action 은 받은 데이터를 어디로 보낼것인가?

    - method 는 어떠한 방식으로 보낼것인가?

    - form 태그 안에 input 태그를 ( type = "text") 사용해 name 을 지정하면 데이터의 key 값이 된다.

    - 이후 버튼 이나 input type = "submit " 을 작성후

    - form 태그를 닫는다.

    - ex) 

      ```javascript
      <body> 
        <form action = "/email_post" method = "post">
          email : <input type = "text" name = "email"></input><br/>
          <input type = "submit" /> 
        </form>
      </body>
      ```

      

- get 의 경우에는 req.param('email') 처럼 받을수 있지만

- POST 데이터 받는방법

  - express v4.16.0 기준 별도의 설치는 필요없지만 그 밑의 버전에서는 body-parser 을 설치하여야한다

    - 설치법 : npm install body-parser --save

  - 이후 `app.post('/email_post', function(req, res) {`

    `res.send("post response");`

    `})`

  - 을 통해  post 가 잘 작동되는지 확인후 

  - `app.use ( express.json()).  //버전이 낮을경우  var bodyParder = require('body-parser') 을 호출후 express 대신 bodyParder` 

  - app,use(express.urlencoded({extended:true})) 를 작성 (외우기)`

- 위의 코드를 쓰는이유?

  - 클라이언트 와 서버가 자료를 주고받을때 인코딩 ( 아스키 코드로 ) 해서 주고 받거나 문장로 들어오기 때문이다.

정보를 사용하려면 req.body 로 사용할수있다 ( object 로 온다.)



## 최종 코드

app.js

```javascript
var express = require('express')
var app = express()

app.listen(3000,function() {
  console.log("start, express code")
})

app.use(express.static(__dirname + '/test'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res) {
 res.sendFile(__dirname + "/test/form.html")
})

app.post('/email_post',function(req, res) {
 res.send(req.body);
})
console.log("end,of code");
```



form.html

```javascript
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  
    <form action="/email_post" method="post"> email :
      <input type="text" name="email"></input><br/>
     <input type= "submit"></input>
</form>

  </body>
</html>
```

