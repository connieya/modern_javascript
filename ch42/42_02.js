// sleep 함수는 일정 시간이 경과된 이후에 콜백 함수를 호출한다.
function sleep(func ,delay) {
    // Date.now() 는  현재 시간을 숫자로 반환한다.
    const delayUntil = Date.now() + delay;

    // 현재 시간(Date.now())에 delay를 더한 delayUntil 이 현재 시간보다 작으면 계속 반복한다.
    while(Date.now() < delayUntil);
        // 일정 시간이 경과된 이후에 콜백 함수를 호출한다.



    func();
}

function foo(){
    console.log('foo');
}

function bar(){
    console.log("bar");
}

sleep(foo, 3*1000);

// bar 함수는 sleep 함수의 실행이 종료된 이후에 호출되므로 3초 이상 블로킹 된다.
bar();