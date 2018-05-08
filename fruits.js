/* globals i */
/* exported createLi */
'use strict';


// 1. In 'fruit.js':
//     1. create an array of objects to define your fruit
//     1. add function 'createLi' to each fruit that creates a `<li>` element with text

//array of fruit objects
/* fruit object will need fruitName, fruitImg, fruitPrice */
let fruits = [
    {
        fruitImg: '0' + '.png',
        fruitName: 'Apples',
        fruitPrice: '$1',
        // fruitColor: 'green',
    },
    {
        fruitImg: '1' + '.png',
        fruitName: 'Oranges',
        fruitPrice: '$2',
        // fruitColor: 'orange',
    },
    {
        fruitImg: '2' + '.png',
        fruitName: 'Bananas',
        fruitPrice: '$1',
        // fruitColor: 'yellow',
    },
    {
        fruitImg: '3' + '.png',
        fruitName: 'Pears',
        fruitPrice: '$.50',
        // fruitColor: 'green',
    }
];

//function creatLi()
function createLi() {
    //code block to create <li>
    //follow steps to add to DOM

    //make a js reference to the parent element
    const ul = document.getElementById('fruits-list');
    //create the child element we want to add and save as a var
    let li = document.createElement('li');
    //give child content (content can be text)
    li.textContent = fruits[i].fruitName + ' are ' + fruits[i].fruitPrice;
    //append child to the parent
    ul.appendChild(li);
}

createLi();
//function for creating ridges on background 