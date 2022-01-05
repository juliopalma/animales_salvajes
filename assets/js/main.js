// const selectAnimal = $("#animal").val();

// if (selectAnimal == "Leon") {

// } else if (selectAnimal == "Lobo") {

// } else if (selectAnimal == "Oso") {

// } else if (selectAnimal == "Serpiente") {

// } else if (selectAnimal == "Aguila") {

// }

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

// async function iniciar() {

//     const data = await fetch('data/animales.json');
//     const data2 = await data.json();
//     const animales = data2.animales;

//     $('#animal').on('change', function() {

//         const nombre_animal = $('#animal').val();

//         const animal = animales.find(an => an.name == nombre_animal);

//         $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`);

//     });

//     console.log(animales);

// };

// iniciar();

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
    }
});