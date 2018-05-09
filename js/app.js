/* globals myFruit */
/* exported makeFruit */

function makeFruit() {


    for(var i = 0; i < myFruit.length; i++) {
        console.log(myFruit[i]);
    }
}
makeFruit();

console.log(myFruit[0].name);
