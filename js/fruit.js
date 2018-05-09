/* exported myFruit */

var myFruit = [
    {
        name: 'pear',
        color: 'green',
        //skinEdible: true,
        image: 'images/pear.jpg',

        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src= this.image;
            li.textContent = this.name + ' is ' + this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
            console.log(li.textContent + 'hi');
        }
    },
    {
        name: 'banana',
        color: 'yellow',
        //skinEdible: false,
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
        //skinEdible: false,
        image: 'images/orange.jpg',

        createLi: function() {
            var li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    }
];


       

