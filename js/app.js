import('./fruit.js');

function Fruits(color, type, image) {
    this.color = color;
    this.type = type;
    this.image = image;
}

// Instantiate fruit objects
var apple = new Fruits('green', 'Apple', '../images/green-apple.jpeg');
var orange = new Fruits('orange', 'Orange', '../images/orange.png');
var banana = new Fruits('yellow', 'Banana', '../images/banana.jpeg');
var strawberry = new Fruits('red', 'Strawberry', '../images/strawberry.jpeg');
var watermelon = new Fruits('green', 'Watermelon', '../images/watermelon.jpeg');
var pear = new Fruits('yellow', 'Pear', '../images/pear.jpeg');

var fruitArray = [apple, orange, banana, strawberry, watermelon, pear];

var temp = document.createDocumentFragment();
for(let i in fruitArray) {
    var card = document.createElement('li');
    card.classList = 'card';
    card.style.background = fruitArray[i].color;
    card.innerHTML = '<p>' + fruitArray[i].type + '</p><img src="' + fruitArray[i].image + '"><p>' + fruitArray[i].color + '</p>';
    console.log(card);
    temp.appendChild(card);
}
setTimeout(() => {
    document.getElementById('container-main').appendChild(temp);
}, 100);
