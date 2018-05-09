'use strict';
/* globals fruits */


function create() {
    for(var i = 0; i < fruits.length; i++) {
        var first = document.querySelector('#fruit-list');
        first.style = 'color: red';

        var fruitName = fruits[i].createLi();
        first.appendChild(fruitName);

        var fruitImage = (fruits[i].createImg());
        first.appendChild(fruitImage);
    }
}
create();