## javascript

#### DOM

##### DOM = Document Object Model

###### HTML 문서의 구조적 관게와 속송에 대한 모델

- HTML문서를 대표하는 트리 구조

- javaScript 에서 document 객체를 통해 전역으로 접근할수있음 (document)

- 

  ## ANATOMY OF AN HTML ELEMENT

  ![img](https://s3.ap-northeast-2.amazonaws.com/learn.codestate.com/precourse/201811/documents/dom/element_anatomy.png)

  ## HTML ELEMENT REPRESENTED BY DOM

  ![img](https://s3.ap-northeast-2.amazonaws.com/learn.codestate.com/precourse/201811/documents/dom/dom_p.png)

  

  

  ## ELEMENT VS. NODE

  - Element은 Node에 속해 있음![img](https://s3.ap-northeast-2.amazonaws.com/learn.codestate.com/precourse/201811/documents/dom/element_interface.png)
  - `Text` (text contents)은 Node이나, element는 아님![img](https://s3.ap-northeast-2.amazonaws.com/learn.codestate.com/precourse/201811/documents/dom/text_interface.png)

  ## SELECTING ELEMENTS

  어떻게 HTML element를 JavaScript를 이용해 가져올 수 있을까요?

  - tag name을 이용: `getElementsByTagName`(document.)
  - id 속성을 이용: `getElementById`(document.)
  - class name을 이용: `getElementByClassName`
  - selector를 이용: `querySelector` / `querySelectorAll`

  ##### <script) tag

  - `<head>` 태그 안쪽
    - DOM 이 로딩되지 않은 상태에서 script  가 실행된다 
    - 따라서 라이브러리를 추가할 때 사용한다.

- - `</body> 태그 직전
  - - DOM 이 로딩된후 실행
    - DOM 을 직접 사용할경우