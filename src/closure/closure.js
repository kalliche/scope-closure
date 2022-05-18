// muestra los valores de la variable
const moneyBoxx = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money: $${saveCoins}`);
}
moneyBoxx(5);
moneyBoxx(10);

// guarda y suma los valores de una variable
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};
let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);