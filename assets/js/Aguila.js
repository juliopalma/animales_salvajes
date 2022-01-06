import Animal from './Animal.js'

export default class Aguila extends Animal {

    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Aguila.png', comentarios, 'assets/sounds/Chillido.mp3')
    }

    async chillar() {
        const player = document.getElementById('player');
        player.innerHTML = `<source src="${this.sonido}" type="audio/mpeg">`;
        await player.load();
        await player.play();
    }

}