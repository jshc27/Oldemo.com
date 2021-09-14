
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
}