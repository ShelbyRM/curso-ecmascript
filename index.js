//PARÁMETROS POR DEFECTO

function newfunction(name, age, country){
    var name= name || 'oscar';
    var age = age || 32;
    var  country = country || 'MX';
    console.log(name, age, country);
}
newfunction();
newfunction('Rosa', 24, 'ES');
//es6

function newfunction2(name = 'oscar', age = 32, country = 'MX'){
        console.log(name, age, country);
}
newfunction2();
newfunction2('Rosa', 24, 'ES');

//TEMPLATE LITERALS

let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//MULTILÍNEA

let lorem = "En un lugar de la mancha de \n" + "cuyo nombre no quiero acordarme";
console.log(lorem);
//es6
let lorem2 = `no ha mucho que vivía
un hidalgo caballero`;
console.log(lorem2);

//DESESTRUCTURACIÓN

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.country);

let {name, age} = person;
console.log(name, age);

// Operador de PROPAGACIÓN

let team1 = ['Oscar', 'Julian', 'Fernando'];
let team2 = ['Ana', 'Bertrán', 'Fernando'];

let education = ['David', ...team1, ...team2];
console.log(education);
