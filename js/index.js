/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description Proyecto Final JavaScript - Cotizador de Impresiones - Coderhouse
 * 
 * History
 *  1.0.0 - 2022-02-23 : Juan Gaudino : Mostrar en consola si el alumno esta aprobado o no
 *  1.0.1 - 2022-03-30 : Juan Gaudino : 2do. Entrega Proyecto Final JavaScript - Clase 11 - Coderhouse
 */

// Declaración de valores unitarios y variables

const unitarioPAI = 1200;
const unitarioCPM = 200;
const unitarioSextuple = 500;
const metroCuadradoFront = 450;
const metroCuadradoBack = 730;
const metroCuadradoVinilo = 300;
const metrosCuadrados = (ancho, alto) => {
    return ancho * alto * cantidad;
}
const extras = (demasia) => {
    return (demasia/100) * cantidad;
}

let material = "";
let cantidad = 0;
let precio = 0;

// Declaración de funciones


calcularPrecio = (material, extras, metrosCuadrados) => {
    let precio = 0;
    switch (material) {
        case 'PAI':
            precio = (cantidad + extras) * unitarioPAI;
            break;
        case 'CPM':
            precio = extras * unitarioCPM;
            break;
        case 'Front':
            precio = metrosCuadrados * metroCuadradoFront;
            break;
        case 'Back':
            precio = metrosCuadrados * metroCuadradoBack; 
            break;
        case 'Vinilo':
            precio = metrosCuadrados * metroCuadradoVinilo;
            break;
        case 'Sextuple':
            precio = extras * unitarioSextuple;
    }
    return precio;
}

// document.addEventListener("DOMContentLoaded", function() {
//     let formulario = document.getElementById("formul");
//     formulario.addEventListener("submit", function() {
//         formulario.reset();
//     });
// });

// var input = document.getElementsByClassName("enterPAI");
// input.addEventListener("keyup", function(event) {
//     event.preventDefault();
// });


//Funciones por producto

function pai() {
        let material = "PAI";
        let cantidad = document.getElementById("cantidadPAI").value;
        let demasia = document.getElementById("demasiaPAI").value;
        console.log(`Demasia es ${demasia}`);
        let extras = (demasia/100 * cantidad);
        console.log(`La cantidad del material PAI es de ${extras+cantidad}`);
        console.log(`El costo de producción de ${cantidad} PPL es de $${calcularPrecio(material, cantidad, extras)}`);
        document.getElementById("pai").innerHTML = `El costo de producción de ${cantidad} PPL es de $${calcularPrecio(material, cantidad, extras)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
        precio = calcularPrecio(material, cantidad, extras);
        return material;
}

function cpm() {
        let material = "CPM";
        let cantidad = document.getElementById("cantidadCPM").value;
        console.log(`El costo de producción de ${cantidad} CPM es de $${calcularPrecio(material, cantidad)}`);
        document.getElementById("cpm").innerHTML = `El costo de producción de ${cantidad} CPM es de $${calcularPrecio(material, cantidad)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
        precio = calcularPrecio(material, cantidad);
        return material;
}

function front() {
        let material = "Front";
        let cantidad = document.getElementById("cantidadFront").value;
        let ancho = document.getElementById("anchoFront").value;
        let alto = document.getElementById("altoFront").value;
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material Front son de ${metrosCuadrados}`);
        console.log(`El costo de producción de ${cantidad} Front es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        // alert(`El costo de producción de ${cantidad} Front es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        document.getElementById("front").innerHTML = `El costo de producción de ${cantidad} Front de ${ancho} x ${alto} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
}

function back () {
        let material = "Back";
        let cantidad = document.getElementById("cantidadBack").value;
        let ancho = document.getElementById("anchoBack").value;
        let alto = document.getElementById("altoBack").value;
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material Back son de ${metrosCuadrados}`);
        console.log(`El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        // alert(`El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        document.getElementById("back").innerHTML = `El costo de producción de ${cantidad} Back de ${ancho} x ${alto} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
}

function vinilo () {
    let material = "Vinilo";
    let cantidad = document.getElementById("cantidadVinilo").value;
    let ancho = document.getElementById("anchoVinilo").value;
    let alto = document.getElementById("altoVinilo").value;
    let metrosCuadrados = (ancho * alto * cantidad);
    console.log(`Los metros cuadrados del material Vinilo es de ${metrosCuadrados}`);
    console.log(`El costo de producción de ${cantidad} Vinilo es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
    // alert(`El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
    document.getElementById("vinilo").innerHTML = `El costo de producción de ${cantidad} Vinilo de ${ancho} x ${alto} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}. <br> Click para cotizar de nuevo <br>`;
    // document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
    // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
    precio = calcularPrecio(material, cantidad, metrosCuadrados);
}

function sextuple() {
    let material = "Sextuple";
    let cantidad = document.getElementById("cantidadSextuple").value;
    console.log(`El costo de producción de ${cantidad} sextuples es de $${calcularPrecio(material, cantidad)}`);
    document.getElementById("sextuple").innerHTML = `El costo de producción de ${cantidad} sextuples es de $${calcularPrecio(material, cantidad)}. <br> Click para cotizar de nuevo <br>`;
    // document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
    // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
    precio = calcularPrecio(material, cantidad);
    return material;
}


// Creación de objetos

class Producto {
    constructor(titulo, precio, cantidad) {
        this.titulo = titulo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const PRODUCTO = new Producto(material, calcularPrecio, cantidad);



const agregarAlCarrito = (producto) => {
      carrito.push(producto);
  };


const carrito = [];
const arrayProductos = [
    { id: 1, titulo: material, precio: precio, cantidad},
    // { id: 2, titulo: material2, precio: precio2, cantidad2},
];

arrayProductos.forEach(producto => {
    agregarAlCarrito(producto);
});

console.log(carrito);



