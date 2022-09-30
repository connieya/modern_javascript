const todos = [
    {id : 1 , content : 'HTML' , completed : true},
    {id : 2 , content : 'CSS' , completed : false},
    {id : 3 , content : 'JS' , completed : false},
];

const [, {id}] = todos;
console.log(id); // 2