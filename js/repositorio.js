// armado del ejercicio pagina "Repositorio"

//Capturo todos los elementos del form y los almaceno en variables

let formUno = document.querySelector ('#formUno')
let cantidadObras = document.querySelector ('#cantidadObras');
let transferencia = document.querySelector ('#transferencia');
let costoMensual = document.querySelector ('#costoMensual');
let botonSiguiente = document.querySelector ('#siguiente');
let pasoDos = document.querySelector ('#pasoDos');
let formDos = document.querySelector ('#formDos');
let resultados = document.querySelector ('#resultados');
let reiniciar = document.querySelector ('#reiniciar');

/*---------------
PRIMER FORM
---------------*/

/*Al apretar el boton "siguiente paso" se validan todos los datos,
se despliega un nuevo form para llenar con los datos de la cantidad de obras ingresadas,
y se desabilitan los campos del primer formulario, sin que se borre el valor ingresado*/

botonSiguiente.addEventListener ('click', function(e) {
    e.preventDefault ();
    if (chequearDatos() == false) {
        alert ('los campos no pueden quedar vacios y los datos deben ser validos');
    } else {
        pasoDos.innerText = 'Ingrese el nombre de la obra, la duracion en minutos y el peso del archivo';

        for (let i=1; i <= cantidadObras.value; i++) {
        agregarObra (i);
    }
        bloquearForm ();
        formDos.innerHTML += `<button type="submit" id="calcular">Calcular</button>`;
    }
    
})

//Validacion de los datos

function chequearDatos () {
    if (cantidadObras.value == ''|| Number(cantidadObras.value) <= 0) {
    return false };

    if (transferencia.value == '' || Number(transferencia.value) <= 0) {
    return false };

    if (costoMensual.value == '' || Number(costoMensual.value) <= 0) {
    return false };

    return true;
}

function agregarObra (i) {
    formDos.innerHTML += 
            `
            <fieldset>
            <legend>Obra ${i}</legend>
            <label for ="nombreObra${i}">Nombre de la obra</label>
            <input type="text" name="nombreObra${i}" id="nombreObra${i}">
            <label for="duracion${i}">Duración</label>
            <input type="number" name="duracion${i}" id="duracion${i}">
            <p>minutos</p>
            <label for="peso${i}">Peso del archivo</label>
            <input type="number" name="peso${i}" id="peso${i}">
            <p>MB</p>
            </fieldset>
            `;
}
function bloquearForm () {
    cantidadObras.disabled = true;
    transferencia.disabled = true;
    costoMensual.disabled = true;
    botonSiguiente.disabled = true;
}


/*---------------
SEGUNDO FORM
---------------*/

/*Al apretar el boton "calcular" se verifican los datos,
se realizan todos los calculos que se quieren conocer y se muestran los resultados al usuario,
se deshabilitan los campos sin eliminar el valor ingresado
se crea un boton de reiniciar*/

let obras = [];

formDos.addEventListener ('submit', function(e) {
    e.preventDefault ();

    if (verificarDatos () == false) {
        alert ('los campos no pueden quedar vacios y los datos deben ser validos');
    } else {
        guardarObras ();
        agregarResultados();
        bloquearFormDos ();
        reiniciar.innerHTML += `<button type="reset" id="botonReiniciar">Reiniciar</button>`;
    }
})

//Verifico los datos

function verificarDatos (){
    for (let i=1; i <= cantidadObras.value; i++) {

        let nombreObra = document.querySelector(`#nombreObra${i}`).value;
        let duracion = document.querySelector (`#duracion${i}`).value;
        let peso = document.querySelector (`#peso${i}`).value;

        if (nombreObra == '') {
            return false;
        }
        if (duracion == '' || (Number(duracion) <= 0)) {
            return false;
        }
        if (duracion == '' || (Number(peso) <= 0)) {
            return false;
        }
    }
    return true; 
}

// capturo los datos ingresados en el segundo form y lo guardo en un Array de objetos

function guardarObras () {
    obras = [];
    for (let i=1; i <= cantidadObras.value; i++) {
        let obra = {
            nombreObra: document.querySelector(`#nombreObra${i}`).value,
            duracion: Number(document.querySelector (`#duracion${i}`).value),
            peso: Number(document.querySelector (`#peso${i}`).value),
        };
        obras.push(obra);
    }
}

//Ya que se deben hacer calculos con las duraciones, primero las guardo todas en un array para facilitar los calculos.

let duraciones = [];

function agregarDuracion () {
    duraciones = [];
    for (let i=0; i < obras.length; i++) {
        duraciones.push (obras[i].duracion);     
    }   
    return duraciones;
}

//Creo una funcion para calcular la duracion total

function sumarDuraciones () {
    duraciones = agregarDuracion ();
    let duracionTotal = 0;
    for (let i=0; i < duraciones.length; i++) {
    duracionTotal += duraciones[i];
    }
    return duracionTotal;
}

//Creo una funcion para calcular la duracion promedio de las obras.

function calcularPromedio () {
    let promedio = sumarDuraciones()/cantidadObras.value;
    return promedio;
}

//Creo una funcion para sqaber en que posicion del array se encuentra ls obra de mayor duracion.
//no se calcula solamente el maximo ya que necesito acceder a los otros objetos de la misma posicion del array.

function encontrarMayor() {
    let maximo = duraciones [0];
    let posicion = 0;
    for (let i=0; i < duraciones.length; i++) {
        if (duraciones[i] > maximo) {
            maximo = duraciones[i];
            posicion = [i];
        }
    }
    return posicion;
}

//Sabiendo la posicion de la obra de maxima duracion, calculo con su peso el tiempo de transferencia necesario para decargarla.

let posicion = encontrarMayor ();

function calcularTiempo () {
    let tiempo = obras[posicion].peso * transferencia.value;
    return tiempo;
}

//Creo una funcion para calcular el presupuesto anual

function costoTotal () {
    let precioMensual = 0
    for (let i=0; i< obras.length; i++) {
        precioMensual += obras[i].peso * costoMensual.value;
    }
    let precioAnual = precioMensual * 365;
    return precioAnual;
}

//Agrego todos los resultados obtenidos a mi HTML para que se muestren

function agregarResultados () {
    resultados.innerHTML += `
    <p>La duración total de las obras es de <strong>${sumarDuraciones()} minutos</strong>. <br>
    La duración promedio es de <strong>${calcularPromedio()} minutos</strong>. <br>
    La obra de mayor duración es <strong>${obras[posicion].nombreObra}</strong> y se necesitan <strong>${calcularTiempo ()} milisegundos</strong> para descargarla. <br>
    El presupuesto necesario para mantener funcionando el repositorio durante un año es de <strong>$${costoTotal ()}</strong>.
    </p>
    `;
}

//Bloqueo el paso dos del form

function bloquearFormDos () {
    let inputs = formDos.querySelectorAll('input');
    let botonCalcular = document.querySelector ('#calcular')
    inputs.forEach (function(input) {
        input.disabled=true;
    });
    botonCalcular.disabled=true;
}

// Agrego un boton que refresque la página
//Seria mejor hacerlo con form.submit (); pero no fue visto en clase

reiniciar.addEventListener ('reset', function () {
    location.reload ();
})
