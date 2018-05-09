/* globals myFruit */
/* exported makeFruit */

function makeFruit() {
    var list = document.getElementById('my-fruit');
    var li = myFruit.createLi();

    for(var i = 0; i < myFruit.length; i++) {
        var li = myFruit[i].createElement('li');
        myFruit.appendChild(li);
    }
}
