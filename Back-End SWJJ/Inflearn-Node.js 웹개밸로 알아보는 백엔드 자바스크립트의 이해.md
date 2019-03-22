**NPM Project 시작하기**									 2019년 3월 19일 화요일 오전 8시 31분\

#### NPM 이란?

- NPM 은 Node Package Maneger 의 약자이다.
- 자바스크립트 런타임 환경 Node.js 의 기본 패키지 관리자 이다.
- 패키지 라이브러리? 라 생각하면 편하다.

NPM 프로젝트를 만들때에는 윈도우에서도 할수있지만 맥에서는 조금더 쉽게 터미널로 할수있다.

##### npm init 

- **init** 은 새로운 프로젝트를 만들때 사용 
- **npm init ** 의 경우 package.json 이라는 파일을 생성

- 이후 이름을 정하고 yes 입력

- 노드기반의 무언가 를 하기위해  **package.json** 이 생긴다.

이 노드 기반의 자바스크립트 html,라이브러리 을 만들어놓구  npm 을 이용해서 설치를 해두고 깃에 올려두면 다른사람이 내 노드프로젝트를 사용할수있다., ?? 

검색 엔진에 **node based websever** 검색 

- 이 강좌에 경우 express 를 사용한다 .
- npm install express -save 를 하여 설치한다.
  - 이때 -save 를 하게되면 package.json 업데이트를 같이 해준다.
  - 만약 명령어를 모를경우 express node install 과 같이 검색을 하면 쉽게 찾을수 있다.

-save 는 이렇게 설치된 express 를 package.json에 넣어두고 나중에 다른사람이 필요해서 패키지.제이슨 을 다운받을떄 express 도 같이 설치되게 하는것이다.

package.json 을 열어보면 express 의 버젼정보가 나오고 node_modules 이 설치되었다 <-- express 가 필요한 모듈이 설치된것이다.(모듈 === 프로그램 )

직접 접근할 필요는 없다.( 아직은? )

------

**Express 기반 웹서버 구동**

- vi app,js 명령어로 

  -  vi 는 편집 명령어로써 **명령**모드 **입력**모드 **마지막 행** 모드 총3가지
  - 처음 들어가게 되면 **명령** 모드로써 방향키를 이용하여 커서를 이동 가능하며 dd yy 로 한줄 삭제 및 한 줄 분여넣기 또는 x 명령어로 글자 하나를 삭제할수 있다.
  - 명령모드에서 i 나 a 를 누르면 **입력** 모드로 전환된다.
  - 입력모드는 자유롭게 글을 수정할수있고 다시 명령모드로 돌아가려면 esc 를 누르면된다.
  - 명령모드에서 : 를 입력하면 마지막 행 모드가 실행된다
  - 마지막행 모드에서 w 는 저장 q 는 나가기 wq 는 저장후 나가기

  `var express = require('express')    //어떠한 노드_모듈 에 있는 express 관련된 파일을 가져와서` 

`var app = express().   		//express 가 함수이기 때문에 app 으로 가져와 한번더 실행한다.`

`app.listen(3000,function() {       	// listen 은 3000을 기반으로 함수가 실행됫다고 생각.`

​    console.log("start! express server on port 3000");

`})        	//300번 포트로 express sever 가 시작되었다.`

`console.log("end of code")` 

그 후 터미널로 node app,js 를 실행하여 콘솔이 잘 찍히나 확인.

- localhost:3000 으로 서버에 접속할수 있다. (. node 가 실행되어있다는 조건하에)  
  - localhost 는 127.0.0.1 과 같다 ( 대신 사용할수 있다.)

그후 code 에 console.log("end of srver code ") 를 친후 node app.js 를 실행하면  더 밑에줄(7번줄) 에 있는 console (end of server code) 가 먼저 찍힌후 app,listen 함수 안에있는 console ( sstart! exoress server on port 3000 ) 이 찍히는데 그 이유는 비동기로 실행 되기 때문이다. —— 동기적으로 ( 위에서 부터 차례대로 ) 실행되는것이 아니다. —— 비동기로 실행되는 콜백함수이다.

- nodemon 은 .node 로 실행되고 있는 파일의 내용이 바뀌면 바로바로 수정해서 다시 node 를 껏다 켜준다.
  - 설치 방법은 npm install nodemon 

\- save 보다는 -g 로 설치하면 내컴퓨터 어느곳에서나 다운받을수 있다..



## 최종코드

`var express = require('express')`

`var app = express()`



`app.listen(3000,function() {`

`console.log("start! express code")`

`})`

`console.log("end of code")`

------

**URL Routing 처리**														2019 03 20 수요일 22시 14분

- Routiong 의 의미

  -  라웃팅은 애플리케이션 URI ( Uniform Resource Identifier ) ( 인터넷에 있는 자원을 나타내는 유일한 주소 ) 의 정의, 그리고 URI 가 클라이언트 요청에 응답하는 방식을 말한다.

  

