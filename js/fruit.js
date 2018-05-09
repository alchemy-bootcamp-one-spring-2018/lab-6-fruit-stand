/* exported myFruit */


var myFruit = [
    {
        name: 'pear',
        color: 'green',
        skinEdible: true,
        image: 'images/pear.jpg',

        createLi: function() {
            var li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    },
    {
        name: 'banana',
        color: 'yellow',
        skinEdible: false,
        image: 'images/banana.jpg',

        createLi: function() {
            var li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    },
    {
        name: 'orange',
        color: 'orange',
        skinEdible: false,
        image: 'images/orange.jpg',

        createLi: function() {
            var li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    }
];



       

