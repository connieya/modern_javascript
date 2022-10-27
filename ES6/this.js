var value = 1;

const obj = {
    value : 100,
    foo(){
        console.log(this);
        setTimeout(function (){
            console.log(this.value); // 1
        },100)
    }
}

obj.foo();