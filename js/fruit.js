'use strict';
/*globals */
/* exported fruits, createLi */

/*
name: string
color: string
isFavorite: boolean
taste: ['sweet', 'sour', 'tart', 'buttery']
size: ['small', 'medium', 'large']
howMany: number
*/

function createLi() {
    for(var i = 0; i < fruits.length; i++) {
        var newEl = document.createElement('li');
        var newText = document.createTextNode(Object.getOwnPropertyNames(fruits[i]));
        newEl.appendChild(newText);
        var position = document.getElementById('fruit-list');
        position.appendChild(newEl);
    }
}


const fruits = [
    {
        apple: {
            color: 'green',
            isFavorite: false,
            taste: 'sweet',
            size: 'medium',
            howMany: 1,
            image: 'images/apple.png',
        }
    },
    
    {
        banana: {
            color: 'yellow',
            isFavorite: true,
            taste: 'sweet',
            size: 'medium',
            howMany: 1,
            image: 'images/banana.png',
        }
    },

    {
        cherry: {
            color: 'red',
            isFavorite: false,
            taste: 'tart',
            size: 'small',
            howMany: 1,
            image: 'images/cherry.png',
        }
    },

    {
        grape: {
            color: 'purple',
            isFavorite: false,
            taste: 'sweet',
            size: 'small',
            howMany: 1,
            image: 'images/grape.png',
        }
    },

    {
        kiwi: {
            color: 'green',
            isFavorite: true,
            taste: 'tart',
            size: 'small',
            howMany: 1,
            image: 'images/kiwi.png',
        }
    },

    {
        lemon: {
            color: 'yellow',
            isFavorite: false,
            taste: 'sour',
            size: 'medium',
            howMany: 1,
            image: 'images/lemon.png',
        }
    },
    {
        orange: {
            color: 'orange',
            isFavorite: false,
            taste: 'sweet',
            size: 'medium',
            howMany: 1,
            image: 'images/orange.png',
        }
    },

    {
        pineapple: {
            color: 'yellow',
            isFavorite: true,
            taste: 'tart',
            size: 'large',
            howMany: 1,
            image: 'images/pineapple.png',
        }
    },
];
