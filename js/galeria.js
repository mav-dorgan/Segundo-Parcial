//Array de objetos con los datos de cada album y su imagen para la galeria de fotos

let albums = [
    {
        titulo: 'Landfall',
        año: '2018',
        img: 'img/galeria/galeria-1.jpg'
    },
    {
        titulo: 'Heart of a Dog',
        año: '2015',
        img: 'img/galeria/galeria-2.jpg'
    },
    {
        titulo: 'Homeland',
        año: '2010',
        img: 'img/galeria/galeria-3.jpg'
    },
    {
        titulo: 'Live in New York',
        año: '2002',
        img: 'img/galeria/galeria-4.jpg'
    },
    {
        titulo: 'Life on a String',
        año: '2001',
        img: 'img/galeria/galeria-5.jpg'
    },
    {
        titulo: 'Talk Normal: The Laurie Anderson Anthology',
        año: '2000',
        img: 'img/galeria/galeria-6.jpg'
    },
]

//Capturo el div del HTML y recorro el array con una función que crea un div en el HTML con los contenidos de cada objeto.

let galeria = document.querySelector ('#galeria');

for (i=0; i<albums.length; i++) {
    agregarTarjeta ();
}

function agregarTarjeta () {
    let tarjeta = `
    <div class="tarjeta">
    <p>
        ${albums[i].titulo} <br>
        ${albums[i].año}
    </p>
    <img src="${albums[i].img}" alt="${albums[i].titulo}">
    </div>
    `;
    galeria.innerHTML += tarjeta;
}

//Para mi interaccion cree un botón que permita agrandar las imágenes para verlas individualmente y otro que las achique al tamaño original.
//Capturo los botones las imagenes y el texto del html

let botonAchicar = document.querySelector('#achicar');
let botonAgrandar = document.querySelector('#agrandar');
let tarjeta = document.querySelectorAll ('.tarjeta');

// Funcionalidad de los botones para agrandar y achicar las imagenes

botonAgrandar.addEventListener ('click', function (e) {
    e.preventDefault();
    tarjeta.forEach (function(tarjeta) {
       tarjeta.style.width = "50%";
    })
})

botonAchicar.addEventListener ('click', function (e){
    e.preventDefault ();
    tarjeta.forEach (function(tarjeta) {
       tarjeta.style.width = "30%";
    })
})
