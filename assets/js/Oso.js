import Animal from './Animal.js'

export default class Oso extends Animal {

    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Oso.jpg', comentarios, 'assets/sounds/Gruñido.mp3')
    }

    async gruñir() {
        const player = document.getElementById('player');
        player.innerHTML = `<source src="${this.sonido}" type="audio/mpeg">`;
        await player.load();
        await player.play();
    }

}