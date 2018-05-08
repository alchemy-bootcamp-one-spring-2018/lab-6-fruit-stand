

for(let i = 0; i < fruit.length; i++) {
    renderFruit(fruit[i]);
}



function renderFruit(fruit) {

    const list = document.getElementById('listId');
    const li = fruit.createLi();

    list.appendChild(li);
}


// const parent = document.getElementById('parentElement');  
// const child = document.createElement('p');  
// child.textContent = 'Some words we want in our p element';  
// parent.appendChild(child);