var obj = {
    x : 10,
    f : function () { return this.x;}
};

console.log(obj.f()); // 10

var bar = obj.f;
console.log(bar()); // undefined


console.log(new obj.f());