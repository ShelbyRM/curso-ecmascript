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

// LET, es una variable se difencia de var en que let sólo está disponible en el scoope.

    {
        var globalVar = "Global Var";
    }
    {
        let globalLet = "Global let";
    }
    console.log(globalVar);
    console.log(globalLet);

// CONST

    const a = 'b';

    // Objetos

    let name2 = 'Oscar';
    let age2 = 32;
    //es5
    obj = {name: name2, age:age2};
    console.log(obj);

    //es6
    obj2 = { name2, age2};
    console.log(obj2);

// Arrow function

const names = [
    {name: 'Oscar', age: 32},
    {name: 'Jess', age: 27}
]
//es5
let listOfNames = names.map(function(item) {
    console.log(item.name)
})
//es6
let listOfNames2 = names.map (item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log(name);
   
}
let num = 3;
const square =  num => num * num;
console.log(square);