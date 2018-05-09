function Fruits(color, type, image) {
    this.color = color;
    this.type = type;
    this.image = image;
}


console.log('in the fruit.js');


var temp = document.createDocumentFragment();
console.log(temp);
for(let i = 0; i < fruits.length; i++) {
    var card = document.createElement('div');
    card.classList = 'card';
    card.style.background = fruits[i].color;
    card.innerHTML = '<p>' + fruits[i].type + '</p><img src="' + fruits[i].image + '"><p>' + fruits[i].color + '</p>';
    console.log(card);
    temp.appendChild(card);
}
setTimeout(() => {
    document.getElementById('container-main').appendChild(temp);
}, 100);


// import('./fruit.js');

// // Instantiate fruit objects
// var apple = Fruits('green', 'Apple', '../images/green-apple.jpeg');
// var orange = Fruits('orange', 'Orange', '../images/orange.png');
// var banana = Fruits('yellow', 'Banana', '../images/banana.jpeg');
// var strawberry = Fruits('red', 'Strawberry', '../images/strawberry.jpeg');
// var watermelon = Fruits('green', 'Watermelon', '../images/watermelon.jpeg');
// var pear = Fruits('yellow', 'Pear', '../images/pear.jpeg');

// var fruitArray = [apple, orange, banana, strawberry, watermelon, pear];

// for(let i in fruitArray) {
    
// }