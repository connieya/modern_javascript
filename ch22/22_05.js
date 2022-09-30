console.log(this); // window

function square(number){
    // 일반 함수 내부에서 this 는 전역  객체 window를 가리킨다.
    console.log(this);
    return number*number;
}

square(2);

const person = {
    name : 'Lee',
    getName(){
        // 메서드 내부에서 this 메서드를 호출한 객체를 가리킨다.
        console.log(this);
        return this.name;
    }
}

function Person(name) {
    this.name = name;
    console.log(this);
}

const me = new Person('Lee');