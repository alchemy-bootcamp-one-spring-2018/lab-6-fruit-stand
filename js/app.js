/* globals fruitStand */

function renderFruit(){
    var list = document.getElementById('fruit-list');
    
    for(let i = 0; i < fruitStand.length; i++){
        var li = fruitStand[i].createLi();
        var img = fruitStand[i].createImg();
        var div = document.createElement('div');
        list.appendChild(div);
        div.appendChild(li);
        div.appendChild(img);
    }
}
renderFruit();