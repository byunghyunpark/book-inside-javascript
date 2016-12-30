/* 3.3 참조 타입의 특성 */

var objA = {
  val: 40
};
/* objA 변수는 객체 자체를 저장하고 있는 것이 아니라
생성된 객체를 가리키는 참조값을 저장하고 있다. */

var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 50;
console.log(objA.val);
console.log(objB.val);
/* objB가 참조타입으로 objA를 받아서
objB, objA 둘 다 50으로 변경됨 */




// 기본타입과 참조 타입의 비교 연산
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);
console.log(objA == objB);  // 프로퍼티 값은 같으나 다른 객체를 참조하고 있다
console.log(objB == objC);




// call by value와 call by reference 차이
var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
  num = 200;
  obj.value = 200;

  console.log(num);
  console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);
/* call by value 는 값을 복사해오기 때문에 프로퍼티를 변경시키지 않는다
call by reference는 object 자체의 주소를 참조하므로 object의 프로퍼티를 변경시킬 수 있다
