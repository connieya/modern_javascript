const arr = [1,2,2,3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
console.log(arr.indexOf(2)); // 1

// 배열 arr에 요소 4가 없으므로 -1을 반환한다.
console.log(arr.indexOf(4)); // -1

// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
console.log(arr.indexOf(2,2)); // 2