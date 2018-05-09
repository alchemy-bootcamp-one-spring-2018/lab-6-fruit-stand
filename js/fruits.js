/*exported fruitStand */

// function Fruit(name, color, imageFile){
//     this.name = name;
//     this.color = color;
//     this.imageFile - imageFile;
//     this.createLi = function() {
//         var newLi = document.createElement('li');
//         var newText = document.createTextNode(this.name);
//         var newImage = document.createElement('img');
//         newImage.src = this.imgFile;
//         newLi.appendChild(newText);
//         newLi.appendChild(newImage);
//         return newLi;
//     };
// }

// const fruitStand = [
//     new Fruit('apple', 'red', 'images/apple.jpg'),
//     new Fruit('banana', 'yellow', 'images/banana.jpg')
// ];

// var apple = new fruit('apple', 'red')

const fruitStand = [

    {
        id: 'banana',
        color: 'yellow',
        seeds: false,
        image: 'images/banana.jpg',
        createLi: function() {
            const item = document.createElement('li');
            item.textContent = this.id + ' is ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    },

    {
        id:'apple',
        color: 'red',
        seeds: true,
        image: 'images/apple.jpg',
        createLi: function() {
            const item = document.createElement('li');
            item.textContent = this.id + ' is ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    },

    {
        id: 'cherry',
        color: 'red',
        seeds: true,
        image: 'images/cherry.jpg',
        createLi: function(){
            const item = document.createElement('li');
            item.textContent = this.id + ' is ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    },

    {
        id: 'orange',
        color: 'orange',
        seeds: true,
        image: 'images/orange.jpg',
        createLi: function() {
            const item = document.createElement('li');
            item.textContent = this.id + ' is ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    }


];