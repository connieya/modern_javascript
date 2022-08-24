[5,10,15].every(item => item>3); // true

[5,10,15].every(item => item>10); // false

// every 메서드를 호출한 배열이 빈 배열인 경우 언제나 true를 반환한다.
[].every(item => item > 3); // true