/* globals myFruit */
/* exported makeFruit */

function makeFruit() {
    var list = document.getElementById('my-fruit');
   



    for(var i = 0; i < myFruit.length; i++) {
        var li = myFruit[i].createLi();
        var img = myFruit[i].createImg();
        list.appendChild(li);
        list.appendChild(img);
    }
}
makeFruit();

