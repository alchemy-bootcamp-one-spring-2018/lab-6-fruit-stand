/* exported fruits */
'use strict';


const fruits = [

    {
        name: 'strawberries',
        color: 'red',
        family: 'rosaceae',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + ' are ' + this.color + ' and are part of the ' + this.family + ' family.';
            return li;
        }
    },

    {
        name: 'apple',
        color: 'green',
        family: 'rosaceae',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + ' part of the ' + this.family + ' family.';
            return li;
        }
    },

    {
        name: 'blueberry',
        color: 'blue',
        family: 'ericaceae',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + ' part of the ' + this.family + ' family.';
            return li;
        }
    },
        
    {
        name: 'banana',
        color: 'yellow',
        family: 'musaceae',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + ' part of the ' + this.family + ' family.';
            return li;
        }
    }

    //     asPie: false,
    //     likesAsPie: function() {
    //         this.asPie = true;

];