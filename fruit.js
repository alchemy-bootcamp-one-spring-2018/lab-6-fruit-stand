'use strict';
/* exported fruitStand */

//    - name
//    - color
//    - texture
//    - skinEdible
//    - image


var fruitStand = [
    {
        name: 'Apple',
        color: 'Red',
        texture:  'hard',
        skinEdible: 'true',
        image: './images/Apple.jpg',        
        createLi: function () {
            // will return a li with the fruit's info
            const ul = document.querySelector('#fruit-list');
            const li = document.createElement('li');
            li.textContent = this.name;
            li.style.color = this.color;
            ul.appendChild(li);
            return li;
        },
    },
        {
        name: 'Banana',
        color: 'Gold',
        texture:  'soft',
        skinEdible: 'false', 
        image: './images/Banana.jpg',       
        createLi: function () {
            // will return a li with the fruit's info
            const ul = document.querySelector('#fruit-list');
            const li = document.createElement('li');
            li.textContent = this.name;
            li.style.color = this.color;
            ul.appendChild(li);
            return li;
        }
    },
        {
        name: 'Cherries',
        color: 'Red',
        texture:  'soft',
        skinEdible: 'true', 
        image: './images/Cherries.jpg',       
        createLi: function () {
            // will return a li with the fruit's info
            const ul = document.querySelector('#fruit-list');
            const li = document.createElement('li');
            li.textContent = this.name;
            li.style.color = this.color;
            ul.appendChild(li);
            return li;
        }
    },    
    {
        name: 'Mango',
        color: 'Gold',
        texture:  'soft',
        skinEdible: 'true', 
        image: './images/Mango.jpg',       
        createLi: function () {
            // will return a li with the fruit's info
            const ul = document.querySelector('#fruit-list');
            const li = document.createElement('li');
            li.textContent = this.name;
            li.style.color = this.color;
            ul.appendChild(li);
            return li;
        }
    },    
    {
        name: 'Orange',
        color: 'Orange',
        texture:  'soft',
        skinEdible: 'true', 
        image: './images/Orange.jpg',       
        createLi: function () {
            // will return a li with the fruit's info
            const ul = document.querySelector('#fruit-list');
            const li = document.createElement('li');
            li.textContent = this.name;
            li.style.color = this.color;
            ul.appendChild(li);
            return li;
        }
    }    
];

