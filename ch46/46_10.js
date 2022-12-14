// 무한 이터러블을 생성하는 함수
const infiniteFibonacci = (function () {
    let [pre , cur] = [0,1];

    return {
        [Symbol.iterator]() {return this;},
        next(){
            [pre,cur] = [cur ,pre+cur];
            // 무한 이터러블이므로 done 프로퍼티를 생략한다.
            return {value :cur};
        }
    };
}());

// infiniteFibonacci 는 무한 이터러블이다.
for(const num of infiniteFibonacci) {
    if(num > 10000) break;
    console.log(num);
}