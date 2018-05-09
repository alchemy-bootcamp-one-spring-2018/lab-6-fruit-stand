import('./fruit.js');

// Instantiate fruit objects
var apple = Fruits('green', 'Apple', '../images/green-apple.jpeg');
var orange = Fruits('orange', 'Orange', '../images/orange.png');
var banana = Fruits('yellow', 'Banana', '../images/banana.jpeg');
var strawberry = Fruits('red', 'Strawberry', '../images/strawberry.jpeg');
var watermelon = Fruits('green', 'Watermelon', '../images/watermelon.jpeg');
var pear = Fruits('yellow', 'Pear', '../images/pear.jpeg');

var fruitArray = [apple, orange, banana, strawberry, watermelon, pear];

for(let i in fruitArray) {
    
}