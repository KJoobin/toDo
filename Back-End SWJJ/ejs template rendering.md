#### ejs 를 활용한 View 템플릿 응답

2019 03 22 금요일

- ejs 란 ??

  - view engine 이다
  - html 에 데이터를 바꾸어서 클라이언트에 보낼때 적절한 데이터를 적적한 위치에 치환하여 보낸다.

- view engine ?

  - 템플리트를 렌더링;

    - **템플릿**(template)은 [C++](https://ko.wikipedia.org/wiki/C%2B%2B) 프로그래밍 언어의 한 기능으로, 함수와 클래스가 [제네릭 형](https://ko.wikipedia.org/wiki/%EC%A0%9C%EB%84%A4%EB%A6%AD_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)과 동작할 수 있게 도와 준다. 함수나 클래스가 개별적으로 다시 작성하지 않고도 각기 다른 수많은 [자료형](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%A3%8C%ED%98%95)에서 동작할 수 있게 한다

    - rendering은 renderer engine(skia)이 합니다.

      Render는 html로 입력받아 해석해서 표준 출력 장치(모니터)로 출력 해 줍니다

      위 작업을 Rendering이라고 합니다

  - The view engine is responsible for creating HTML from your views. Views are usually some kind of mixup of HTML and a programming language. The pattern behind most of these is called [two-step view](http://martinfowler.com/eaaCatalog/twoStepView.html)

- 실습

  1. 모듈을 설치한다 ( express view engine 검색)

     강의에서는 ejs 를 사용 ( npm install ejs --save)

  2. app.set( 'view engine', 'ejs') 코드 작성 

     view engine 대신 ejs 를 사용한다는 의미의 코드이다.

  3. views 라는 폴더를 만든후 email.ejs 파일을 만든다

  4. email.ejs 파일에 html 양식을 쓰고 h1 태그안에 <%= email %> 을 작성한다.

  5. 이후 app.post 안에 res.render('email.ejs',{'email' : 'req.body.email'}) 을 작성한다.  <—— email.ejs 파일안에 'email' 이라는 문구 대신 'req.body.email' 을 치환해 라는 의미이다.

- express view engine 검색후 이것저것 해본다.



## 최종 코드

**app.js**

```javascript
var express = require('express')
var app = express()

app.listen(3000,function() {
  console.log("start, express code")
})

app.use(express.static(__dirname + '/test'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/',function(req,res) {
  res.sendFile(__dirname + "/test/form.html")
})

app.post('/email_post',function(req, res) {
  //res.send(req.body);
  res.render('email.ejs',{'email':req.body.email})
})
console.log("end,of code");


```

**email.ejs**

```javascript
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  
    <h1> Hello <%= email %></h1>
    <p> Wello come<p>
    
  </body>
</html>
```

