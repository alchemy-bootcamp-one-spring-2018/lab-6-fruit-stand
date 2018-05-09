/* exported fruits */
'use strict';


const fruits = [{

    strawberry: {
        name: 'strawberry',
        color: 'red',
        family: 'rosaceae',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + ' part of the ' + this.family + ' family.';
            return li;
        }
    },

    apple: {
        name: 'apple',
        color: 'green',
        family: 'rosaceae',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + ' part of the ' + this.family + ' family.';
            return li;
        }
    },

    blueberry: {
        name: 'blueberry',
        color: 'blue',
        family: 'ericaceae',
        createLi: function() {
            const li = document.createElement('li');
            li.textContent = this.name + ' part of the ' + this.family + ' family.';
            return li;
        }
    },
        
    banana: {
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
}
];