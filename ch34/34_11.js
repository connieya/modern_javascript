const arrayLike = {
    0 : 1,
    1: 2,
    2: 3,
    length : 3
};

// Array.from 은 유사 배열 객체 또는 이터러블을 배열로 변환한다.
const arr = Array.from(arrayLike);
console.log(arr);