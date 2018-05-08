'use strict';
/* globals fruits */


function createLi() {
    for(var i = 0; i < fruits.length; i++); {
        var newEl = document.createElement('li');
        var newText = document.createTextNode(fruits[i]);
        newEl.appendChild(newText);
        var position = document.getElementById('fruit-list')[0];
        position.appendChild(newEl);
    }
}

console.log(fruits);
createLi();