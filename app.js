/*   exported fruit      */
'use strict';

const fruit = {
    name: 'strawBerry',
    family: 'rosaceae',
    asPie: false,
    likesAsPie: function() {
        this.asPie = true;
    },

    createLi: function() {
        const li = document.createElement('li');
        li.textContent = this.name + ' part of the ' + this.family + ' family.';
        return li;

    }
};

const fruit2 = {
    name: 'apple',
    family: 'rosaceae',
    asPie: false,
    likesAsPie: function() {
        this.asPie = true;
    },

    createLi: function() {
        const li = document.createElement('li');
        li.textContent = this.name + ' part of the ' + this.family + ' family.';
        return li;
    }
};

const fruit3 = {
    name: 'banana',
    family: 'musaceae',
    asPie: false,
    likesAsPie: function() {
        this.asPie = true;
    },

    createLi: function() {
        const li = document.createElement('li');
        li.textContent = this.name + ' part of the ' + this.family + ' family.';
        return li;
    }
};

const fruit4 = {
    name: 'blueberry',
    family: 'Ericaceae',
    asPie: false,
    likesAsPie: function() {
        this.asPie = true;
    },

    createLi: function() {
        const li = document.createElement('li');
        li.textContent = this.name + ' part of the ' + this.family + ' family. ';
    }
};

