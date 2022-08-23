// 좌항의 피연잔사가 null 또는 undefined 이면 우항의 피연산자를 반환하고.
// 그렇지 않으면 좌항의 피연산자를 반환한다.


var foo = '' || 'default string';
console.log(foo); // "default string"
foo = '' && 'default string';
console.log(foo); // ''
