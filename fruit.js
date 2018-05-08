/* exported fruitsArray */

const fruitsArray = [
    {
        name: 'apple',
        color: 'red',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    },
    {
        name: 'banana',
        color: 'yellow',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    },
    {
        name: 'lemon',
        color: 'yellow',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    },
    {
        name: 'orange',
        color: 'orange',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    },
    {
        name: 'strawberry',
        color: 'red',
        createLi: function() {
            let li = document.createElement('li');
            li.textContent = this.name + ' is ' + this.color;
            return li;
        }
    }
];
