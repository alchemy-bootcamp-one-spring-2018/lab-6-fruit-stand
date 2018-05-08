/* exported fruitList */

function Fruit(name, color, imageFile) {
    this.name = name;
    this.color = color;
    this.imageFile = imageFile;
    this.createLi = function() {
        var newLi = document.createElement('li');
        var newText = document.createTextNode(this.name);
        var newImg = document.createElement('img');
        newImg.src = this.imageFile;
        newLi.appendChild(newText);
        newLi.appendChild(newImg);
        return newLi;
    };
}

const fruitList = [
    new Fruit('apples', 'green', 'images/apples.png'),
    new Fruit('bananas', 'yellow', 'images/bananas.png'),
    new Fruit('oranges', 'orange', 'images/oranges.png'),
    new Fruit('pears', 'yellow', 'images/pears.png'),
    new Fruit('strawberries', 'red', 'images/strawberries.png'),
    new Fruit('watermelons', 'green', 'images/watermelons.png')
];

