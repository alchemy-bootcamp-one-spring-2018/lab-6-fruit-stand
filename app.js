

const list = document.getElementById('listId');


for(var i = 0; i < fruit.length; i++) {
    var li = fruit[i].createLi();
    list.appendChild(li);
}