const Stack = (function () {
    function Stack(array = []){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not an array.`);
        }
        this.array = array;
    }
    Stack.prototype = {
        constructor : Stack,

        push(value){
          return this.array.push(value);
        },
        pop(){
            return this.array.pop();
        },
        entries() {
            return [...this.array];
        }
    };
    return Stack;
}());

const stack = new Stack([1,2]);
console.log(stack.entries()); // [1,2];

stack.push(3);
console.log(stack.entries()); //[1,2,3];

stack.pop();
console.log(stack.entries()); // [1,2]