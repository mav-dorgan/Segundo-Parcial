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
            <p>milisegundos</p>
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
let totales = [];

formDos.addEventListener ('submit', function(e) {
    e.preventDefault ();

    if (verificarDatos () == false) {
        alert ('los campos no pueden quedar vacios y los datos deben ser validos');
    } else {
        guardarObras ();
        agregarResultados();
        bloquearFormDos ();
        formTres.innerHTML += `<button type="reset" id="reiniciar">Reiniciar</button>`
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
    obras = []
    for (let i=1; i <= cantidadObras.value; i++) {
        let obra = {
            nombreObra: document.querySelector(`#nombreObra${i}`).value,
            duracion: Number(document.querySelector (`#duracion${i}`).value),
            peso: Number(document.querySelector (`#peso${i}`).value),
        };
        obras.push(obra);
    }
}