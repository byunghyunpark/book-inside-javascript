
function add(a, b) {
  console.dir(arguments);
  return a + b;
}

console.log(add(1));  // NaN
console.log(add(1,2));
console.log(add(1,2,3));


/* arguments 는 유사 배열 객체로 전달된다. 즉 배열이아닌 객체이다
length 프로퍼티가 있으므로 배열과 유사하게 동작하지만, 배열은 아니므로 배열 메서드를 사용할 수 없다.

arguments 객체는 매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나, 전달된 인자의 개수에 따라 서로 다른 처리를 해줘야하는
함수를 개발하는데 유용하게 사용할 수 있다. */

function sum() {
  var result = 0;

  for(var i=0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log((sum(1,2,3)));
console.log(sum(1,2,3,4,5));




/* 메서드 호출 사용 시 this 바인딩 */
var myObject = {
  name: 'foo',
  sayName: function () {
    console.log(this.name);
  }
};

var otherObject = {
  name: 'bar'
};


otherObject.sayName = myObject.sayName;


myObject.sayName();
otherObject.sayName();


/* 내부 함수의 this 바인딩 동작을 보여주는 예제 코드 */

var value = 100;

var myObject = {
  value: 1,
  func1: function () {
    this.value += 1;
    console.log('funct1() called. this.valuse: ' + this.value); // 2

    func2 = function () {
      this.value += 1;
      console.log('func2() called. this.value: ' + this.value);  // 101

      func3 = function () {
        this.value += 1;
        console.log('fuc3() called. this.value: ' + this.value);  // 102
      }
      func3();
    }
    func2();

  }
};
myObject.func1();


/* 내부 함수의 this 바인딩 문제를 해결한 예제 코드 */

var value = 100;
var myObject = {
  value: 1,
  func1: function () {
    var that = this;
    this.value += 1;
    console.log('func1() called. this.value : ' + this.value);  // 2

    func2 = function () {
      that.value += 1;
      console.log('func2() called. this.value : ' + that.value);  // 3

      func3 = function () {
        that.value += 1;
        console.log('func3() called. this.value : ' + that.value);  // 4
      }
      func3();
    }
    func2();
  }
};

myObject.func1();


/* 생성자 함수의 동작 방식 */
var Person = function (name) {
  this.name = name;
};

var foo = new Person('foo');
console.log(foo.name);




/* 객체 생성 두 가지 방법 ( 객체 리터럴 vs 생성자 함수 ) */

// 리터럴 방식
var foo = {
  name: 'foo',
  age: 35,
  gender: 'man'
};
console.dir(foo);

// 생성자 함수 방식
function Person(name, age, gender, position) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// Person 생성자 함수를 이용해 bar 객체, baz 객체 생성
var bar = new Person('bar', 33, 'woman');
console.dir(bar);

var baz = new Person('baz', 25, 'woman');
console.dir(baz);


/* new를 붙이지 않고 생성자 함수 호출 시의 오류 */
var qux = Person('qux', 20, 'man');
console.log(qux);

// window는 브라우저에서 정의함 (크롬에서 실행해보기)
console.log(window.name);  // qux
console.log(window.age);  // 20

/* new 없이 일반 함수 형태로 호출할 경우, this는 함수 호출이므로 전역 객체인 window 객체로 바인딩된다.
자바스크립트에서는 일반 함수와 생성자 함수의 구분이 별도로 없으므로, 일반적으로 생성자 함수로 사용할 함수는 첫 글자를 대문자로 표기하는
네이밍 규칙을 권장한다. */


/* 강제로 인스턴스 생성하기 */
function A(arg) {
  if (!(this instanceof A))
    return new A(arg);
  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);


console.log(a.value);
console.log(b.value);
console.log(global.value);  // undefined



/* apply() 메서드를 이용한 명시적인 this 바인딩 */

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var foo = {};  // 리터럴 방식

Person.apply(foo, ['foo', 30, 'man']);  // 하나의 배열로 인자를 전달한다
console.dir(foo);

Person.call(foo, 'foo', 30, 'man');  // 각각 하나의 인자로 전달한다
console.dir(foo);



/* apply() 메서드를 활용한 arguments 객체의 배열 표준 메서드 slice() 활용 코드 */
function myFunction() {
  console.dir(arguments); // Object
  var args = Array.prototype.slice.apply(arguments);  // Array.prototype.slice() 메서드를 호출해라. 이때 this는 arguments 객체로 바인딩해라
  var args = args.slice(1, 2)
  console.dir(args);  // Array[0]
}
myFunction(1,2,3);


/* 자바스크립트 함수는 항상 리턴값을 반환한다. 특히, return 문을 사용하지 않았더라도 다음의 규칙으로
항상 리턴값을 전달하게 된다. */

/* 생성자 함수에서 별도의 리턴값을 지정하지 않을 경우 this로 바인딩된 새로 생서된 객체가 리턴된다
때문에 생성자 함수에서는 일반적으로 리턴값을 지정하지 않는다. */


/* 예외사항 */

/* 생성자 함수에서 명시적으로 객체를 리턴햇을 경우 */

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  // 명시적으로 다른 객체 반환
  return {name:'bar', age:20, gender:'woman'};
}

var foo = new Person('foo', 30, 'man');
console.dir(foo)  // { name: 'bar', age: 20, gender: 'woman' }


/* 생성자 함수에서 명시적으로 기본타입(불린,숫자,문자열) 값을 리턴했을 경우 */
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  // 명시적으로 기본타입을 출력하면 무시하고 생성된 객체를 출력한다 
  return 100;
}

var foo = new Person('foo', 30, 'man');
console.log(foo);  // Person { name: 'foo', age: 30, gender: 'man' }
