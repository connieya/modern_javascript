var elem = null;

// elem이 Falsy 값이면 elem으로 평가되고, elem 이 Truthy 값이면 elem.value 로 평가된다.

var value = elem && elem.value;

console.log(value);