'use strict';
/* globals */
/* exported fruits, createLi, createImg*/

/*
name: string
color: string
isFavorite: boolean
taste: ['sweet', 'sour', 'tart', 'buttery']
size: ['small', 'medium', 'large']
howMany: number
*/

const fruits = [
    {
        name: 'apple',
        color: 'green',
        isFavorite: false,
        taste: 'sweet',
        size: 'medium',
        howMany: 1,
        image: 'images/apple.png',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name;
            return li;
        },
        createImg: function() {
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
    },
    
    {
        name: 'banana',
        color: 'yellow',
        isFavorite: true,
        taste: 'sweet',
        size: 'medium',
        howMany: 1,
        image: 'images/banana.png',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name;
            return li;
        },
        createImg: function() {
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
        
    },

    {
        name: 'cherry',
        color: 'red',
        isFavorite: false,
        taste: 'tart',
        size: 'small',
        howMany: 1,
        image: 'images/cherry.png',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name;
            return li;
        },
        createImg: function() {
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
    },

    {
        name: 'grape',
        color: 'purple',
        isFavorite: false,
        taste: 'sweet',
        size: 'small',
        howMany: 1,
        image: 'images/grape.png',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name;
            return li;
        },
        createImg: function() {
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
    },

    {
        name: 'kiwi',
        color: 'green',
        isFavorite: true,
        taste: 'tart',
        size: 'small',
        howMany: 1,
        image: 'images/kiwi.png',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name;
            return li;
        },
        createImg: function() {
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
    },

    {
        name: 'lemon',
        color: 'yellow',
        isFavorite: false,
        taste: 'sour',
        size: 'medium',
        howMany: 1,
        image: 'images/lemon.png',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name;
            return li;
        },
        createImg: function() {
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
    },

    {
        name: 'orange',
        color: 'orange',
        isFavorite: false,
        taste: 'sweet',
        size: 'medium',
        howMany: 1,
        image: 'images/orange.png',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name;
            return li;
        },
        createImg: function() {
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
    },

    {
        name: 'pineapple',
        color: 'yellow',
        isFavorite: true,
        taste: 'tart',
        size: 'large',
        howMany: 1,
        image: 'images/pineapple.png',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name;
            return li;
        },
        createImg: function() {
            const img = document.createElement('img');
            img.src = this.image;
            return img;
        }
    },
];
