function outer() {
    var n = 0;
    function increase() {
        n +=1;
    }
    return increase;
}

var newFn = outer();
newFn();
newFn();