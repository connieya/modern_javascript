const person = {
    name : 'meta',
};

const copy = person;

copy.name = 'mong';
person.age =  28;

console.log(person);
console.log(copy);