const arrayLike = {
    0 : 1,
    1: 2,
    2: 3,
    length : 3
};

// 유사 배열 객체는 이터러블이 아니기 때문에 for ... of 문으로 순회할 수 없다.
for(const item of arrayLike) {
    console.log(item);
}

// TypeError: arrayLike is not iterable