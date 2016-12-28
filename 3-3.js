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
