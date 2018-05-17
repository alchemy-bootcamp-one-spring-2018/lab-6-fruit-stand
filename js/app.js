'use strict';
/* globals fruits */

function listFruits() {
    var fruitStandList = document.getElementById('fruit-list');

    for(var i = 0; i < fruits.length; i++){
        var li = fruits[i].createLi();
        var img = fruits[i].fruitImage();

        fruitStandList.appendChild(li);
        fruitStandList.appendChild(img);
    }
}


listFruits();