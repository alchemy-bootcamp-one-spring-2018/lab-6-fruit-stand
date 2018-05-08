/* globals fruitList */

// get handle to ul element
const ulElement = document.getElementById('fruit-list');

// for each item in fruit list, create a new li and append it to the parent ul
for(var i = 0; i < fruitList.length; i++) {
    var newLi = fruitList[i].createLi();
    ulElement.appendChild(newLi);
}