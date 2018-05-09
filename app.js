/* globals fruits, createLi, addImage */
/* exported */
'use strict';

//loop through fruits from fruits.js
for(var i = 0; i < fruits.length; i++) {
    //call createLi to append child to <ul id="fruits-list">
    createLi(fruits[i]);
}

//loop through images
for(var j = 0; j < fruits.length; j++) {
    addImage(fruits[j]);
}

