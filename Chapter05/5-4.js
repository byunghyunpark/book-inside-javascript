/* 클로저 */

function HelloFunc(func) {
  this.greeting = 'hello';
}

HelloFunc.prototype.call = function(func) {
  console.log(this); // HelloFunc
  func ? func(this.greeting) : this.func(this.greeting);  // 전달 인자가 없으면 HelloFunc의 func출력
}

var userFunc = function(greeting) {
  console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
// objHello.call(userFunc);
objHello.call();  // 함수인자는 전달 안해서 조건문 탄다



/* 인자 전달 기능 추가 */
function saySomething(obj, methodName, name) {
  return (function(greeting) {  // 클로저
    return obj[methodName](greeting, name);
  });
}

function newObj(obj, name) {
  obj.func = saySomething(this, 'who', name);  // func 제정의
  return obj;
}

newObj.prototype.who = function(greeting, name) {
  console.log(greeting + ' ' + (name || 'everyone'));
}

var obj1 = new newObj(objHello, 'zzoone');  // 인자를 추가하여 객체 생성
obj1.call();



/* 클로저를 사용하여 전역 변수 사용 안함 */
var getCompletedStr = (function() {
  var buffAr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'am ',
    '',
    ' years old',
  ];

  return (function(name, city, age) {
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
  });
})();

var str = getCompletedStr('zzoone', 'seoul', 16);
console.log(str);

/* 전역변수를 사용하지 않아 변수 컨플릭트를 예방한다 */



function callLater(obj, a, b) {
  return (function(){
    obj['sum'] = a + b;
    console.log(obj['sum']);
  });
}

var sumObj = {
  sum : 0
}

var func = callLater(sumObj, 1, 2);  // 클로저이므로 외부함수의 인자를 참조한다
setTimeout(func, 1000); // 1초 뒤에 클로저 실행



/* 클로저 사용시 유의사항 */

/*클로저의 프로퍼티값이 쓰기 가능하므로 그 값이 여러번 호출로 항상 변할 수 있음에 유의해야한다. */
function outerFunc(argNum) {
  var num = argNum;
  return function(x) {
    num += x;
    console.log('num ' + num);
  }
}

var exam = outerFunc(40);
exam(5);  // 45
exam(-10);  // 35


/* 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우도 있다 */

function func(){
  var x = 1;
  return {
    func1 : function(){ console.log(++x); },
    func2 : function(){ console.log(-x); }
  };
}

var exam = func();  // 하나의 클로저
exam.func1();  // 2
exam.func2();  // -2

// 변수 x의 값이 변하여 함수 1,2 모두 영향을 받는다.



/* 루프 안에서 클로저를 활용할 때는 주의하자 */

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    // console.log(i); // 1,2,3
    setTimeout(function () {  // 클로저
      console.log(i);  // 4, 4, 4
    }, i * 1000);
    // console.log(i);  // 1, 2, 3
  }
};
countSeconds(3);  // 4,4,4

/* setTimeout 1차 실행시 외부함수 i값을 참조하는데 i는 1,2,3 루프를 돌면서 콜백을 예약한다
하지만 setTimeout 콜백시에 클로저가 i참조하는데 i 는 4로 저장되어서 4가 세 번 출력된다. */


function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    // console.log(i);  // 1,2,3
    (function (currentI) {  // 즉시실행
      // console.log('k');
      setTimeout(function () { // 클로저
        console.log(currentI);
      }, currentI * 1000);  // 특정 시간에 함수 호출 예약  1초, 2초, 3초 ...
    }(i));  // for 루프시 i를 currentI 에 저장
  }
};
countSeconds(3);

/* setTimeout 1차 실행시, 즉시 실행함수를 사용하여 i값을 currentI에 복사하고 함수에 인자로 할당한다.
setTimeout 콜백시 1차에 클로저가 외부함수의 i를 참조하지 않고  1차에 할당한 currentI인자를 출력한다. */
