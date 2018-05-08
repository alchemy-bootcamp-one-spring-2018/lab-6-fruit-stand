/* globals fruits, createLi, i */
/* exported */
'use strict';

// 1. In `app.js`:
// 1. "import" (`globals`) `fruits` from `fruit.js`
// 1. process the fruits, using createLi fn to Append Child to `<ul>` element 


//loop through fruits from fruits.js
for(var f = 0; f < fruits.length; f++) {
    //call createLi to append child to <ul id="fruits-list">
    createLi(fruits[i]);
}