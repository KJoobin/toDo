##Javascript  

#####HTML

######  HTML? 뜻

- HyperText Markup Language 의 약자이다.

  Web page 의 툴을 만드는 마크업 언어

###### HTML 의 구성요소, 사용법

- HTML 은 tag 들의 집합이다.

  <!DOCTYPE html>        	 	이 문서가 HTML 문서임을 명시
      <html>					html 시작 태그 문서 전체의 툴을 구성
          <head>				문서의 메타데이터(다른 데이터에 대한 정보를 설명하고 제공하는 데이터 세트.)를 선언
              <title></title>	문서의 제목 브라우저의 탭에 보여진다.
          </head>				
          <body>				문서의 내용을 담는곳
          </body>				끝나는 지점
  </html>						끝나는 지점

- Tag 에 내용이 없을경우
  <img src = "url" /> 로 끝내도 된다.

###### 태그 설명

- div vs span 공통점

  태그 자체에 의미는 없다 -> 내용을 꾸미는 용도로 사용된다

- 차이점

  div 의 경우 block-line (한줄) 이고 span 은 in-line (컨텐츠 크기 만큼) 이다.

- Img - 이미지를 첨가할떄 사용함 img src = "url" 등으로 사용
- a - Link 를 걸때 사용한다.
- input - type 에 따라 사용법이 다르다.
- textarea - 여러줄을 입력받을때 사용된다.
- button - 버튼
- form - 사용자의 입력을 수집하는 데 사용되는 양식이다. input button 등과 함께 사용된다.
- select - option 과 같이 쓰이며 여러개의 option 중에 한개를 고르는 형태 이다.
- Iframe -  현제 HTML 문서 내에 다른 문서를 삽입 (iframe src = "url" /)
- br - 한줄 뜀 ( line break)
- table thead tbody  - 표를 만들기 위해 사용
- code - 구문 태그
- pre - pre태그 안에 내용은 스페이스바 와 line breaks 가 써진대로 된다.

###### 잘 사용되지 않거나 주의를 해야하는 태그

- b - 텍스를 강조할때 사용
  1. 제목을 쓸때에는 h1~h6 이 있다.
  2. 강조텍스트는 em 태그가 있다.
  3. 중요한텍스트는 strong 가 있다.
  4. 강조 표시된 텍스트는 mark 태그를 사용된다.

- font - size, color 등 크기 색깔을 바꾸는데 사용
  1. HTML5 부터는 지원하지 않는다. 

- center - 텍스트를 가운대 정렬한다.
  1. HTML5 부터는 지원하지않는다
  2. 대신 CSS 에서 사용.

###### HTML 작성법

1. script 태그 이용 (java) 
2. script 태그의 src 속성을 이용 (java) 

1. style 을 태그에 직접 이용(css)

2. link 를 이용(css)

   