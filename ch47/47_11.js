// 외부에서 전달받은 콜백 함수를 n번만큼 반복 호출한다.
const repeat = (n,f ) => {
    // 매개변수 f에 전달된 인수가 함수가 아니면 TypeError 를 발생시킨다.
    if(typeof f !== 'function') throw new TypeError('f must be a function');

    for(var i=0; i<n; i++) {
        f(i);
    }
}

try {
    repeat(2,1); // 두 번째 인수가 함수가 아니므로 TypeError 가 발생한다.
}catch (err) {
    console.error(err); // TypeError : f must be a function
}