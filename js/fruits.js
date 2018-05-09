/*exported fruitStand */

function Fruit(name, color, imageFile){
    this.name = name;
    this.color = color;
    this.imageFile - imageFile;
    this.createLi = function() {
        var newLi = document.createElement('li');
        var newText = document.createTextNode(this.name);
        var newImage = document.createElement('img');
        newImage.src = this.imageFile;
        newLi.appendChild(newText);
        newLi.appendChild(newImage);
        newLi.className = this.color;
        return newLi;
    };
}

const fruitStand = [
    new Fruit('apple', 'red', 'images/apple.jpg'),
    new Fruit('banana', 'yellow', 'images/banana.jpg'),
    new Fruit('cherry', 'red', 'images/cherry.jpg')
];