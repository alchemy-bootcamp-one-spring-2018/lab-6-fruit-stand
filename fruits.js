/* globals fruits */
/* exported fruits */
'use strict';


// 1. In 'fruit.js':
//     1. create an array of objects to define your fruit
//     1. add function 'createLi' to each fruit that creates a `<li>` element with text

//array of fruit objects
/* fruit object will need fruitName, fruitImg, fruitPrice */
let fruits = [
    {
        // fruitImg: ,
        fruitName: 'Apples',
        fruitPrice: '$1'
    },
    {
        //fruitImg: ,
        fruitName: 'Oranges',
        fruitPrice: '$2'
    },
    {
        //fruitImg: ,
        fruitName: 'Bananas',
        fruitPrice: '$1'
    },
    {
        //fruitImg: ,
        fruitName: 'Pears',
        fruitPrice: '$.50'
    }
];

//function creatLi()
var createLi = function() {
    //code block to create <li>
    //follow steps to add to DOM

    //make a js reference to the parent element
    const ul = document.getElementById('fruits-list');
    //create the child element we want to add and save as a var
    let li = document.createElement('fruit');
    //give child content (content can be text)
    li.textContent = fruits['fruitName'] + ' are ' + fruits['fruitPrice'];
    //append child to the parent
    ul.appendChild(li);

};



//function for creating ridges on background 