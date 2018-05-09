# Fruit Stand

Write a fruit stand app that dynamically displays fruit information including name, an image, 
and color of fruit based on fruit data.

It might look something like this (but you can probably do something way better):

<img src="https://user-images.githubusercontent.com/478864/39771385-75865a74-529e-11e8-9fcc-4b81208195d8.png" height="250px">

## Project structure

Your project should have an `index.html` file and normal config (`.eslintrc`, `.gitignore`) at the root. 
In addition, you should have the following folders: `js`, `css`, `images`.

You'll need to find images of each fruit to put in `images` folder.

## Requirements

1. Use the name of the fruit as a header of some sort
1. Set the `img.src` to that image in your images folder
1. Set the `.style.color` property of one of your elements to the color property of the fruit

## Process Guidence

1. In your `index.html` 
    1. Include a 'fruit-list' id on a `<ul>` element as a "placeholder" for js-generated `<li>`s
    1. Add `<script>` for you js files!
1. In 'fruit.js':
    1. create an array of objects to define your fruit
    1. add function 'createLi' to each fruit that creates a `<li>` element with text
1. In `app.js`:
    1. "import" (`globals`) `fruits` from `fruit.js`
    1. process the fruits, using createLi fn to Append Child to `<ul>` element 


## Stretch Goals

1. Add more properties to fruit data that enhance the app
1. Add `:hover` pseudo-class to css to change design as user hovers

## Super Stretch

Add a "detail" element that when you click on each fruit, it displays some additional info about that fruit.