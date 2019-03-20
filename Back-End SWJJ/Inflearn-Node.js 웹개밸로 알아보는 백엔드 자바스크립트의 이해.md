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



------

