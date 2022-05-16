const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
// mensaje de que no se puede acceder a la variable hello porque esta dentro de una funcion
console.log(hello);