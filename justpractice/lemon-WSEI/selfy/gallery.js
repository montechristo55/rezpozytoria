// wypisanie zawartości do konsoli
// console.log("hello");

// pobieranie elementów z struktury DOM dokumentu
// let divText = document.getElementsByClassName('text');

// pobranie elementu po klasie css
let divText = document.querySelector('.text')
// pobranie elementu po nazwie znacznika
// let divText = document.querySelector('div')
// let divText = document.querySelector('#header')

// zmiana zawartości elementu
// divText.innerHTML += "<h1>Hello World!</h1>"
// divText.innerHTML = divText.innerHTML + "<h1>Hello World!</h1>"
// divText.innerText = "<h1>Hello World!</h1>"

// zmiana styli elementu
let subheader = document.querySelector('.aleo')
subheader.style.background = '#fff'
subheader.style.paddingRight = '50px';

// zmiana klas css elementu
let header4 = document.querySelector('h4')
// dodanie klasy
header4.classList.add('bigger')
header4.classList.add('animate')
// usuwanie klasy
header4.classList.remove('bigger')
// przełączanie klasy
header4.classList.toggle('bigger')

// pobranie button-a
let btnKlik = document.querySelector('#nieklik')
// dodanie obsługi zdarzenia click na button#nieklik
btnKlik.addEventListener('click', onBtnKlikClick)

function onBtnKlikClick(event) {
    // console.log(event)
    header4.classList.toggle('bigger')
}


// lightbox


// // TYLKO DLA JEDNEGO ZDJĘCIA
// pobierz zdjęcie
// let img = document.querySelector('.lightbox')
// // dodaj obsługę kliknięcia w zdjęcie
// img.addEventListener('click', showLightbox)
// // funkcja pokazująca lightbox-a
// function showLightbox(event) {
//     let lightboxDiv = document.querySelector('#lightbox')
//     lightboxDiv.style.display = "flex"
// }
// DLA WSZYSTKICH ZDJĘĆ O KLASIE .LIGHTBOX
let imgs = document.querySelectorAll('.lightbox')

for (let img of imgs) {
    img.addEventListener('click', showLightbox)
}
// dodaj obsługę kliknięcia w zdjęcie
// funkcja pokazująca lightbox-a
function showLightbox(event) {
    let lightboxDiv = document.querySelector('#lightbox')
    lightboxDiv.style.display = "flex"
    // pobranie adresu zdjęcia z klikniętego znacznika img
    let imgSrc = event.target.src
    // pobranie znacznika img z lightboxa
    let lightboxImg = document.querySelector('#lightbox-img')
    // wpisanie nowego adresu do img w lightboxie
    lightboxImg.src = imgSrc
}


// obsługa zamykania lightbox-a
let lightboxDiv = document.querySelector('#lightbox')
// zapisz się na kliknięcie w #lightbox
lightboxDiv.addEventListener('click', hideLightbox)
// funkcja zamykająca lightbox
function hideLightbox(event) {
    lightboxDiv.style.display = "none"
}





