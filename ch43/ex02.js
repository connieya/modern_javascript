let person = {
    name: 'Geonhee',
    age: 29,
    language: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(person);

console.log(typeof json); // string

console.log(json);
// {"name":"Geonhee","age":29,"language":["html","css","js"],"wife":null}
