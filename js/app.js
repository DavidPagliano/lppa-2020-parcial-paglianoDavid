window.onload = enviarDatos;

function enviarDatos() {
    document.getElementById('Enviar').addEventListener('click', validar, false);
}

function validarNombre() {
    var nombre = document.getElementById('Name');
    var errorNombre = document.getElementById('errorName');
    if (nombre.value.length > 3) {
        errorNombre.innerHTML = "Debe ingresar un nombre con más de 3 caracteres";
        return false;
    } else if (nombre == '' || nombre == null) {
        errorNombre.innerHTML = 'Debe ingresar un nombre'
        return false;
    } else {
        errorNombre.innerHTML = ''
        return true
    }
}

function validarApellido() {
    var apellido = document.getElementById('last');
    var errorApellido = document.getElementById('errorLast');
    /*if (apellido.value.length > 3) {
        errorApellido.innerHTML = "Debe ingresar un apellido con más de 3 caracteres";
        return false;
    }else */ if (apellido == '') {
        errorApellido.innerHTML = 'Debe ingresar un apellido'
        return false;
    } else {
        errorApellido.innerHTML = ''
        return true
    }
}

function validarEmail() {
    var email = document.getElementById('Email');
    var errorEmail = document.getElementById('errorEmail');
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        errorEmail.innerHTML = 'Debe ingresar un email valido'
        return false;
    }
}

function validarEdad() {
    var edad = document.getElementById('Year');
    var errorEdad = document.getElementById('errorYear');
    if (edad.value > 0 && edad.Value < 100) {
        errorEdad.innerHTML = 'Debe ingresar un numero menor que 100 y mayor que 0'
    } else {
        errorEdad.innerHTML = '';
        return true;
    }
}

function validarRadio() {
    var hombre = document.getElementById('Man');
    var mujer = document.getElementById('Women');
    var otros = document.getElementById('Others');
    var errorRadio = document.getElementById('errorRadio');

    var seleccionado = false;
    for (var i = 0; i < hombre.length; i++) {
        if (hombre[i].checked) {
            seleccionado = true;
            break;
        }
    }
    for (var i = 0; i < mujer.length; i++) {
        if (mujer[i].checked) {
            seleccionado = true;
            break;
        }
    }
    for (var i = 0; i < otros.length; i++) {
        if (otros[i].checked) {
            seleccionado = true;

            break;
        }
    }

    if (!seleccionado) {
        errorRadio.innerHTML = 'Debe seleccionar una opcion';
        return false;
    }
}

function validarCheck() {
    var Musica = document.getElementById('Music');
    var Deporte = document.getElementById('Deports');
    var Juego = document.getElementById('Games');
    var Tecnologia = document.getElementById('Tecnology');
    var errorCheck = document.getElementById('errorCheck');

    if (!Musica.checked) {
        return false;
    } else if (!Deporte.checked) {
        return false;
    } else if (!Juego.checked) {
        return false;
    } else if (!Tecnologia.checked) {
        return false;
    } else {
        errorCheck.innerHTML = 'Seleccione una opcion'
    }
}

function validarComentario() {
    var comentario = document.getElementById('Commentary');
    var errorComentario = document.getElementById('errorCommentary');
    if (comentario.nodeValue.length > 3) {
        errorComentario.innerHTML = "Debe ingresar un nombre con más de 3 caracteres";
    } else if (comentario.nodeValue === '') {
        errorComentario.innerHTML = 'Debe ingresar un nombre'
    } else {
        errorComentario.innerHTML = ''
        return true
    }
}

function validar() {
    var ConsolaNombre = document.querySelector('#Name').nodeValue;
    var ConsolaApellido = document.querySelector('#Last').nodeValue;
    var ConsolaEmail = document.querySelector('#Email').nodeValue;
    var ConsolaEdad = document.querySelector('#Year').nodeValue;
    var ConsolaHombre = document.querySelector('#Man').nodeValue;
    var ConsolaMujer = document.querySelector('#Women').nodeValue;
    var ConsolaOtros = document.querySelector('#Others').nodeValue;
    var ConsolaMusica = document.querySelector('#Music').nodeValue;
    var ConsolaDeporte = document.querySelector('#Deports').nodeValue;
    var ConsolaJuego = document.querySelector('#Games').nodeValue;
    var ConsolaTecnologia = document.querySelector('#Tecnology').nodeValue;
    var ConsolaComentario = document.querySelector('#Commentary').nodeValue;
    if (validarNombre() && validarApellido() && validarEmail() && validarEdad() && validarRadio() && validarCheck() && validarComentario() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        console.log('Nombre', ConsolaNombre);
        console.log('Apellido', ConsolaApellido);
        console.log('Email', ConsolaEmail);
        console.log('Edad', ConsolaEdad);
        console.log('Hombre', ConsolaHombre);
        console.log('Mujer', ConsolaMujer);
        console.log('Otros', ConsolaOtros);
        console.log('Musica', ConsolaMusica);
        console.log('Deporte', ConsolaDeporte);
        console.log('Juego', ConsolaJuego);
        console.log('Tecnologia', ConsolaTecnologia);
        console.log('Comentario', ConsolaComentario);
        return false;
    } else {

        return true;
    }
}