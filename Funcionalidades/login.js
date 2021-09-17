
// funcion para activar el login

function login() {

    document.getElementById('login').style.display = 'block';
    document.getElementById('login').style.textAlign = 'center';
    document.getElementById('login').style.position = 'absolute';
    document.getElementById('login').style.zIndex = '1';
    console.log('funciona');

}


// funcion validacion

function validarLogin() {

    let user = document.forms["login"]["user"].value;
    if(user == "") {
        alert('Ingresa tu usuario');
        return false;
    } else if (user.length<=6) {
        alert("Escribe tu usuario completo")
    }

    let password = document.forms['login']['password'].value;
    if(password == "") {
        alert('Ingresa tu contraseña');
        return false;
    } else if( password.length<=6) {
        alert("Ingresa mas de 6 caracteres");
    }
}