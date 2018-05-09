/* globals fruitStand */
const ulElement = document.getElementById('fruit-list');

for(var i = 0; i < fruitStand.length; i++){
    
    var newLi = fruitStand[i].createLi();
    ulElement.appendChild(newLi);
    console.log(newLi);
}