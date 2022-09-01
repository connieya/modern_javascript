// 세율을 의미하는 0.1 은 변경할 수 없는 상수로서 사용될 것이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + (preTaxPrice* TAX_RATE);

console.log(afterTaxPrice); // 110