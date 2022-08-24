const arr = [1,2,3];

// arr[1]  부터 1개의 요소를 제거
arr.splice(1,1);
console.log(arr);

// length 프로퍼티가 자동 갱신된다.
console.log(arr.length); // 2