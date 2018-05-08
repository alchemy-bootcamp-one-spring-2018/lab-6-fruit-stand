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
        }
    },
    
    {
        banana: {
            color: 'yellow',
            isFavorite: true,
            taste: 'sweet',
            size: 'medium',
            howMany: 1,
        }
    },

    {
        cherry: {
            color: 'red',
            isFavorite: false,
            taste: 'tart',
            size: 'small',
            howMany: 1,
        }
    },

    {
        grape: {
            color: 'purple',
            isFavorite: false,
            taste: 'sweet',
            size: 'small',
            howMany: 1,
        }
    },

    {
        kiwi: {
            color: 'green',
            isFavorite: true,
            taste: 'tart',
            size: 'small',
            howMany: 1,
        }
    },

    {
        lemon: {
            color: 'yellow',
            isFavorite: false,
            taste: 'sour',
            size: 'medium',
            howMany: 1,
        }
    },
    {
        orange: {
            color: 'orange',
            isFavorite: false,
            taste: 'sweet',
            size: 'medium',
            howMany: 1,
        }
    },

    {
        pineapple: {
            color: 'yellow',
            isFavorite: true,
            taste: 'tart',
            size: 'large',
            howMany: 1,
        }
    },
];
