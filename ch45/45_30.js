const requestData1 =()=> new Promise(resolve => setTimeout(()=> resolve(1), 3000));
const requestData2 =()=> new Promise(resolve => setTimeout(()=> resolve(2), 2000));
const requestData3 =()=> new Promise(resolve => setTimeout(()=> resolve(3), 3000));

// 세 개의 비동기 처리를 순차적으로 처리

const res = [];
requestData1()
.then(data => {
    res.push(data);
    return requestData2();
})
.then(data => {
    res.push(data);
    return requestData3();
})
.then(data => {
    res.push(data);
    console.log(res);
})
.catch(console.error);