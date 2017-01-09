/* 클래스, 생성자, 메서드 */

/* 개선 전 */
function Person(arg) {
  this.name = arg;

  this.getName = function() {
    return this.name;
  }

  this.setName = function(value) {
    this.name = value;
  }
}

var me = new Person('zzoon');
console.log(me.getName());

me.setName('iamhjoo');
console.log(me.getName());



/* 생성자 함수 : new 키워드로 객체를 생성할 수 있는 함수
- 생성자 함수의 이름은 일반적으로 대문자로 시작
- 생성자 함수  안에서 this 키워드로 생성자 함수로 생성될 객체의 속성을 지정
- 생성자 함수 안에 메서드 생성 가능


더글라스 크락포드는 함수를 생성자로 사용하는 프로그래밍하는 것을 추천하지 않는다. 그 이유는 생성되 함수는 new로 호출될 수 있을 뿐만 아니라,
직접 호출도 가능하기 때문이다. 여기서 문제는 new로 호출될 때와 직접 호출될 때의 this에 바인딩되는 객체가 달라진다는 것이다.*/


/* 자바스크립트에서 클래스 안의 메서드를 정의할 때는 프로토타입 객체에 정의한 후,
new로 생성한 객체에서 접근할 수 있게 하는 것이 좋다. */


/* 개선 */
function Person(arg) {
  this.name = arg;
}

Person.prototype.getName = function() {
  return this.name;
}

Person.prototype.setName = function(value) {
  this.name = value;
}

var me = new Person('me');
var you = new Person('you');
console.log(me.getName());
console.log(you.getName());



/* 더글라스 크락포드가 제시한 함수 정의 방법 */
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
      this.prototype[name] = func;
  }
}


/* 개선 2 */
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
}

function Person(arg) {
  this.name = arg;
}

Person.method('setName', function(value) {
  this.name = value;
});

Person.method('getName', function() {
  return this.name;
});

var me = new Person('me');
var you = new Person('you');
console.log(me.getName());
console.log(you.getName());
