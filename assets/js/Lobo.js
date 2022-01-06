import Animal from './Animal.js'

export default class Lobo extends Animal {

    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Lobo.jpg', comentarios, 'assets/sounds/Aullido.mp3')
    }

    async aullar() {
        const player = document.getElementById('player');
        player.innerHTML = `<source src="${this.sonido}" type="audio/mpeg">`;
        await player.load();
        await player.play();
    }

}