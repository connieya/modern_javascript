function * getFunc() {
    try {
        yield 1;
        yield 2;
        yield 2;
    }catch (e){
        console.error(e);
    }
}

const generator = getFunc();

console.log(generator.next());
console.log(generator.return('End!'));