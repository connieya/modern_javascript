// 일반 객체의 __proto__ 는 접근자 프로퍼티다.
let value =Object.getOwnPropertyDescriptor(Object.prototype , '__proto__');

console.log(value)
/*
{
    get: [Function: get __proto__],
    set: [Function: set __proto__],
    enumerable: false,
        configurable: true
}
*/

// 함수 객체의 prototype 은 데이터 프로퍼티다.
value = Object.getOwnPropertyDescriptor(function (){}, 'prototype');
console.log(value);
// { value: {}, writable: true, enumerable: false, configurable: false }

