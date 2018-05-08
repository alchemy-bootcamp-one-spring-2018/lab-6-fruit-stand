/* globals fruitList */

const ulElement = document.getElementById('fruit-list');

for(var i = 0; i < fruitList.length; i++) {
    var newLi = fruitList[i].createLi();
    ulElement.appendChild(newLi);
}