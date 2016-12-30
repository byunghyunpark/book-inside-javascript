/* 3.2 자바스크립트 참조타입(객체 타입) */



// Object()를 이용하여 객체 생성
var foo = new Object();

//객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);


// 객체 리터럴 방식으로 foo 객체 생성
var foo = {
  name : 'foo',
  age : 30,
  gender : 'male'
};

console.log(typeof foo);
console.log(foo);




// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
  name : 'foo',
  major : 'computer science'
};

// 객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

// 객체의 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

// 대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
// console.log(foo.full-name);
console.log(foo.full);




// 객체 리터럴을 통한 foo 객체 생성
var foo = {
  name: 'foo',
  age: 40,
  major: 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
  console.log(prop, foo[prop]);
};




// 객체 리터럴을 통한 foo 객체 생성
var foo = {
  name: 'foo',
  nickname: 'babo'
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
console.log(foo.name);
/* 'foo'출력됨
=> delete 연산자는 프로퍼티만 삭제할 수 있다.*/
