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

