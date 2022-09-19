// 생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
}


// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// 즉, 일반 함수로서 호출한다.
const circle3 = Circle(15);


// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined


// 일반 함수로서 호출된 Circle 내의 this 는 전역 객체를 가리킨다.
console.log(radius);