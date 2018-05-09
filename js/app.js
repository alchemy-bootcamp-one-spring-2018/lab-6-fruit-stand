/* globals makeFruit, myFruit */


function makeFruit() {
//myFruit = document.getElementById('my-fruit');

    for(var i = 0; i < myFruit.length; i++) {
        var li = myFruit[i].createLi();
        list.appendChild(li);
    }
}