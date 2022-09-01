function closure(){
    let cnt = 0;
    function cntPlus() {
        cnt = cnt +1;
    }
    return cntPlus;

}

const cntClosure = closure();

console.log(cntClosure);
cntPlus();
console.log(cnt);