/* globals */
/* exported createLi, addImage, fruits */
'use strict';


// 1. In 'fruit.js':
//     1. create an array of objects to define your fruit
//     1. add function 'createLi' to each fruit that creates a `<li>` element with text

//array of fruit objects
/* fruit object will need fruitName, fruitImg, fruitPrice */


let fruits = [
    {
        fruitImg: 'images/0.png',
        fruitName: 'Apples',
        fruitPrice: '$1',
        // fruitColor: 'green',
    
    },
    // {
    //     fruitImg: 'images/1.png',
    //     fruitName: 'Oranges',
    //     fruitPrice: '$2',
    //     // fruitColor: 'orange',
    // },
    // {
    //     fruitImg: 'images/2.png',
    //     fruitName: 'Bananas',
    //     fruitPrice: '$1',
    //     // fruitColor: 'yellow',
    // },
    // {
    //     fruitImg: 'images/3.png',
    //     fruitName: 'Strawberries',
    //     fruitPrice: '$2',
    //     // fruitColor: 'green',
    // }
];

//function creatLi()
function createLi(x) {
    //code block to create <li>
    //follow steps to add to DOM

    //make a js reference to the parent element
    const ul = document.getElementById('fruits-list');
    //create the child element we want to add and save as a var
    let li = document.createElement('li');
    //give child content (content can be text)
    li.textContent = x.fruitName + ' are ' + x.fruitPrice;
    //append child to the parent
    ul.appendChild(li);
}

//add images to fruit list
// function addImage(x) {
//     const parentImg = document.getElementById('fruits-list');
//     const img = document.createElement('img');
//     img.setAttribute('src', x.fruitImg);
//     parentImg.appendChild(img);
// }

//function for creating ridges on background 


// li that i created line 50 
// set atttribute of an id or class
// innerHTML then type "<img src='image.png'>"
// document.getElementById("image-holder").innerHTML = "<img src='image.png' alt='The Image' />";
// $("li").append("<img src='something' />");