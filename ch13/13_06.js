// 전역 함수
function foo(){
    console.log("global function")
}

function bar(){
    // 중첩 함수
    function foo(){
        console.log('local function')
    }
    foo();
}

foo(); // global function
bar(); // local function