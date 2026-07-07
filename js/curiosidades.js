// Creo una funcion para generar numero al azar entre el 1 y el 10
let datoCurioso = document.querySelector ('#dato')

function generarNumero (){ 
    let resultado = Math.floor((Math.random()*10)+1);
    return resultado
}
let numero = generarNumero();

//la invoco una vez para que se genere un dato por default

mostrarDato (numero);

// con una condicional modifico el contenido del parrafo para que diga un dato curioso diferente

function mostrarDato (numero) {
    switch (numero) {
    case 1: 
        datoCurioso.innerHTML = 'Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.';
        break;
    case 2:
        datoCurioso.innerHTML = 'Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.';
        break;
    case 3:
        datoCurioso.innerHTML = 'Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.';
        break;
    case 4:
        datoCurioso.innerHTML = 'Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.';
        break;
    case 5:
        datoCurioso.innerHTML = 'En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.';
        break;
    case 6:
        datoCurioso.innerHTML = 'Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.';
        break;
    case 7:
        datoCurioso.innerHTML = 'Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.';
        break;
    case 8:
        datoCurioso.innerHTML = 'Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.';
        break;
    case 9:
        datoCurioso.innerHTML = 'Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.';
        break;
    case 10:
        datoCurioso.innerHTML = 'Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes.';
        break;
    } 
}

// Capturo el boton para generar un nuevo dato

let botonGenerar = document.querySelector('#nuevo')

botonGenerar.addEventListener ('click', function() {
    let nuevoNumero = generarNumero ();
    mostrarDato (nuevoNumero);
})
