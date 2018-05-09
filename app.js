/* globals fruits */
'use strict';



function renderFruits() {
    var list = document.getElementById('fruits');
    for(let i = 0; i < fruits.length; i++) {
        var li = fruits[i].createLi();
        list.appendChild(li);
    }
}
renderFruits();

// console.log('hello');

// console.log(fruits[0].strawberry.createLi());

// const testQ = document.querySelector('#fruits');

// console.log(testQ);
// testQ.appendChild(fruits[0].strawberry.createLi());