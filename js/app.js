var nombre = document.getElementById('Name');
var apellido = document.getElementById('last');
var email = document.getElementById('Email');
var edad = document.getElementById('Year');
var argentina = document.getElementById('Argentina');
var brasil = document.getElementById('Brasil');
var chile = document.getElementById('Chile');
var paraguay = document.getElementById('Paraguay');
var comentario = document.getElementById('Commentary');

/*Variables de error*/
var errorNombre = document.getElementById('erorName');
var errorApellido = document.getElementById('errorLast');
var errorEmail = document.getElementById('errorEmail');
var errorEdad = document.getElementById('errorYear');
var errorRadio = document.getElementById('errorRadio');
var errorCheck = document.getElementById('errorCheck');
var errorMenu = document.getElementById('errorMenu');
var errorComentario = document.getElementById('errorCommentary');


var form = document.getElementById('Formulario');
form.addEventListener('submit', function (evt) {
    console.log('Enviando formulario...');
    evt.preventDefault();

    var mensajeError = [];

    /*Validar nombre*/
    if (nombre === null || nombre === "") {
        errorNombre.innerHTLM = "Ingrese un nombre";
    } else if (nombre.length < 3) {
        errorNombre.innerHTLM = 'El nombre del usario dener tener al menos 3 caracteres';
    } else {
        errorNombre.innerHTLM = '';
    }

    /*Validar apellido*/
    if (apellido === null || nombre === "") {
        errorApellido.innerHTLM = "Ingrese un apellido";
    } else if (apellido.length < 3) {
        errorApellido.innerHTLM = 'El apellido del usario dener tener al menos 3 caracteres';
    } else {
        errorApellido.innerHTLM = '';
    }

    /*validar email*/
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        errorEmail.innerHTLM = 'Ingrese un email valido';
    } else if (email === null || email === '') {
        errorEmail.innerHTML = 'Ingrese un emal';
    } else {
        errorEmail.innerHTML = '';
    }

    /*Validar edad*/
    if (edad < 0 || edad > 100) {
        errorEdad.innerHTML = 'Debe elegir una edad mayor a 0 y menor a 100';
    } else if (edad === null || edad === '') {
        errorEdad.innerHTML = 'Ingrese una edad';
    } else {
        errorEdad.innerHTML = '';
    }

    /*Validar check*/
    formulario = document.getElementById("Formulario");
    for (var i = 0; i < formulario.elements.length; i++) {
        var temas = formulario.elements[i];
        if (temas.type == "checkbox") {
            if (!temas.checked) {
                errorCheck.innerHTML = 'Elija una opcion';
            }
        }
    }

});