import Animal from './Animal.js'

export default class Leon extends Animal {

    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Leon.png', comentarios, 'assets/sounds/Rugido.mp3')
    }

    async rugir() {
        const player = document.getElementById('player');
        player.innerHTML = `<source src="${this.sonido}" type="audio/mpeg">`;
        await player.load();
        await player.play();
    }

}