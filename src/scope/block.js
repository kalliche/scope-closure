const fruits = () => {
    if(true) {
        var fruit1 = 'apple';
        var fruit2 = 'banana';
        var fruit3 = 'kiwi'
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();


// diferencia entre variables lovales y goblales en bloques
const fruitsa = () => {
    if(true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi'
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruitsa();

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 50)
    }
};
anotherFunction();
