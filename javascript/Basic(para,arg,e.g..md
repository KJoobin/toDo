##  Javascript - Basic

- Parameters 와 Arguments 의 차이를 이해한다.

   function arguments(parameters){return parameters}, arguments(var Arguments)

- dot notation 과 bracket notation 은 비슷하지만 key 값 이 변수일경우 bracket notation 을 사용한다.

  key 값이 parameters 로 들어올경우  bracket notation 을 사용한다.

  obj.key 혹은 obj['key'] 를 이용한다.

- Pass by value 와 pass by reference 의 차이를 구별

  pass by value 의 경우 변수(var any) 가 value 값을 가진다.

  pass by reference 의 경우 변수(var object) 가 value 가 아닌 value 를 저장하는 reference 를 값으로 갖는다.

- Primitive 란?

  primitive 는 원시 값, 원시 자료형 이라는 뜻을 가지며 

  var foo = 5;

  function addTwo(num) {

  Num += 2;

  }

  Function addTwo_v2(foo) {

  foo += 2;

  }

  addTwo(foo);

  console.log(foo); //5

  addTwo_v2(foo)

  console.log(foo);  // 5 로 원시값은 교체될수는 있지만 직접적으로 대체될 수는 없다.

- 