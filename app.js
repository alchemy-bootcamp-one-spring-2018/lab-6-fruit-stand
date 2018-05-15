/* globals fruitStand */


const ul = document.getElementById('fruit-list');

for (var i=0; i<fruitStand.length; i++) {
    const imgEle = document.createElement('img');
    const liEle = fruitStand[i].name;

    imgEle.src = fruitStand[i].image;
    var newLi = fruitStand[i].createLi();
    ul.appendChild(newLi);
    ul.appendChild(imgEle);
}

