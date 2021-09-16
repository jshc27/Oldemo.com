// Funcion para la busqueda del material 

function searchClass() {

    const input = document.getElementById('filter').value.toUpperCase();
    const cardsContainer = document.getElementById('list-cards');
    console.log(cardsContainer);

    const cards = cardsContainer.getElementsByClassName('card');
    console.log(cards);

    for(let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".container-title h3.title");
        console.log(title);

        if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}