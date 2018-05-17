'use strict';
/* exported fruits */

var fruits = [
    {
        img: 'images/apple.png',
        name: 'apple',
        origin: 'usa',
        color: 'red',
        season: 'fall',
        
        createLi: function() {
            var li = document.createElement('li');
            li.textContent = 'origin: ' + this.origin + ' peak season: ' + this.season;
            li.style.color = this.color;
            return li;
        },
        fruitImage: function () {
            var img = document.createElement('img');
            img.setAttribute('src' , this.img);
            return img;
        }    
    },
    {
        img: 'images/cherry.png',
        name: 'cherry',
        origin: 'usa',
        color: '#915766',
        season: 'summer',
        
        createLi: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season: ' + this.season;
        li.style.color = this.color;
        return li;
        },
        fruitImage: function () {
            var img = document.createElement('img');
            img.setAttribute('src' , this.img);
            return img;
        }
    },
    {
        img: 'images/grapes.png',
        name: 'grapes',
        origin: 'france',
        color: 'violet',
        season: 'spring',
        
        createLi: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season: ' + this.season;
        li.style.color = this.color;
        return li; 
        },
        fruitImage: function () {
            var img = document.createElement('img');
            img.setAttribute('src' , this.img);
            return img;
        }
    },
    {
        img: 'images/banana.png',
        name: 'banana',
        origin: 'brazil',
        color: '#BF970E',
        season: 'summer',
        
        createLi: function() {
        var li = document.createElement('li');
        li.textContent = 'origin: ' + this.origin + ' peak season: ' + this.season;
        li.style.color = this.color;
        return li;
        },
        fruitImage: function () {
            var img = document.createElement('img');
            img.setAttribute('src' , this.img);
            return img;
        }
    }  
];