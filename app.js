/* globals beerList */
/* exported increaseQuantity, decreaseQuantity */

'use strict';

addBeer();

function addBeer() {
    for(let i = 0; i < beerList.length; i++) {
        createDivs(i);
        addName(i);
        addImage(i);
        addDetails(i);
        addQuantityButton(i);
        changeBackgroundColor(i);
    }
}

function createDivs(i) {
    const parent = document.getElementById('beer-list');
    const div = document.createElement('div');
    div.setAttribute('id', 'beer-' + i);
    div.setAttribute('class', 'beer');
    parent.appendChild(div);
}

function addName(i) {
    const parent = document.getElementById('beer-' + i);
    const child = document.createElement('h2');
    child.textContent = beerList[i].name.toUpperCase();
    parent.appendChild(child);
}

function addImage(i) {
    const parent = document.getElementById('beer-' + i);
    const image = document.createElement('img');
    image.src = './images/' + beerList[i].image;
    parent.appendChild(image);
}

function addDetails(i) {
    const parent = document.getElementById('beer-' + i);
    let child = document.createElement('p');
    child.textContent = 'Brewery: ' + beerList[i].brewery;
    parent.appendChild(child);

    child = document.createElement('p');
    child.textContent = beerList[i].abv + ' ABV';
    parent.appendChild(child);
}

function changeBackgroundColor(i) {
    const parent = document.getElementById('beer-' + i);
    parent.style.background = beerList[i].color;
}

function addQuantityButton(i) {
    const parent = document.getElementById('beer-' + i);
    let child = document.createElement('button');
    child.setAttribute('onclick', 'decreaseQuantity(' + i + ')');
    child.textContent = '-';
    parent.appendChild(child);

    child = document.createElement('span');
    child.setAttribute('id', 'beer-count-' + i);
    child.textContent = ' ' + beerList[i].quantity + ' ';
    parent.appendChild(child);

    child = document.createElement('button');
    child.setAttribute('onclick', 'increaseQuantity(' + i + ')');
    child.textContent = '+';
    parent.appendChild(child);

    child = document.createElement('button');
    // child.setAttribute('onclick', 'addToCart()');
    child.textContent = 'Add to Cart';
    parent.appendChild(child);
}

function increaseQuantity(i) {
    let quantity = document.getElementById('beer-count-' + i);
    beerList[i].increaseQuantity();
    quantity.textContent = beerList[i].quantity;
}

function decreaseQuantity(i) {
    let quantity = document.getElementById('beer-count-' + i);
    beerList[i].decreaseQuantity();
    quantity.textContent = beerList[i].quantity;
}