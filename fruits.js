/* globals */
/* exported createLi, addImage, fruits */
'use strict';

//array of fruit objects
/* fruit object will need fruitName, fruitImg, fruitPrice */
let fruits = [
    // {
    //     fruitImg: 'images/0.png',
    //     fruitName: 'Apples',
    //     fruitPrice: '$1',
    //     // fruitColor: 'green',
    
    // },
    {
        fruitImg: 'images/1.png',
        fruitName: 'Oranges',
        fruitPrice: '$2',
        fruitColor: 'orange',
    },
    {
        fruitImg: 'images/2.png',
        fruitName: 'Bananas',
        fruitPrice: '$1',
        fruitColor: 'yellow',
    },
    {
        fruitImg: 'images/3.png',
        fruitName: 'Strawberries',
        fruitPrice: '$2',
        fruitColor: 'red',
    }
];

//function creatLi()
function createLi(fruits) {
    //make a js reference to the parent element
    const ul = document.getElementById('fruits-list');
    //create the child element we want to add and save as a var
    let li = document.createElement('li');
    //give child content (content can be text)
    li.textContent = fruits.fruitName + ' are ' + fruits.fruitPrice;
    li.style.color = fruits.fruitColor;
    //append child to the parent
    ul.appendChild(li);
}

//add images to fruit list
function addImage(fruits) {
    //make a js reference to the parent element
    const parentImg = document.getElementById('fruit-images');
    //create the child element we want to add and save as a var
    const img = document.createElement('img');
    //give child content (content can be text)
    img.setAttribute('src', fruits.fruitImg);
    //append child to the parent
    parentImg.appendChild(img);
}