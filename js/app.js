/* globals fruitStand */
const ulElement = document.getElementById('fruit-list');

// function makeFruit(){
for(var i = 0; i < fruitStand.length; i++){
    console.log(fruitStand[i]);
    var newLi = fruitStand[i].createLi();

    ulElement.appendChild(newLi);
}
// for(var i = 0; i < fruitStand.length; i++){
    
//     var newLi = fruitStand[i].createLi();
//     ulElement.appendChild(newLi);
//     console.log(newLi);
// }