// String 생성자 함수에 의한 String 객체 생성

const strObj = new String('Lee'); // String {"Lee"}
console.log(typeof strObj); // object

const numObj = new Number(123);
console.log(typeof numObj);

const boolObj = new Boolean(true);
console.log(typeof  boolObj);

const func = new Function('x','return x * x');
console.log(typeof func);

const arr = new Array(1,2,3);
console.log(typeof arr);

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);

const date = new Date();
console.log(typeof date); // object