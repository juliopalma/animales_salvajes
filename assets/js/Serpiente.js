import Animal from './Animal.js'

export default class Serpiente extends Animal {

    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Serpiente.jpg', comentarios, 'assets/sounds/Siseo.mp3')
    }

    sisear() {
        const player = document.getElementById('player');
        player.innerHTML = `<source src="${this.sonido}" type="audio/mpeg">`;
        player.play();
    }

}