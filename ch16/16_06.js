const person = {
    // 데이터 프로퍼티
    firstName : 'geonhee',
    lastName : 'park',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    // setter 함수
    set fullName(name){
        // 배열 디스트럭처링 할당 :
        [this.firstName , this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName+ ' '+person.lastName);
// geonhee park


// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다.
person.fullName = "cony Park";
console.log(person);
// { firstName: 'cony', lastName: 'Park', fullName: [Getter/Setter] }


// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);
// cony Park

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]] , [[Writable]] , [[Enumerable]] , [[Configureable]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person ,'firstName');
console.log(descriptor);
// { value: 'cony', writable: true, enumerable: true, configurable: true }


// fulllName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]] , [[Set]] , [[Enumerable]] , [[Configurable]]
// 프로퍼티를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person,'fullName');
console.log(descriptor);
// {
//   get: [Function: get fullName],
//   set: [Function: set fullName],
//   enumerable: true,
//   configurable: true
// }