- app.get()
  - GET method is used when relatively non-confidential information is passed. Once this information is submitted, you can see it in your browser’s URL. Additionally, the information can be cached as well. It is because of this reason the GET is not the best method to transfer confidential information.
  - get method 는 기밀이 아닌 정보가 전달될때 사용된다. 정보가 submitted 되면 브라우저 URL 을 통해 볼수 있으며 캐싱 할수있다. 따라서 기밀정보를 전달할때는 좋지 않다.
  - cach 는 데이터나 값을 미리 복사해 놓은 임시 장소를 가리킨다.
- get , POST 의 차이점
  - 보안
    - get 은 URL 을 통해 볼수있으며 캐싱이 가능하다
    - POST 는 숨겨져  보내진다
  - 정보의 양
    - get 은 url 에 이어붙기 때문에 길이제한이 있어 많은 양의 데이터는 보내기 어렵다.
    - POST 는 많은 양을 보내기에도 적합하다 ( 용량 제한은 존재 )
  - 예
    - localhost:3000/main.html 과 같은 방식은 get 이다.
    - form 을 이용한 submit 의 경우 post 이다.
  - **결론**
    -  get 은 가져오는 것 이며 POST 는 수행하는 것 이다

- ex)

`app.get('/', function(req, res) { `

`res.send("<h1>hi friend!</h1>")})`



**main.html 을 만든후 전송법**



우선 main.html 파일을 만들어 html 양식을 작성한다 

모든 요청에 대해서 일일히 처리를 해주지 않을 경우 html js css 모든경우에서 작동하지 않는다.



`res.sendFile("경로(절대경로)")` or `res.sendFile(__dirname  + "상대경로" )` //__dirname 이 현제 app.js 의 경로를 갖는다 



