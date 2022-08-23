// 단축 평가를 사용한 매개변수의 기본값 설정

function getStringLength(str) {
    str = str || '';
    return str.length;
}

var res;
res = getStringLength(); // 0
console.log(res);
res = getStringLength("hi") // 2
console.log(res)



// ES6의 매개변수의 기본값 설정
function getStringLength(str = ''){
    return str.length;
}

res = getStringLength(); // 0
console.log(res);
res = getStringLength('hi'); // 2
console.log(res);
