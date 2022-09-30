const obj = {
    x : 1,
    // foo 는 메서드다.
    foo() { return this.x;},
    // bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
    bar: function () {return this.x;}
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1

new obj.foo(); //  obj.foo is not a constructo
new obj.bar();