| 메소드                                                       | 설명                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [res.download()](https://expressjs.com/ko/4x/api.html#res.download) | 파일이 다운로드되도록 프롬프트합니다.                        |
| [res.end()](https://expressjs.com/ko/4x/api.html#res.end)    | 응답 프로세스를 종료합니다.                                  |
| [res.json()](https://expressjs.com/ko/4x/api.html#res.json)  | JSON 응답을 전송합니다.                                      |
| [res.jsonp()](https://expressjs.com/ko/4x/api.html#res.jsonp) | JSONP 지원을 통해 JSON 응답을 전송합니다.                    |
| [res.redirect()](https://expressjs.com/ko/4x/api.html#res.redirect) | 요청의 경로를 재지정합니다.                                  |
| [res.render()](https://expressjs.com/ko/4x/api.html#res.render) | 보기 템플리트를 렌더링합니다.                                |
| [res.send()](https://expressjs.com/ko/4x/api.html#res.send)  | 다양한 유형의 응답을 전송합니다.                             |
| [res.sendFile](https://expressjs.com/ko/4x/api.html#res.sendFile) | 파일을 옥텟 스트림의 형태로 전송합니다.                      |
| [res.sendStatus()](https://expressjs.com/ko/4x/api.html#res.sendStatus) | 응답 상태 코드를 설정한 후 해당 코드를 문자열로 표현한 내용을 응답 본문으로서 전송합니다. |

- https://expressjs.com/ko/guide/routing.html





## 최종 코드



`var express = require('express')`

`var app = express()`



`app.listen(3000,function() {`

`console.log("start! express code")`

`})`



`app.get('/',function(req,res) {`

`res.send("<h1>hello world</h1>")`

})`

`console.log("end of code")`



------

**static 디레고리 설정**														2019 03 21 목요일 07:40

- 목적 

  - main.html 을 보강하는 강좌
  - main.html 파일에 script src 를 통해 .js 파일을 연동하고 싶을경우

- 아무설정을 하지않고 html 파일에 src 를 통해 넣을경우 

  -  .js 파일이 404 에러가 뜨며 작동되지 않고 html 파일만 작동이 된다.
  - 왜?
    - .js 파일에 대한 URL 설정을 하지 않았기 때문에 동작하지 않는다
    - javascript / css / 이미지 파일 을 static 파일이라 부른다 ( 정적이기 때문 ) ; 

- static 디렉토리를 express 에 설정하는 법

  - app.use( express.static ('디렉토리' ) ); 을 타이핑 하면된다.
  - 디렉토리 의 폴더를 설정해도 된다.
  - app.get()  보다 위쪽에 타이핑한다 ( ? );

- 다른 URL 을 설정하고싶은경우

  -  `app.get('/', function(req, res) { `

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

`var express = require('express')`

`var app = express()`



`app.listen(3000,function() {`

`console.log("start! express code")`

`})`

`app.use(express.static(__dirname + "/test"))`

`app.get('/',function(req,res) {`

`res.sendFile(__dirname +"/test/main.html")`

})`

`console.log("end of code")`



**main.html**

``<!DOCTYPE html>`
`<html lang="en" dir="ltr">`

  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1> hello world </h1>
    <script src = "main.js"> </script>
  `</body>`
`</html>``



**main.js**

console.log("hello world")





------

#### POST 요청처리

​								2019 03 21 목요일 22:00

- 위에도 설명하였듯이 get 과 POST 는 비슷하지만 다르다.

  - get 은 POST 와 다르게 url 에 정보가 담겨 길이에도 제한이 있으며 모두가 그 정보를 볼수있다.
  - 따라서 서버로 데이터를 보낼때에는 get 보다는 POST 가 더 좋은 방법이다.

- HTML 에서 form 태그 사용법

  - 기본 html 구조를 작성후 body 태그안에 form 태그를 작성한다

    - 이떄 action 은 받은 데이터를 어디로 보낼것인가?

    - method 는 어떠한 방식으로 보낼것인가?

    - form 태그 안에 input 태그를 ( type = "text") 사용해 name 을 지정하면 데이터의 key 값이 된다.

    - 이후 버튼 이나 input type = "submit " 을 작성후

    - form 태그를 닫는다.

    - ex) <body> 

      <form action = "/email_post" method = "post"> email : <input type = "text" name = "email"></input><br/>

      <input type = "submit"> 

      </input>

      </form>

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

`var express = require('express')`
`var app = express()`

`app.listen(3000,function() {`
  console.log("start, express code")
})

`app.use(express.static(__dirname + '/test'));`
`app.use(express.json());`
`app.use(express.urlencoded({extended:true}))`

`app.get('/',function(req,res) {`
  res.sendFile(__dirname + "/test/form.html")
})

`app.post('/email_post',function(req, res) {`
  `res.send(req.body);`
`})`
`console.log("end,of code");`



form.html

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

------

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

app.js

`var express = require('express')`
`var app = express()`

`app.listen(3000,function() {`
  console.log("start, express code")
})

`app.use(express.static(__dirname + '/test'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/',function(req,res) {
  res.sendFile(__dirname + "/test/form.html")`
`})`

`app.post('/email_post',function(req, res) {`
  //res.send(req.body);
  res.render('email.ejs',{'email':req.body.email})
})
console.log("end,of code");



email.ejs

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

------

####JSON 활용한 Ajax 처리

2019 03 22 금요일 

- ajax ( Asynchronous Javascript and XML ) 
  - 비동기적인 웹 애플리케이션의 제작을 위해 사용하는 웹 개발 기법
    1. 표현 정보를 위한 HTML 과 CSS
    2. 동적인 화면 출력 및 표시 정보와의 상호작용을 위한 DOM,자바스크립트
    3. 웹 서버와 비동기적을 데이터를 교환하고 조작하기 위한 XML,XSLT,XMLHttpRequest

<p><a href="https://commons.wikimedia.org/wiki/File:Ajax-vergleich-en.svg#/media/File:Ajax-vergleich-en.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ajax-vergleich-en.svg/1200px-Ajax-vergleich-en.svg.png" alt="Ajax-vergleich-en.svg"></a><br>By DanielSHaischt, via Wikimedia Commons - <a class="external free" href="https://commons.wikimedia.org/wiki/File%3AAjax-vergleich.svg">https://commons.wikimedia.org/wiki/File%3AAjax-vergleich.svg</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=29724785">링크</a></p>

- 기존 기술과 다른점
  - 기존 기술은 submit 을 하면 최초에 폼을 가지고 있던 페이지와 이 폼을 채워 결과물로서 받는 페이지와 유사하여 결과적으로 중복되는 HTML 코드를 다시 한번 전송을 받음으로써 많은 대역폭을 낭비한다.
  - Ajax 는 필요한 데이터만을 웹서버에 요청해서 받은후 클라이언트에서 데이터에 대한 처리를 할수있다.



- 목적 
  -  Ajax 을 보낼때도 json 형태로 보내고 서버에서 확인했다는 가정하에 응답값도 ajax 로 보낸다.

1. form.html 에 button 태그를 만든후 class ="ajax" 를 준다.
2. 만든 button 에 클릭이벤트를 준다 
3. 결과값을 출력할 div class = "emailAdress" 를 추가한다.



`document.querySelector(".ajax").addEventListener("click",function () {`
  `var inputData = document.forms[0].elements[0].value; //이메일값 inputData 에 저장`
  `sendAjax('http://localhost:3000/ajax_send_email',inputData)`
`})`
`function sendAjax(url,data) {`
  `var data = {'email' : data};`
  `var xhr = new XMLHttpRequest(); //https://developer.mozilla.org/ko/docs/XMLHttpRequest`

  `data = JSON.stringify(data); //ajax 로 보낼떄는 문자로 보낸다.` 
  `xhr.open('POST',url); // 요청을 초기화한다.`
  `xhr.setRequestHeader('Content-type','application/json');`
  `xhr.send(data); 요청을 보낸다. 요청이 비동기일경우 요청이 보내진 즉시 반환한다.`
  `xhr.addEventListener('load',function() { //load이벤트는 리소스와 그것에 의존하는 리소스들의 로딩이 완료되면 실행한다.`

  `var result = JSON.parse(xhr.responseText);`

  `document.querySelector(".emailAdress").innerHTML = result.email;`
  `})`
`}`



이후 app.js 에

`app.post('/ajax_send_email',function(req,res) {`

`console.log(req.body.email); 	//데이터가 잘 오는지 확인`

`var responseData = {'result':'ok','email':req.body.email};`

`res.json(responseData);`

`})`





------



#### MySQL 연동

