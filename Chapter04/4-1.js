/* 함수의 정의 */

/*
1. 함수 선언문
2. 함수 표현식
3. Function() 생성자 함수
*/

/* 함수 선언문 방식 */
function add(x, y) {
  return x + y;
} // 리터럴로 함수를 만들고 함수 이름을 지정하여 사용한다
// 일반적으로 함수 선언문 방식으로 선언된 함수의 경우는 함수 끝에 세미콜론을 붙이지 않는다. (관습)


console.log(add(3, 4));


/* 함수 표현식 방식 */
var add = function (x, y) {
  return x + y;
};  // 리터럴로 하나의 함수를 만들고, 여기서 생성된 익명 함수를 변수에 할당하여 함수를 생성

var plus = add;

console.log(add(3,4));
console.log(plus(5,6));


/* 함수 표현식으로 구현한 팩토리얼 함수 */
var factourialVar = function factorial(n) {
  if(n <= 1) {
    return 1;
  }
  return n * factorial(n-1);
};

console.log(factourialVar(3));
console.log(factorial(3));  // error => 기명함수는 함수 내부에서만 참조가 가능하다. 외부에서는 호출이 불가능하다
/* 함수 선언문 방식에서 기명함수가 외부에 사용될 수 있는 이유?
자바스크립트 엔진이 자동으로 기명함수명으로 함수 표현식을 만든다 */



/* Function() 생성자 함수를 이용한 add() 함수 생성 */
var add = new Function('x', 'y', 'return x + y');  // 자주 사용하지 않는다 참고만..
console.log(add(3, 4));




/* 함수 호이스팅 때문에 함수 표현식만을 사용할 것을 권한다 */



/* 함수 선언문 방식과 함수 호이스팅 */
console.log(add(2, 3));  // 오류 안남

function add(x, y) {
  return x + y;
}  // 함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다는 것을 확인할 수 있다. 이것을 함수 호이스팅이라고 부른다.

console.log(add(3, 4));



/* 함수 표현식 방식과 함수 호이스팅 */
console.log(add(2, 3));  // TypeError: add is not a function

var add = function (x, y) {
  return x + y;
};

console.log(add(3, 4));
