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
            let li = document.createElement('h2');
            li.textContent = this.name;
            li.style.color = this.color;
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
            let li = document.createElement('h2');
            li.textContent = this.name;
            li.style.color = this.color;
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
            let li = document.createElement('h2');
            li.textContent = this.name;
            li.style.color = this.color;

            return li;
        },

        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'Strawberries',
        color: 'red',
        texture: 'firm',
        shape: 'heart',
        taste: 'tangy',
        image: 'images/strawberry.jpg',
        createLi: function() {
            let li = document.createElement('h2');
            li.textContent = this.name;
            li.style.color = this.color;

            return li;
        },

        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'Starfruit',
        color: 'yellow',
        texture: 'firm',
        shape: 'star',
        taste: 'sour',
        image: 'images/StarFruit.jpg',
        createLi: function() {
            let li = document.createElement('h2');
            li.textContent = this.name;
            li.style.color = this.color;

            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    },
    {
        name: 'Coconuts',
        color: 'brown',
        texture: 'hard',
        shape: 'round',
        taste: 'mildly-sweet',
        image: 'images/coconut.jpg',
        createLi: function() {
            let li = document.createElement('h2');
            li.textContent = this.name;
            li.style.color = this.color;

            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        }
    }
];