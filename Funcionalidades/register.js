// funcion de activar el register 

function registro() {

    document.getElementById('registro').style.display= 'block';
    document.getElementById('registro').style.textAlign= 'center';

}


// Funciones de validacion

function validarRegistro() {

    let nameComplete = document.forms['registro']['nameComplete'].value;
    if(nameComplete == "") {
        alert('Ingrese el nombre completo')
        return false;
    }

    let user = document.forms["registro"]["user"].value;
    if(user == "") {
        alert('Ingresa tu usuario');
        return false;
    } else if (user.length<=6) {
        alert("Escribe tu usuario completo")
    }

    let email = document.forms["registro"]["email"].value;
    if(email == "") {
        alert("Ingresa tu email");
        return false;
    } else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email) ) {
        console.log("La dirección de email " + email + " es correcta!.");
    } else {
        alert("La dirección de email es incorrecta!.");
    }

    let password = document.forms['registro']['password'].value;

    if(password == "") {
        alert('Ingresa tu contraseña');
        return false;
    }
}