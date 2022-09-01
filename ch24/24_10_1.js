// 카운트 상태 변경 함수
const increase = function (){
    // 카운트 상태 변수
    let num = 0; // 은닉화

    return function (){
        return ++num;
    };
}

let counter = increase();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3