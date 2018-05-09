/* globals coffeeList */
'use strict';

// inserts HTML <section> tag within <div> element for each object
function insertSectionEl(i) {
    const div = document.querySelector('div');
    const section = document.createElement('section');
    section.setAttribute('id', 'coffee-item-' + i);
    section.setAttribute('class', 'container');
    div.appendChild(section);
}

// inserts object content into HTML <h2> tag within <section> element
function insertCoffeeName(i) {
    const section = document.getElementById('coffee-item-' + i.toString());
    const h2 = document.createElement('h2');
    section.appendChild(h2);
    h2.setAttribute('id', 'name-' + i.toString());
    h2.textContent = coffeeList[i].type;
}

// inserts object content into HTML <img> tag within <section> element
function insertCoffeeImage(i) {
    const section = document.getElementById('coffee-item-' + i.toString());
    const image = document.createElement('img');
    section.appendChild(image);
    image.setAttribute('class', 'images');
    image.setAttribute('id', 'image-' + i.toString());
    image.src = coffeeList[i].image;
}

// inserts object content into HTML <p> tag within <section> element
function insertCoffeeTemp(i) {
    const section = document.getElementById('coffee-item-' + i.toString());
    const par = document.createElement('p');
    section.appendChild(par);
    par.setAttribute('id', 'par-' + i.toString());

    if(coffeeList[i].temp === 'hot') {
        par.classList = 'hot';
        par.style.color = 'red';
    }
    else {
        par.classList = 'cold';
        par.style.color = 'blue';
    }
    
    par.textContent = coffeeList[i].temp.toUpperCase();
}

function coffeeShop() {
    for(var i = 0; i < coffeeList.length; i++) {
        insertSectionEl(i);
        insertCoffeeName(i);
        insertCoffeeImage(i);
        insertCoffeeTemp(i);
    }
}

coffeeShop();
