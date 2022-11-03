// 제너레이터 함수
function *genFunc() {
    yield 1;
    yield 2;
    yield 3;
}
// 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
// 이터러블이면서 동시에 이터레이터인 제너레이터 객체는 next 메서드를 갖는다.
const generator = getFunc();

// 처음 next 메서드를 호출하면 첫 번째 yield 표현식 까지 실행되고 일시 중지된다.
// next 메서드는 이터레이터 리절트 객체({value ,done}) 를 반환한다.
// value 프로퍼티에는 첫 번째 yield 표현식에서 yield 된 값 1이 할당된다.