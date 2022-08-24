// 희소 배열
const sparse = [,2,,4];

console.log(sparse.length);
console.log(sparse); // [ <1 empty item>, 2, <1 empty item>, 4 ]

// 배열 sparse 에는 인덱스가 0, 2 인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptor(sparse));

