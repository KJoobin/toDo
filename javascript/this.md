## Javscript - this

#### this

- 글로벌 , 일반함수 호출시
  this 는 전역(window) 를 가르킨다.

- 메소드 호출
  부모 객체를 가르킨다.
  var counter = { 
    val : 0
    increment : function() {

  ​    this.val += 1;
    }
  };

- new 연산자로 생성된 function 영역의 this
  새로 생성된 객체

  function coffee(cost,water) {
  this.cost = cost;
  this.water = water;
  }
  var espresso = new coffee(3000,150);

  console.log(espresso); // coffee {cost: 3000, water: 150}
  console.log(espresso.cost); // 3000
  console.log(espresso.water); //150

- .call or .apply 호출
  call , apply 의 첫번째 인자로 명시 된 객체

#### call,apply,bind 

##### call, apply 의 차이

- .apply 의 경우 parameter 을 arr 로 받는다. -> Function.prototype.apply(this,[parameter1,parameter2])

- call 은 parameter 을  arr 로 받지않는다. ->Function.prototype.call(this,parameter1,parameter2)

  Array.prototype.slice.call(arguments) ————— Function.apply(null,Array.prototype.slice.call(arguments));
  - constructor ---> class 를 호출
    Constructor.name ——> class 의 이름을 호출한다

##### bind 

- 인자로 넘겨준 객체와 연결된(bind) 새로운 함수를 반환

- Callback 함수를 특정 객체와 연결하고 싶을 때 사용
  fn.bind(thisArg[arg1[,arg2[,arg3[,....]]]])
  function Box(w ,h) {
    this.width = w;
    this.height = h;

    this.getArea = function() {
      return this.width * this.height;
    }

    this.printArea = function() {
      console.log(this.getArea());
    }
    this.printArea();   /// 5000
    setTimeout(this.printArea.bind(this),2000);   /// 2s ->5000

    setTimeout(this.printArea,2000). // 2s ->undefined

    setTimeout(this.printArea(),2000) // 바로 undefined

  }
  var b = new Box(100,50)

##### prototype 의 정의

- prototype 의 경우 type.prototype.name = function (parameter) {
                       							...
  										} 의 형식이다.
- Array.somthing() 는 Array 클래스 에서만 작동
- Array.prototype.something() 는 Array 인스턴스 에서만 작동

##### class

 function Car(model,brand) {
  this.model = model;
  this.brand = brand;
}

var spark = new Car("spark", "chevrolet"); 

——— ————— ———————————  같다 ——— ———— ———— 
class Car {
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
  }
}
var spark = new Car("spark","chevorlet");