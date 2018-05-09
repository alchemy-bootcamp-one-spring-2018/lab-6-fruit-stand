# Fruit Stand

Write an fruit stand app that dynamically displays fruit information including name, an image, 
and color of fruit based on fruit data.

It might look something like this (but you can probably do something waaay better):

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
    1. Include an 'fruit-list' id on a `<ul>` element as a "placeholder" for js-generated `<li>`s
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


old requirements
<!-- # Fruit Stand

Write an fruit stand app that dynamically displays fruit information including name, an image, 
and color of fruit based on fruit data.

It might look something like this (but you can probably do something waaay better):

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
    1. Include a root element for "mounting" your app
    1. Use a template element to describe the base html for an individual fruit list item (`li`)
    1. Add `<script>` for you js files!
1. In `app.js`:
    1. "import" (`globals`) `fruits` from `fruit.js`
    1. "export" (`exported`) the `App` class
    1. Before the class definition, create a template variable and assign it the template content from the 
    template element in `index.html` (Don't forget to use the `.content` property to get the document fragment!)
    1. Define your `App` class (more below)
1. In `main.js`, 
    1. "import" (`globals`) `App` from `App.js`
    1. Create an instance of the App class
    1. Call `app.render()` and append result to root element from `index.html`
1. In your `App` class:
    1. Define a constructor that assigns the fruit data to `this.fruits`
    1. Define a render method that will
        1. Create the `ul` element
        1. Loop the fruit data and clone the template, then update the clone with the data from the fruit
            1. Clone
            1. `.querySelect` each element on which you need to set property(ies)
            1. Modify those elements
            1. Append to `ul`
        1. return the `ul` element

## Stretch Goals

1. Add more properties to fruit data that enhance the app
1. Add `:hover` pseudo-class to css to change design as user hovers

## Super Stretch

Add a "detail" element that when you click on each fruit, it displays some additional info about that fruit. -->
