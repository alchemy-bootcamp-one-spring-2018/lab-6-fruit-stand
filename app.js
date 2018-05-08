'use strict';

var parent = document.getElementById('parentElement');
var child = document.createElement('p');
child.textContent = 'Testing the words added in our p element';
parent.appendChild(child);