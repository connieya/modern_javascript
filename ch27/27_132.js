const users = [
    {id : 1, name : 'Lee'},
    {id : 2, name : 'Kim'},
    {id : 2, name : 'Choi'},
    {id : 3, name : 'Park'},
]

console.log(users.findIndex(user => user.id === 2)); // 1


console.log(users.findIndex(user => user.name === 'Park'));  // 3