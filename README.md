## curso-ecmascript
Prácticas del curso, no tien mucha chicha pero así me obligo.

# PARÁMETROS POR DEFECTO
function newfunction2(name = 'oscar', age = 32, country = 'MX')

# CONCATENACIÓN , TEMPLATE LITERALS

`${hello} ${world}`

# MULTILÍNEA EN STRINGS
let lorem2 = `no ha mucho que vivía
un hidalgo caballero`;

# DESESTRUCTURACIÓN
let {name, age} = person;
console.log(name, age);

# PROPAGACIÓN ...
let education = ['David', ...team1, ...team2];

# LET
let es una variable se difencia de var en que let sólo está disponible en el scoope.

# CONST

# Objeto

let name2 = 'Oscar';
let age2 = 32;
//es5
obj = {name: name2, age:age2};
console.log(obj);

//es6
obj2 = { name2, age2};
console.log(obj2);

# Arrow Functions