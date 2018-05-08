var fruits = [{
    color: 'green',
    type: 'Apple',
    image: '../images/green-apple.jpeg'
}, {
    color: 'orange',
    type: 'Orange',
    image: '../images/orange.png'
}, {
    color: 'yellow',
    type: 'Banana',
    image: '../images/banana.jpeg'
}, {
    color: 'red',
    type: 'Strawberry',
    image: '../images/strawberry.jpeg'
}, {
    color: 'green',
    type: 'Watermelon',
    image: '../images/watermelon.jpeg'
}, {
    color: 'yellow',
    type: 'Pear',
    image: '../images/pear.jpeg'
}];

console.log('in the fruit.js');


var temp = document.createDocumentFragment();
console.log(temp);
for(let i = 0; i < fruits.length; i++) {
    var card = document.createElement('div');
    card.classList = 'card';
    card.style.background = fruits[i].color;
    card.innerHTML = '<p>' + fruits[i].type + '</p><img src="' + fruits[i].image + '"><p>' + fruits[i].color + '</p>';
    console.log(card);
    temp.appendChild(card);
}
setTimeout(() => {
    document.getElementById('container-main').appendChild(temp);
}, 100);
