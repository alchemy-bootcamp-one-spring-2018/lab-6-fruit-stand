Fruit Stand
Write an fruit stand app that dynamically displays fruit information including name, an image, and color of fruit based on fruit data.

It might look something like this (but you can probably do something waaay better):



Project structure
Your project should have an index.html file and normal config (.eslintrc, .gitignore) at the root. In addition, you should have the following folders: js, css, images.

You'll need to find images of each fruit to put in images folder.

Requirements
Use the name of the fruit as a header of some sort
Set the img.src to that image in your images folder
Set the .style.color property of one of your elements to the color property of the fruit
Process Guidence
In your index.html
Include an 'fruit-list' id on a <ul> element as a "placeholder" for js-generated <li>s
Add <script> for you js files!
In 'fruit.js':
create an array of objects to define your fruit
add function 'createLi' to each fruit that creates a <li> element with text
In app.js:
"import" (globals) fruits from fruit.js
process the fruits, using createLi fn to Append Child to <ul> element
Stretch Goals
Add more properties to fruit data that enhance the app
Add :hover pseudo-class to css to change design as user hovers
Super Stretch
Add a "detail" element that when you click on each fruit, it displays some additional info about that fruit.