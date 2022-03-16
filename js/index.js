/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description 1er. Entrega Proyecto Final JavaScript - Clase 03 - Coderhouse
 * 
 * History
 *  1.0.0 - 2022-02-23 : Juan Gaudino : Mostrar en consola si el alumno esta aprobado o no
 */

// Declaración de valores unitarios

const unitarioPAI = 1200;
const unitarioCPM = 200;
const metroCuadradoFront = 450;
const metroCuadradoBack = 730;
const metrosCuadrados = (ancho, alto) => {
    return ancho * alto * cantidad;
}


// Declaración de funciones


calcularPrecio = (material, cantidad, metrosCuadrados) => {
    let precio = 0;
    switch (material) {
        case 'PAI':
            precio = cantidad * unitarioPAI;
            break;
        case 'CPM':
            precio = cantidad * unitarioCPM;
            break;
        case 'Front':
            precio = metrosCuadrados * metroCuadradoFront;
            break;
        case 'Back':
            precio = metrosCuadrados * metroCuadradoBack;
            break;
    }
    return precio;
}


// Solicitud de datos

let material = solicitarMaterial();
let material2 = confirm("Desea agregar otro material?");
if (material2 == true) {
    material = solicitarMaterial();
}


function solicitarMaterial() {
    let material = prompt('Ingrese el material: PAI, CPM, Front o Back');
    if (material === 'PAI' || material === 'CPM') {
        cantidad = prompt(`Ingrese la cantidad de ${material} a producir`);
        console.log(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad)}`);
        alert(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad)}`);
        document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
        document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
        precio = calcularPrecio(material, cantidad);
    }
    else if (material === 'Front' || material === 'Back') {
        ancho = prompt(`Ingrese el ancho del material ${material}`);	
        alto = prompt(`Ingrese el alto del material ${material}`);
        cantidad = prompt(`Ingrese la cantidad de ${material}`);
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material ${material} son de ${metrosCuadrados}`);
        console.log(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        alert(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
        document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
    }
    return material;
}


// Creación de objetos

class Producto {
    constructor(titulo, precio, cantidad) {
        this.titulo = titulo;
        this.precio = precio;
        this.cantidad = cantidad;
        // this.agregarAlCarrito = function () {
        //     carrito.push(this);
        // console.log(`${this.titulo} agregado al carrito`);
        };
// }
}

const PRODUCTO = new Producto(material, calcularPrecio, cantidad);

// Array de Productos

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];
const arrayProductos = [
    { id: 1, titulo: material, precio: precio, cantidad},
    { id: 2, titulo: material, precio: precio, cantidad},
];

agregarAlCarrito(arrayProductos[0, 1]);
console.log(carrito);

arrayProductos.forEach(productoEnCarrito => {
    console.log(productoEnCarrito)
});
    
// agregarAlCarrito(arrayProductos[0]);
// console.log(carrito);


// console.log("Esto devuelve el length del array: " + arrayProductos.length);
// for (let i = 0; i < arrayProductos.length; i++) {
//     console.log(arrayProductos[i]);
// }

// Carrito

// carrito.push(agregarAlCarrito);
// alert(`${PRODUCTO.titulo} agregado al carrito`);
// console.log(carrito);

// const indiceDelProducto = carrito.indexOf(PRODUCTO);
// console.log(indiceDelProducto);




