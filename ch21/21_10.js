var foo = 1;
console.log(window.foo); // 1

bar = 2;
console.log(window.bar); // 2

function baz() {return 3};
console.log(window.baz()); // 3