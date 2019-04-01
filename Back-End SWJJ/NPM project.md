**NPM Project 시작하기**									 2019년 3월 19일 화요일 오전 8시 31분

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



