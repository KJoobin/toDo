

```javascript
var express = require('express')   //어떠한 노드_모듈 에 있는 express 관련된 파일을 가져와서 

var app = express().   		//express 가 함수이기 때문에 app 으로 가져와 한번더 실행한다.

app.listen(3000,function() {       	// listen 은 3000을 기반으로 함수가 실행됫다고 생각.

  console.log("start! express server on port 3000");

})        	//300번 포트로 express sever 가 시작되었다.

console.log("end of code") 
```



그 후 터미널로 node app,js 를 실행하여 콘솔이 잘 찍히나 확인.

- localhost:3000 으로 서버에 접속할수 있다. (. node 가 실행되어있다는 조건하에)  
  - localhost 는 127.0.0.1 과 같다 ( 대신 사용할수 있다.)

위의 코드를 실행하면  end of code 가 먼저 실행되고 start! express server on port 3000 이 실행된다 

그 이유는 end of code 는 동기적으로 실행되는데 start! express server on port 3000 은 비동기적으로 실행되기 때문이다.

- 동기 
  - 요청과 그 결과가 동시에 일어난다.
  - 설계가 매우 간단하고 직관적이지만 결과가 주어질 때까지 아무것도 못하고 대기해야 하는 단점이 있다.
-  비동기 
  - 요청한 그 자리에서 결과가 주어지지 않음
  - 동기보다 복잡하지만 결과가 주어지는데 시간이 걸리더라도 그 시간 동안 다른 작업을 할수 있으므로 자원을 효율적으로 사용할수 있다.

그후 code 에 console.log("end of srver code ") 를 친후 node app.js 를 실행하면  더 밑에줄(7번줄) 에 있는 console (end of server code) 가 먼저 찍힌후 app,listen 함수 안에있는 console ( sstart! exoress server on port 3000 ) 이 찍히는데 그 이유는 비동기로 실행 되기 때문이다. —— 동기적으로 ( 위에서 부터 차례대로 ) 실행되는것이 아니다. —— 비동기로 실행되는 콜백함수이다.

- nodemon

  - node 로 실행되고 있는 파일의 내용이 바뀌면 바로바로 수정해서 다시 node 를 껏다 켜준다.

  - 설치 방법은 npm install nodemon 
  - save 보다는 -g 로 설치하면 내컴퓨터 어느곳에서나 다운받을수 있다..



## 최종코드

```javascript
var express = require('express')

var app = express()



app.listen(3000,function() {

  console.log("start! express code")

})

console.log("end of code")


```

