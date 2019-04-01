**URL Routing 처리**														2019 03 20 수요일

- Routiong 의 의미

  - 라웃팅은 애플리케이션 URI ( Uniform Resource Identifier ) ( 인터넷에 있는 자원을 나타내는 유일한 주소 ) 의 정의, 그리고 URI 가 클라이언트 요청에 응답하는 방식을 말한다.
  - URI = URL(Uniform Resource Locator) + URN( Uniform Resource Name)

  

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
    - get 은 가져오는 것 이며 POST 는 수행하는 것 이다

- ex)

```
app.get('/', function(req, res) {

res.send("<h1>hi friend!</h1>")})
```



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



```javascript
var express = require('express')
var app = express()

app.listen(3000,function() {
console.log("start! express code")
})

app.get('/',function(req,res) {
res.send("<h1>hello world</h1>")
})

console.log("end of code")
```

