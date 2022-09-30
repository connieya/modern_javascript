const base = {
    name : 'Lee',
    sayHi() {
        return `Hi ! ${this.name}`;
    }
};

const derived = {
    __proto___ : base,
    // sayHi 는 ES6 메서드다. ES6 메서드는 [[HomeObject ]] 를 갖는다.
    // sayHi 의 [[HomeObject]] 는 sayHi 가 바인딩된 객체인 derived 를 가리키고
    // super 는 sayHi 의 [[HomeObject]] 의 프로토타입인 base 를 가리킨다.
    sayHi() {
        return `${super.sayHi()} . how are you doing?`;
    }
};

console.log(derived.sayHi());