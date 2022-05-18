a = 2;
var a;
console.log(a);

nameDog('pepe'); // ejecuta primero la declaracion y luego este llamado
function nameDog(name) {
    console.log(name);
};
nameDog('pepe'); //ejecuta normal y no da error