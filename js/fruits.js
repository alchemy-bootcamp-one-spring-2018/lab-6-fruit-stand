/*exported fruitStand */
const fruitStand = [

    {
        id: 'pear',
        color: 'green',
        seeds: false,
        image: 'images/pear.jpg',
        createLi: function() {
            const item = document.createElement('div');
            item.textContent = this.id + 's are ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    },

    {
        id:'apple',
        color: 'red',
        seeds: true,
        image: 'images/apple.jpg',
        createLi: function() {
            const item = document.createElement('div');
            item.textContent = this.id + 's are ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    },

    {
        id: 'cherry',
        color: 'red',
        seeds: true,
        image: 'images/cherry.jpg',
        createLi: function(){
            const item = document.createElement('div');
            item.textContent = this.id + 's are ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    },

    {
        id: 'orange',
        color: 'orange',
        seeds: true,
        image: 'images/orange.jpg',
        createLi: function(){
            const item = document.createElement('div');
            item.textContent = this.id + 's are ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    },

    {
        id: 'strawberry',
        color: 'red',
        seeds: true,
        image: 'images/strawberry.jpg',
        createLi: function(){
            const item = document.createElement('div');
            item.textContent = this.id + 's are ' + this.color;
            const img = document.createElement('img');
            img.setAttribute('src', this.image);
            item.appendChild(img);
            item.className = this.color;
            return item;
        }
    },




];