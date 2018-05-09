// Instantiate new fruit objects
var apple = new Fruits('green', 'Apple', '../images/green-apple.jpeg');
var orange = new Fruits('orange', 'Orange', '../images/orange.png');
var banana = new Fruits('yellow', 'Banana', '../images/banana.jpeg');
var strawberry = new Fruits('red', 'Strawberry', '../images/strawberry.jpeg');
var watermelon = new Fruits('green', 'Watermelon', '../images/watermelon.jpeg');
var pear = new Fruits('yellow', 'Pear', '../images/pear.jpeg');

// Make array of objects so as to loop through instead of write out individually
var fruitArray = [apple, banana, orange, pear, strawberry, watermelon];

// Needed to delay appending with null values
var temp = document.createDocumentFragment();
for(let i in fruitArray) {
    var card = document.createElement('li');
    card.classList = 'card';
    card.style.background = fruitArray[i].color;
    card.innerHTML = '<p>' + fruitArray[i].type + '</p><img src="' + fruitArray[i].image + '"><p>' + fruitArray[i].color + '</p>';
    temp.appendChild(card);
}
// Delay append to avoid errors
setTimeout(() => {
    document.getElementById('container-main').appendChild(temp);
}, 100);
