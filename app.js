/* globals fruits, createLi, addImage */
/* exported */
'use strict';

// 1. In `app.js`:
// 1. "import" (`globals`) `fruits` from `fruit.js`
// 1. process the fruits, using createLi fn to Append Child to `<ul>` element 


//loop through fruits from fruits.js
for(var i = 0; i < fruits.length; i++) {
    //call createLi to append child to <ul id="fruits-list">
    createLi(fruits[i]);
    addImage(fruits[i]);
}