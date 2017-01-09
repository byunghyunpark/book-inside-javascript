/* 프로로타입 상속 */
var person = {
  name : 'zzone',
  getName : function() {
    return this.name;
  },
  setName : function(arg) {
    this.name = arg;
  }
};

function create_object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}

var student = create_object(person);

student.setName('me');
console.log(student.getName());





/* jQuery extend 활용히여 프로퍼티 확장 */

var person = {
  name : 'byung',
  getName : function() {
    return this.name;
  },
  setName : function(arg) {
    this.name = arg;
  }
};

function create_object(o) {  // o를 생성자로하여 객체를 생성한다
  function F() {};
  F.prototype = o;
  return new F();
}

// 상속 함수를 구현한다
function extend(obj,prop) {  // obj가 prop을 상속 받는다
  if (!prop) {
    prop = obj;
    obj = this;
  }
  for (var i in prop) {  // for 루프를 돌면서 프로퍼티를 받는다
    obj[i] = prop[i];
  }
  return obj;  // prop을 상속받은 obj를 리턴
}

var student = create_object(person);  // person을 프로토타입 링크하는 student 객체를 생성한다

var added = {
  setAge : function(age) {
    this.age = age;
  },
  getAge : function() {
    return this.age;
  }
};

extend(student, added);  // student가 added 함수를 상속 받는다

student.setAge(25);
console.log(student.getAge());
console.log(student.getName());



/* 클래스 기반 상속 */
function Person(arg) {
  this.name = arg;
}

Person.prototype.setName = function(value) {
  this.name = value;
};

Person.prototype.getName = function() {
  return this.name;
};

function Student(arg) {

}

var you = new Person('park');
Student.prototype = you;

var me = new Student('byung');
console.log(me.getName());
me.setName('hyun');
console.log(me.getName());


/* 6-10 모듈 페턴 */
var Person = function(arg) {
  var name = arg ? arg : 'byung';

  return {
    getName : function() {
      return name;
    },
    setName : function(arg) {
      name = arg;
    }
  };
}

var me = new Person();
console.log(me.getName());
// console.log(me.name);


/* 예제 6-11 */
var ArrCreate = function(arg) {
  var arr = [1,2,3];

  return {
    getArr : function() {
      return arr;
    }
  };
}

var obj = ArrCreate();
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());  // [ 1, 2, 3, 5 ]

/* 문제!!!! 접근하는 private 멤버가 객체나 배열이면 얕은 복사만을 반환하므로 사용자가 이후 이를 쉽게
변경할 수 있다. */


/* 6-10은 사용자가 반환받은 객체는 Person 함수 객체의 프로토타입에는 접그할 수 없다는 단점을 가지고 있다.
이는 Person을 부모로하는 프로토타입을 이용한 상속을 수현하기 용이하지 않다는것을 의미한다.
이를 보완하려면 객체를 반환하는 것이 아닌, 함수를 반환하는 것이 좋다. */


/* 예제 6-12 */
var Person = function(arg) {
  var name = arg ? arg : 'byung';

  var Func = function() {}
  Func.prototype = {
    getName : function() {
      return name;
    },
    setName : function(arg) {
      name = arg;
    }
  };
  return Func;
}();

var me = new Person();
console.log(me.getName());
// 클로저로 name에 접근 못함
