/* globals  */
/* exported  fruitStand */

var fruitStand = [
    {
        name: 'Apples',
        color: 'red',
        texture: 'firm',
        shape: 'round',
        taste: 'sweet',
        image: 'images/Apple.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' are: ' + this.shape + ', ' + this.color + ', and ' + this.taste;
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'Oranges',
        color: 'orange',
        texture: 'soft',
        shape: 'round',
        taste: 'sweet',
        region: 'west coast',
        image: 'images/orange.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' are named for their color: ' + this.color + ' they are ' + this.texture ;
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'Dragonfruit',
        color: 'pink',
        texture: 'soft',
        shape: 'scaly',
        taste: 'mild',
        image: 'images/dragonFruit.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is named for its ' + this.shape + '. It is ' + this.taste + ' in taste and the inside is ' + this.texture + '.';
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