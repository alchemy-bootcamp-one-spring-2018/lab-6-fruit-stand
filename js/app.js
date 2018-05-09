/* globals fruitStand */
const ulElement = document.getElementById('fruit-list');

// function makeFruit(){
for(var i = 0; i < fruitStand.length; i++){
    console.log(fruitStand[i]);
    var newDiv = fruitStand[i].createDiv();
    ulElement.appendChild(newDiv);
}