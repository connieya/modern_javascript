const Direction = {
    UP : Symbol('up'),
    DOWN : Symbol('down'),
    LEFT : Symbol('left'),
    RIGHT : Symbol('right')
};


const myDirection = Direction.UP;

if(myDirection === Direction.UP){
    console.log("올라가자")
}