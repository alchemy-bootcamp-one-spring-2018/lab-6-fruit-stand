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
        createh2: function() {
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
        createh2: function() {
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
        createh2: function() {
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
        createh2: function() {
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
        createh2: function() {
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
        createh2: function() {
            let li = document.createElement('h2');
            li.textContent = this.name;
            li.style.color = this.color;

            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);

            return img;
        },
        // createD: function() {
        //     let descript = document.createElement('li');
        //     descript.textContent = 'Taste: ' + this.tase;
        // }
    }
];