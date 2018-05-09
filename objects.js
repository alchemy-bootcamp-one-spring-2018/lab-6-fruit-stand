/* exported coffeeList */

// object constructor
function Coffee(type, image, temp) {
    this.type = type;
    this.image = image;
    this.temp = temp;
}
    
// defining coffee properties
const latte = new Coffee('Latte', './images/latte.jpg', 'hot');
const dripCoffee = new Coffee('Drip Coffee', './images/drip-coffee.jpg', 'hot');
const cappuccino = new Coffee('Cappuccino', './images/cappuccino.jpg', 'hot');
const flatWhite = new Coffee('Flat White', './images/flat-white.jpg', 'hot');
const doppio = new Coffee('Doppio', './images/doppio.jpg', 'hot');
const americano = new Coffee('Americano', './images/americano.jpg', 'hot');

// array of coffee objects
const coffeeList = [
    latte,
    dripCoffee,
    cappuccino,
    flatWhite,
    doppio,
    americano
];


