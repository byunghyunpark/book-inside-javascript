/* 프로토타입 체이닝 */

/* 자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는
프로토 타입 객체를 자신의 부모 객체로 설정하는 [[Prototype]] 링크로 연결한다 */

/* prototype 프로퍼티와 [[Prototype]] 링크 구분 */

function Person(name) {
  this.name = name;
}

var foo = new Person('foo');

console.dir(Person);  // [Function: Person]
console.dir(foo);  // Person { name: 'foo' }


/* 자바스크립트에서 객체를 생성하는 건 생성자 함수의 역할이지만, 생성된 객체의 실제 부모 역할을 하는건
생성자 자신이 아닌 생성자의 prototype 프포퍼티가 가리키는 프로토타입 객체다. */



/* 객체 리터럴 방식에서의 프로토타입 체이닝 */
var myObject = {
  name: 'foo',
  sayName: function () {
    console.log('My Name is ' + this.name);
  }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
myObject.sayNickName();

// hasownProperty() 메서드를 호출할때 오류가 발생하지 않는 이유는 프로토타입 체이닝 때문이다

/* 리터럴로 생성한 객체는 Object()라는 내장 생성자 함수로 생성된 것이다.
Object() 생성자 함수도 함수 객체이므로 prototype 이라는 프로퍼티 속성이 있다. */

/* 자바스크립트에서 특정 객체의 프로퍼티나 메서드에 접근하려고 할 때, 해당 객체에 접근하려는 프로퍼티
또는 메서드가 없다면 [[Prototype]]링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를
차례대로 검색하는 것을 프로토타입 체이닝이라고 한다 */


/* 생성자 함수 방식에서의 프로토타입 체이닝 */
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

var foo = new Person('foo', 30, 'tennis');

console.log(foo.hasOwnProperty('name'));  // 프로토타입 체이닝은 Object.prototype 객체로 계속 이어진다.
console.dir(Person.prototype);


/* 자바스크립트는 Object.prototype, String.prototype 등과 같이 표준 빌트인 프로토타입 객체에도
사용자가 직접 정의한 메서드들을 추가하는 것을 허용한다.


/* String 기본 타입에 메서드 추가 */
String.prototype.testMethod = function () {
  console.log('This is the String.prototype.testMethod');
};

var str = "this is test";
str.testMethod();

console.dir(String.prototype);


/* 프로토타입 객체의 동적 메서드 생성 예제 코드 */

function Person(name) {
  this.name = name;
}

var foo = new Person('foo');

Person.prototype.sayHello = function () {
  console.log('Hello');
}  // Person.prototype 객체에 동적으로 sayHello() 메서드를 추가했다.

foo.sayHello();



/* 프로토타입 메서드와 this 바인딩 */

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var foo = new Person('foo');
console.log(foo.getName());  // foo    => getName을 호출한 객체가 foo이므로, this는 foo객체에 바인딩된다.

Person.prototype.name = 'person';
console.log(Person.prototype.getName());  // person    => getName() 메서드를 호출한 객체가 Person.prototype이므로 this도 여기에 바인딩 된다.




/* 디폴트 프로토타입은 다른 객체로 변경이 가능하다 */
function Person(name) {
  this.name = name;
}
console.log(Person.prototype.constructor);  // [Function: Person]

var foo = new Person('foo');
// console.log(foo.country);

Person.prototype = {
  country: 'korea',
};
console.log(Person.prototype.constructor);  // [Function: Object]

var bar = new Person('bar');
// var foo = new Person('foo');
console.log(foo.country);  // undefined
console.log(bar.country);  // korea
console.log(foo.constructor);  // [Function: Person]
console.log(bar.constructor);  // [Function: Object]

/* foo 객체는 디폴트 프로토타입 객체를, bar 객체는 새로 변경된 프로로타입 객체를 각각 [[Prototype]] 링크로 연결한다.
프로토타입이 달라서 foo 객체와 bar 객체는 프로토타입 체이닝이 서로 다른 결과값을 만들어 버린다. */


/* 객체의 프로퍼티 읽기나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다.
프로퍼티 값을 쓸때는 프로퍼티가 없는경우 동적으로 생성시키지 체이닝이 동작하지 않는다 */
function Person(name) {
  this.name = name;
}

Person.prototype.country = 'korea';

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
foo.country = 'USA';

console.log(foo.country);
console.log(bar.country);
