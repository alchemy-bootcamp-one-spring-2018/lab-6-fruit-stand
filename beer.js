/* exported beerList */

'use strict';

function Beer(name, image, brewery, abv, color, quantity) {
    this.name = name;
    this.image = image;
    this.brewery = brewery;
    this.abv = abv;
    this.color = color;
    this.quantity = quantity;
    this.increaseQuantity = function() {
        this.quantity++;
    };
    this.decreaseQuantity = function() {
        this.quantity--;
    };
}

const wanderlust = new Beer(
    'Wanderlust',
    'wanderlust.jpg',
    'Breakside',
    '6.2%',
    'brown',
    '18'
);

const lunchBreak = new Beer(
    'Lunch Break',
    'lunchBreak.jpg',
    'Breakside',
    '4.7%',
    'goldenrod',
    '36'
);

const breakside = new Beer(
    'Breakside',
    'breakside.jpg',
    'Breakside',
    '6.2%',
    'beige',
    '0'
);
const indiaGoldenAle = new Beer(
    'India Golden Ale',
    'IndiaGoldenAle.jpg',
    'Breakside',
    '8.2%',
    'bisque',
    '1'
);
const whatRoughBeast = new Beer(
    'What Rough Beast',
    'WhatRoughBeast.jpg',
    'Breakside',
    '6.8%',
    'white',
    '0'
);
const passionFruitSourAle = new Beer(
    'Passion Fruit Sour Ale',
    'PFS.jpg',
    'Breakside',
    '5%',
    'lavender',
    '920'
);

const pilsner = new Beer(
    'Pilsner',
    'Pilsner.jpg',
    'Breakside',
    '5.2%',
    'beige',
    '64'
);

const beerList = [
    wanderlust,
    lunchBreak,
    breakside,
    indiaGoldenAle,
    whatRoughBeast,
    passionFruitSourAle,
    pilsner
];