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