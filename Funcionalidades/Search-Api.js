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


    // card1 

    let image1 = document.getElementById('image1');
    image1.innerHTML = `<img width="100px" height="100px" src='${data[0].cover}'/>`;

    let title1 = document.getElementById('title1');
    title1.innerHTML = `${data[0].title}`;

    let text1 = document.getElementById('text1');
    text1.innerHTML = `${data[0].content_short}`;


    //card2

    let image2 = document.getElementById('image2');
    image2.innerHTML =  `<img width="100px" height="100px" src='${data[1].cover}'/>`;

    let title2 = document.getElementById('title2');
    title2.innerHTML =  `${data[1].title}`;

    let text2 = document.getElementById('text2');
    title2.innerHTML =  `${data[1].content_short}`;

    //card3

    let image3 = document.getElementById('image3');
    image3.innerHTML =  `<img width="100px" height="100px" src='${data[2].cover}'/>`;

    let title3 = document.getElementById('title3');
    title2.innerHTML =  `${data[2].title}`;

    let text3 = document.getElementById('text3');
    title3.innerHTML =  `${data[2].content_short}`;

     //card4

    let image4 = document.getElementById('image4');
    image4.innerHTML =  `<img width="100px" height="100px" src='${data[3].cover}'/>`;

    let title4 = document.getElementById('title4');
    title4.innerHTML =  `${data[3].title}`;

    let text4 = document.getElementById('text4');
    title4.innerHTML =  `${data[3].content_short}`;


});

