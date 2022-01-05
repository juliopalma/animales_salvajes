import Leon from './Leon.js'

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
            animal = new Leon(selectAnimal, edad_animal, srcAnimal, comentario, sonido);

        } else if (selectAnimal == "Lobo") {

            srcAnimal = "assets/imgs/Lobo.jpg";
            sonido = "assets/sounds/Aullido.mp3";

        } else if (selectAnimal == "Oso") {

            srcAnimal = "assets/imgs/Oso.jpg";
            sonido = "assets/sounds/Gruñido.mp3";

        } else if (selectAnimal == "Serpiente") {

            srcAnimal = "assets/imgs/Serpiente.jpg";
            sonido = "assets/sounds/Siseo.mp3";

        } else if (selectAnimal == "Aguila") {

            srcAnimal = "assets/imgs/Aguila.png";
            sonido = "assets/sounds/Chillido.mp3";

        }

        $("#Animales").append(
            `<div class="card" style="margin-right: 20px; width: 200px; margin-left: 20px;">
            <img src="${srcAnimal}" class="card-img-top" alt="...">
            <div class="card-body">
            <audio src="${sonido}" id="sonidoDeAnimal" preload="none" controls style="width: -webkit-fill-available;"></audio>
            </div>
          </div>`
        );

    }

    $('#comentarios').val('');
    $("#animal").prop("selectedIndex", 0);
    $("#edad").prop("selectedIndex", 0);
});