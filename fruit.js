/* exported fruit */

var fruit = [
    {
        name: 'apple',
        color: 'red',
        image: 'images/apple.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    },
    {
        name: 'banana',
        color: 'yellow',
        image: 'images/banana.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    },
    {
        name: 'cherry',
        color: 'red',
        image: 'images/cherry.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    },
    {
        name: 'kiwi',
        color: 'green',
        image: 'images/kiwi.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    },
    {
        name: 'orange',
        color: 'orange',
        image: 'images/orange.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    },
    {
        name: 'pear',
        color: 'green',
        image: 'images/pear.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    },
    {
        name: 'pineapple',
        color: 'green',
        image: 'images/pineapple.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    },
    {
        name: 'raspberry',
        color: 'red',
        image: 'images/raspberry.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    },
    {
        name: 'strawberry',
        color: 'red',
        image: 'images/strawberry.jpg',
        createLi: function() {
            var li = document.createElement('li');
            var text = document.createTextNode(this.name);
            var img = document.createElement('img');
            img.src = this.image;
            li.className = this.color;
            li.appendChild(text);
            li.appendChild(img);
            return li;
        }
    }
];
