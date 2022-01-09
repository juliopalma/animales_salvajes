import Leon from './Leon.js'
import Lobo from './Lobo.js'
import Oso from './Oso.js'
import Serpiente from './Serpiente.js'
import Aguila from './Aguila.js'


(async function() {
    const data = await fetch('data/animales.json');
    const data2 = await data.json();
    const animales = data2.animales;

    $('#animal').on('change', function() {

        const nombre_animal = $('#animal').val();

        const animal = animales.find(an => an.name == nombre_animal);

        $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`);

    });

    console.log(animales);

})(); //IIFE


let arrayAnimales = [];

$('#btnRegistrar').on('click', function() {

    const nom_animal = $("#animal").val();
    const edad_animal = $("#edad").val();
    const comentario = $("#comentarios").val().trim();

    const errors = [];

    if (nom_animal == null) {
        errors.push("Falta seleccionar un Animal ");
    }

    if (edad_animal == null) {
        errors.push("Falta seleccionar los años de edad del animal");
    }

    if (comentario == "") {
        errors.push("Falta ingresar un comentario");
    }

    if (errors.length > 0) {
        const errores = errors.join(' - ');
        alert(errores);

    } else {

        let srcAnimal;
        let sonido;
        let animal;

        const selectAnimal = $("#animal").val();

        if (selectAnimal == "Leon") {
            srcAnimal = "assets/imgs/Leon.png";
            sonido = "assets/sounds/Rugido.mp3";
            animal = new Leon(selectAnimal, edad_animal, comentario);

        } else if (selectAnimal == "Lobo") {

            srcAnimal = "assets/imgs/Lobo.jpg";
            sonido = "assets/sounds/Aullido.mp3";
            animal = new Lobo(selectAnimal, edad_animal, comentario);

        } else if (selectAnimal == "Oso") {

            srcAnimal = "assets/imgs/Oso.jpg";
            sonido = "assets/sounds/Gruñido.mp3";
            animal = new Oso(selectAnimal, edad_animal, comentario);

        } else if (selectAnimal == "Serpiente") {

            srcAnimal = "assets/imgs/Serpiente.jpg";
            sonido = "assets/sounds/Siseo.mp3";
            animal = new Serpiente(selectAnimal, edad_animal, comentario);

        } else if (selectAnimal == "Aguila") {

            srcAnimal = "assets/imgs/Aguila.png";
            sonido = "assets/sounds/Chillido.mp3";
            animal = new Aguila(selectAnimal, edad_animal, comentario);

        }

        arrayAnimales.push(animal);
        dibAnimales(arrayAnimales);

    }

    $('#comentarios').val('');
    $("#animal").prop("selectedIndex", 0);
    $("#edad").prop("selectedIndex", 0);
    $('#preview').css('background-image', ``);
});

function dibAnimales(animales) {

    $("#Animales").html("");

    for (let i = 0; i < animales.length; i++) {
        let animal = animales[i];

        $("#Animales").append(
            `<div class="card" style="margin-right: 20px; width: 200px; margin-left: 20px;">
            <img src="${animal.img}" data-i="${i}" class="card-img-top imganimal" alt="..." onclick="mostrarModal('${i}')">
            <div class="card-body">
            
            <button onclick="sonar(${i})" id="btnSonar" style="background-image: url(assets/imgs/audio.svg);"></button>
            
            </div>
          </div>`
        );
    }

    // $(".imganimal").on("click", mostrarModal)
    $(".imganimal").on("click", mostrarModal)


}

window.sonar = (pos) => {
    let animal = arrayAnimales[pos];

    if (animal.nombre == "Oso") {
        animal.gruñir();
    } else if (animal.nombre == "Leon") {
        animal.rugir();
    } else if (animal.nombre == "Serpiente") {
        animal.sisear();
    } else if (animal.nombre == "Lobo") {
        animal.aullar()
    } else if (animal.nombre == "Aguila") {
        animal.chillar();
    }

}

function mostrarModal(ev) {

    // const i = ev.target.dataset.i;
    $("#exampleModal .modal-body").html();
    $("#exampleModal").modal("show");

}