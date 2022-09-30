const user = {firstname : 'gh' , lastname : 'park'};

// ES6 객체 디스트럭처링 할당
// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
const {lastname , firstname} = user;

console.log(firstname, lastname);