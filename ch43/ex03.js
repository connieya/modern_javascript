const rabbit = {
    name : 'tory',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: () =>{
        console.log(`${name} : can jump`);
    },
    something : undefined,
    [Symbol('id')] : 123
};

const json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tory","color":"white","size":null,"birthDate":"2022-09-26T05:52:39.670Z"}

const obj = JSON.parse(json);
console.log(obj)
/*
{
    name: 'tory',
    color: 'white',
    size: null,
    birthDate: '2022-09-26T05:53:38.750Z'
}
*/
