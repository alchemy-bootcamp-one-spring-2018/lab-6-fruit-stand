function Fruits(color, type, image) {
    this.color = color;
    this.type = type;
    this.image = image;
    this.append = function(card) {
        card.classList = 'card';
        card.style.background = this.color;
        card.innerHTML = '<p>' + this.type + '</p><img src="' + this.image + '"><p>' + this.color + '</p>';
        setTimeout(() => {
            document.getElementById('container-main').appendChild(card);            
        }, 100);
    };
}