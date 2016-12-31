/* 함수의 다양한 형태
1. 콜백 함수
2. 즉시 실행 함수
3. 내부 함수
4. 함수를 리턴하는 함수
*/

/* 즉시 실행 함수 예제 코드 */
(function (name) {
  console.log('This is the immediate fuction --> ' + name);
})('foo');
// jQuery와 같은 라이브러리 코드가 처음 로드되어 초기화할 때, 즉시 실행 함수 패턴이 많이 사용된다.


/* 내부 함수 예제 코드 */
function parent() {
  var a = 100;
  var b = 200;

  function child() {
    var b = 300;

    console.log(a);  // 내부 함수에서는 자식을 둘러싼 부모 함수의 변수에 접근이 가능하다.
    console.log(b);
  }
  child();
}
parent();
child();  // ReferenceError: child is not defined
// 내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출이 가능하다
// 기본적으로 함수 스코프 밖에서는 함수 스코프 안에 선언된 모든 변수나 함수에 접근이 불가능하다.
// 스코프 체이닝 때문에, 함수 내부에서는 함수 밖에서 선언된 변수나 함수의 접근이 가능하다.


/* 함수 스코프 외부에서 내부 함수 호출하는 예제 코드 */
function parent() {
  var a = 100;
  var child = function () {
    console.log(a);
  };
  return child;
}
var inner = parent();
inner();  // 클로저 : 실행이 끝난 parent() 와 같은 부모 함수 스코프의 변수를 참조함


/* 자신을 재정의하는 함수 예제 코드 */
var self = function () {
  console.log('a');
  return function () {
    console.log('b');
  }
};
a = self(); // a
a(); // b
