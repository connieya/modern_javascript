// 생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20