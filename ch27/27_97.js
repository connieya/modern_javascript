[1, 2, 3].forEach((item, index, arr) => {
    console.log(`요소 값 : ${item} , 인덱스 : ${index} , this : ${JSON.stringify(arr)}`);
})

/*
요소 값 : 1 , 인덱스 : 0 , this : [1,2,3]
요소 값 : 2 , 인덱스 : 1 , this : [1,2,3]
요소 값 : 3 , 인덱스 : 2 , this : [1,2,3]
* */