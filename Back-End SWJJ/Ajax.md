**JSON 활용한 Ajax 처리** 												2019 03 22 금요일 

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
  - Ajax 을 보낼때도 json 형태로 보내고 서버에서 확인했다는 가정하에 응답값도 ajax 로 보낸다.

1. form.html 에 button 태그를 만든후 class ="ajax" 를 준다.
2. 만든 button 에 클릭이벤트를 준다 
3. 결과값을 출력할 div class = "emailAdress" 를 추가한다.

**form.html 과 연동된 .js 파일**

```javascript
document.querySelector(".ajax").addEventListener("click",function () {
  var inputData = document.forms[0].elements[0].value; //이메일값 inputData 에 저장
  sendAjax('http://localhost:3000/ajax_send_email',inputData)
})

function sendAjax(url,data) {
  var data = {'email' : data};
  var xhr = new XMLHttpRequest();    	//https://developer.mozilla.org/ko/docs/XMLHttpRequest`

  data = JSON.stringify(data); //ajax 로 보낼떄는 문자로 보낸다.`
  xhr.open('POST',url); // 요청을 초기화한다.
  xhr.setRequestHeader('Content-type','application/json');// 반듯이 open 이후에 설정되며 send 이전에 호출되어야한다.
  xhr.send(data); //요청을 보낸다. 요청이 비동기일경우 요청이 보내진 즉시 반환한다.
//(보낼때 JSON.stringify(오브젝트) 형식으로 보내야한다,)
  xhr.addEventListener('load',function() { //load이벤트는 리소스와 그것에 의존하는 리소스들의 로딩이 완료되면 실행한다.
    
  var result = JSON.parse(xhr.responseText);
  document.querySelector(".emailAdress").innerHTML = result.email;
  })
}
```

**app.js** 

```javascript
app.post('/ajax_send_email',function(req,res) {
console.log(req.body.email); 	//데이터가 잘 오는지 확인
var responseData = {'result':'ok','email':req.body.email};
res.json(responseData); ( res.json 에 관하여 공부필요)
})
```

