'use strict';
/* globals fruits */


function create() {
    for(var i = 0; i < fruits.length; i++) {
        var first = document.querySelector('#fruit-list');

        var fruitName = fruits[i].createLi();
        first.appendChild(fruitName);
        first.style.color = fruits[3].color;

        var fruitImage = (fruits[i].createImg());
        first.appendChild(fruitImage);
    }
}
create();