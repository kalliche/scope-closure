const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
// mensaje de que no se puede acceder a la variable hello porque esta dentro de una funcion
console.log(hello);

var scope = "i am global";
const functionScope = () => {
    var scope = "i am just a local";
    const func = () => {
        return scope;
    }
    console.log(func());
};
functionScope();
console.log(scope);