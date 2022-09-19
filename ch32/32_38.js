const str = "How are you doing?";

// 공백으로 구분하여 배열로 반환한다.
let res = str.split(' ');
console.log(res); // [ 'How', 'are', 'you', 'doing?' ]

// \s는 여러 가지 공백 문자(스페이스, 탭 등)를 의미한다. 즉, [\t\r\n\v\f] 와 같은 의미다.
res = str.split(/\s/);
console.log(res); // [ 'How', 'are', 'you', 'doing?' ]

// 인수로 빈 문자열을 전달하면 각 문자르 모두 분리한다.
res = str.split('');

console.log(res);
// [ 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o','u', ' ', 'd', 'o', 'i', 'n', 'g', '?' ]


// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
res = str.split();
console.log(res) // [ 'How are you doing?' ]
