/* exported fruits */

const fruits = [
    {
        name: 'apple',
        color: 'red',
        image: 'images/apple.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            li.setAttribute('class', this.color);
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    },
    {
        name: 'banana',
        color: 'yellow',
        image: 'images/banana.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            li.setAttribute('class', this.color);
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    },
    {
        name: 'lime',
        color: 'green',
        image: 'images/lime.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            li.setAttribute('class', this.color);
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    },
    {
        name: 'orange',
        color: 'orange',
        image: 'images/orange.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            li.setAttribute('class', this.color);
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    },
    {
        name: 'strawberry',
        color: 'red',
        image: 'images/strawberry.jpg',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            li.setAttribute('class', this.color);
            return li;
        },
        createImg: function() {
            let img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    },
];
