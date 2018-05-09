/* globals myFruit*/

// var fruits = {
//      type: 'pear',
//      color: 'green',
//      skinEdible: true,
//      hasEaten: true,
//      markAsEaten: function () {
//          this.hasEaten = false;
//      },
//      createLi: function () {
//         var li = document.createElement('li');
//         li.textContent = '${this.color} by ${this.skinEdible}';
//         return li;
//      }
// };
// console.log(' this ' + li);

var uList = document.getElementById('my-fruit');

for (var i = 0; i < myFruit.length; i++) {
    var newFruit = myFruit)[i]).createLi();
    uList.appendChild(newLi);
}
