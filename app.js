/* exported renderFruit */
/* globals fruits */

function renderFruit() {
    const list = document.getElementById('fruit-list');

    for(var i = 0; i < fruits.length; i++) {
        const li = fruits[i].createLi();
        list.appendChild(li);
    }
}