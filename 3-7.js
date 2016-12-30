/* 연산자 */

/* 동등연산자와 === 일치연산자의 차이점 */
console.log(1 == '1');  //true
console.log(1 === '1');  //false
// 가급적이면 일치 연산자를 사용해라


/* !! 연산자 활용을 통한 불린값 변환 */
// 피연산자를 불린값으로 변환한다
console.log(!!0);  // false
console.log(!!1);
console.log(!!'string');
console.log(!!'');  // false
console.log(!!true);
console.log(!!false);  // false
console.log(!!null);  // false
console.log(!!{});  // true  => 객체는 값이 비어있는 빈 객체라도 true를 반환한다
