/* exported myFruit */

var myFruit = [
    {
        name: 'pear',
        color: 'green',
        skinEdible: true,
        image: 'images/pear.jpg',

        createLi: function() {
            var li = document.createElement('li');
            li.textContent = 'this ' + this.name + ' is ' + this.color + ' and it is ' + this.skinEdible + ' the skin is edible.';
            li.style = 'color: green';
            return li;
            
        },
        createImg: function() {
            var img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }  
    },
    {
        name: 'banana',
        color: 'yellow',
        skinEdible: false,
        image: 'images/banana.jpg',

        createLi: function() {
            var li = document.createElement('li');
            li.textContent = 'this ' + this.name + ' is ' + this.color + ' and it is ' + this.skinEdible + ' the skin is edible.';
            li.style = 'color: #ffff00';
            return li;
        },
        createImg: function() {
            var img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    },
    {
        name: 'orange',
        color: 'orange',
        skinEdible: false,
        image: 'images/orange.jpg',

        createLi: function() {
            var li = document.createElement('li');
            li.textContent = 'this ' + this.name + ' is ' + this.color + ' and it is ' + this.skinEdible + ' the skin is edible.';
            li.style = 'color: #cc6600';
            return li;
        },
        createImg: function() {
            var img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    }
];



       

