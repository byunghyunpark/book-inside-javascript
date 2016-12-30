/* 배열 length 프로퍼티의 명시적 변경 */
var arr = [0, 1, 2];
console.log(arr.length);

arr.length = 5;
console.log(arr);

arr.length = 2;
console.log(arr);
console.log(arr[2]);




/* push() 메서드와 length 프로퍼티 */
var arr = ['zero', 'one', 'two'];

arr.push('three');
console.log(arr);

arr.length = 5;
arr.push('four');  // undefined 뒤에 추가된다
console.log(arr);



/* 배열과 객체의 유사점과 차이점 */
// 배열 생성
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);


// 객체 생성
var colorsObj = {
  '0': 'orange',
  '1': 'yellow',
  '2': 'green'
}
console.log(colorsObj[0]);  // 자바스크립트 엔진이 []내에 숫자가 사용될 경우 해당 숫자를 자동으로 문자열 행태로 바꿔줌
console.log(colorsObj[1]);

// typeof 연산자 비교
console.log(typeof colorsArray);
console.log(typeof colorsObj);


// length 프로퍼티
console.log(colorsArray.length);
console.log(colorsObj.length);  // undefined


// 배열 표준 메서드
colorsArray.push('red');
colorsObj.push('red');  // TypeError




/* 배열의 프로토타입과 객체의 프로토타입 비교 */
var emptyArray = [];
var emptyObj = {};

console.dir(emptyArray.__proto__);
console.dir(emptyObj.__proto__);



/* 배열의 동적 프로퍼티 생성 */
// 배열 생성
var arr = ['zero', 'one', 'two'];
console.log(arr.length);

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length);

// 배열 객체 출력
console.dir(arr); // [ 'zero', 'one', 'two', 'red', color: 'blue', name: 'number_array' ]
// 배열도 객체처럼 key: value 형태로 프로퍼티(속성)를 가질 수 있다.


for (var prop in arr) {
  console.log(prop, arr[prop]);
}  // 필요없는 프로퍼티까지 출력된다

for (var i=0; i<arr.length; i++) {
  console.log(i, arr[i]);
}  // 배열 요소만을 정확히 출력한다


/* delete 연산자를 이용한 배열 프로퍼티 삭제 */
var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr); // 값을 undefined로 변경할 뿐 원소 자체를 삭제하진 않는다
console.log(arr.length);


/* splice() 메서드를 이용한 배열 프로퍼티 삭제 */
var arr = ['zero', 'one', 'two', 'three'];

arr.splice(2, 1);
console.log(arr);  // [ 'zero', 'one', 'three' ] 2번 인덱스만 사라진다
console.log(arr.length);


/* Array() 생성자 함수를 통한 배열 생성 */
var foo = new Array(3);  // 길이가 3인 빈 배열을 생성
console.log(foo);
console.log(foo.length);

var bar = new Array(1, 2, 3);
console.log(bar);
console.log(bar.length);


/* 유사 배열 객체에서 apply()를 활용한 배열 메서드 호출 */
var arr = ['bar'];
var obj = { name: 'foo', length: 1};

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);  // { '1': 'baz', name: 'foo', length: 2 }
// 유사배열 객체는 4장에서 자세히 확인할 예정
