/* exported fruitList */

function Fruit(name, color, imageFile, hoverText) {
    this.name = name;
    this.color = color;
    this.imageFile = imageFile;
    this.hoverText = hoverText;
    this.createLi = function() {
        var newLi = document.createElement('li');
        var newText = document.createTextNode(this.name);
        var newImg = document.createElement('img');
        newImg.src = this.imageFile;
        newLi.appendChild(newText);
        newLi.appendChild(newImg);
        newLi.className = color;
        newLi.title = this.hoverText;
        return newLi;
    };
}

const fruitList = [
    new Fruit('apples', 'green', 'images/apples.png', 'Fresh apples from the Pacific Northwest!'),
    new Fruit('bananas', 'yellow', 'images/bananas.png', 'Bananas at their perfect peak of ripeness!'),
    new Fruit('oranges', 'orange', 'images/oranges.png', 'Oranges fresh from Florida!'),
    new Fruit('pears', 'yellow', 'images/pears.png', 'Delicious and juicy pears from Washington state!'),
    new Fruit('strawberries', 'red', 'images/strawberries.png', 'Strawberries freshly picked in California!'),
    new Fruit('watermelons', 'green', 'images/watermelons.png', 'Hermiston melons!  America\'s favorite!')
];

