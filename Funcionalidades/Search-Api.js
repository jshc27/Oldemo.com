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


// FAKE API

const url = "https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed";

fetch(url)
.then( response => response.json())
.then(data =>{
    console.log(data);

    let image1 = document.getElementById('image1');
    image1.innerHTML = `<img width="100px" height="100px" src='${data[0].cover}'/>`;

    let title1 = document.getElementById('title1');
    title1.innerHTML = `${data[0].title}`;

    let text1 = document.getElementById('text1');
    text1.innerHTML = `${data[0].content_short}`;

})

