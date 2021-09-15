
// funcion para activar el login

function login() {

    document.getElementById('login').style.display = 'block';
    document.getElementById('login').style.textAlign = 'center';
    console.log('funciona');

}


// funcion validacion

function validar() {

    let nameComplete = document.forms["login"]["nameComplete"].value;
    if(nameComplete == "") {
        alert('Ingresa tu usuario');
        return false;
    } else if (nameComplete.length<=6) {
        alert("Escribe tu nombre completo")
    }

    let password = document.forms['login']['password'].value;
    if(password == "") {
        alert('Ingresa tu contraseña');
        return false;
    } else if( password.length<=6) {
        alert("Ingresa mas de 6 caracteres");
    }
}