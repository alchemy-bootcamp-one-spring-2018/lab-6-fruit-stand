/* globals  */
/* exported  fruitStand */

var fruitStand = [
    {
        name: 'apple',
        color: 'red',
        texture: 'firm',
        shape: 'round',
        taste: 'sweet',
        image: 'images/Apple.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.color + ' ' + this.shape;
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'orange',
        color: 'orange',
        texture: 'soft',
        shape: 'round',
        taste: 'sweet',
        region: 'west coast',
        image: 'images/orange.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.color;
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'dragonFruit',
        color: 'pink',
        texture: 'soft',
        shape: 'oblong',
        taste: 'mild',
        image: 'images/dragonFruit.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.color;
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'strawberry',
        color: 'red',
        texture: 'firm',
        shape: 'heart',
        taste: 'tangy',
        image: 'images/strawberry.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.color;
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'starfruit',
        color: 'yellow',
        texture: 'firm',
        shape: 'star',
        taste: 'sour',
        image: 'images/StarFruit.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.color;
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    }
];