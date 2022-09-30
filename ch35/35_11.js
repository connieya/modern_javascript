// ES5
var arr1 = [1,4];
var arr2 = [2,3];

// 세 번째 인수 arr2를 해체하여 전달해야 한다.
// 그렇지 않으면 arr1 에 arr2 배열 자체가 추가된다.
arr1.splice(1,0,arr2);
console.log(arr1); // [ 1, [ 2, 3 ], 4 ]
