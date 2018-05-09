var fruits = {
    name: 'pear',
    color: 'green',
    skinEdible: true,
    image: 'images/pear.jpg'

    createLi: function() {
        var li = document.createElement('li');
        li.textContent = this.color + ' yum ' + this.skinEdible;
        return li;
  



var fruit1 = {
    type: 'pear',
    color: 'green',
    skinEdible: true
};

var fruit2 = {
    type: 'banana',
    color: 'yellow',
    skinEdible: false
    method: function () {
        alert(this.skinEdible);
    }
};
console.log('outside of an object this is: ', this);

//     orange: {
//     id: 'orange',
//     color: 'orange',
//     skinEdible: false

// },

//     strawberry: {
//     id: 'strawberry',
//     color: 'red',
//     skinEdible: 'true'
//     ]
// };


