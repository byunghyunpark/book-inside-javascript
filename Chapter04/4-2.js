/* 함수객체 */

/* add() 함수도 객체처럼 프로퍼티를 가질 수 있다. */

function add(x, y) {
  return x + y;
}

add.result = add(3, 2);
add.status = 'OK';

console.log(add.result);
console.log(add.status);

/* 일반 객체처럼 result와 status 프로퍼티를 추가하는게 가능 */

/* 함수도 일반 객체처럼 취급 할 수 있다
1. 리터럴에 의해 생성
2. 변수나 배영릐 요소, 객체의 프로퍼티 등에 할당 가능
3. 함수의 인자로 전달 가능
4. 함수의 리턴값으로 리턴 가능
5. 동적으로 프로퍼티를 생성 및 할당 가능
=> 읿급 객체
*/



/* 변수나 프로퍼티에 함수값을 할당하는 코드 */

// 변수에 함수 할당
var foo = 100;
var bar = function () {
  return 100;
};
console.log(bar());

// 프로퍼티에 함수 할당
var obj = {};
obj.baz = function () {
  return 200;
};
console.log(obj.baz());



/* 함수를 다른 함수의 인자로 넘긴 코드 */
var foo = function(func) {
  func();
};

foo(
  function() {
  console.log('Function can be used as the argument');
  }
);



/* 함수를 다른 함수의 리턴값으로 활용한 코드 */
var foo =  function() {
  return function() {
    console.log('this function is the return value');
  };  // 함수 자체가 값으로 취급될 수 있다.
};

var bar = foo();
bar();


function add(x, y) {
  return x + y;
}

console.dir(add)
/* 크롬 출력결과  arguments와 caller등 기본 프로퍼티가 생성된다
function add(x, y)
arguments:null
caller:null
length:2
name:"add"
prototype:Object
__proto__:()
[[FunctionLocation]]:VM80:1
[[Scopes]]:Scopes[1]
*/


/*
Function.prototype 객체는 모든 함수들의 부모 역할을 하는 프로토타입 객체다.
Function.prototype 객체가 가지는 프로퍼티나 메서드
1. constructor 프로퍼티
2. toString() 메서드
3. apply(thisArg, argArray) 메서드
4. call(thisArg, [,arg1[,arg2,]]) 메서드
5. bind(thisArg, [,arg1[,arg2,]]) 메서드

Function.prototype 함수 객체의 부모는 자바스크립트의 모든 객체의 조상격인 Object.prototype 객체다
*/


/* 함수 객체의 length 프로퍼티 */
function func0() {

}

function func1(x) {
  return x;
}

function func2(x, y) {
  return x + y;
}

function func3(x, y, z) {
  return x + y + z;
}

console.log('func0.length - ' + func0.length);  // 0
console.log('func1.length - ' + func1.length);  // 1
console.log('func2.length - ' + func2.length);  // 2
console.log('func3.length - ' + func3.length);  // 3
// length 프로퍼티는 함수가 정상적으로 실행될 때 기대되는 인자의 개수를 나타낸다


/* [[Prototype]]은 객체 입장에서 자신의 부모 역하을 하는 프로토타입 객체를 가리키는 반면에
함수 객체가 가지는 prototype 프로퍼티는 이 함수가 생성자로 사용될 때
이 함수를 통해서 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다

자바스크립트에서는 함수를 생성할때, 함수 자신과 연결된 프로토타입 객체를 동시에 생성하며,
이 둘은 각각 prototype과 constructor라는 프로퍼티로 서로를 참조하게된다
*/


/* 함수 객체와 프로토타입 객체와의 관계를 보여주는 코드 */
function myFunction() {
  return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);
