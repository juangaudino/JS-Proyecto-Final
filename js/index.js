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
const demasiaCalculada = (demasia) => {
    return (demasia/100) +1;
}
const totalPapel = (demasiaCalculada, motivos) => {
    return (demasiaCalculada * motivos * cantidad);
}

let material = "";
let cantidad = 0;
let precio = 0;

// Declaración de funciones

calcularPrecio = (material, totalPapel, metrosCuadrados) => {
    let precio = 0;
    switch (material) {
        case 'PAI':
            precio = totalPapel * unitarioPAI;
            break;
        case 'CPM':
            precio = totalPapel * unitarioCPM;
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
            precio = totalPapel * unitarioSextuple;
    }
    return precio;
}




//Funciones por producto

pai = () => {
        let material = "PAI";
        let cantidad = document.getElementById("cantidadPAI").value;
        console.log(`La cantidad de PAI es de ${cantidad}`);
        let motivos = document.getElementById("motivosPAI").value;
        console.log(`La cantidad de motivos es de ${motivos}`);
        let demasia = document.getElementById("demasiaPAI").value;
        console.log(`La demasia es de ${demasia}%`);
        let demasiaCalculada = (demasia/100) +1;
        console.log(`La demasia calculada es de ${demasiaCalculada}`);
        let totalPapel = (demasiaCalculada * motivos * cantidad);
        console.log(`El total de papel es de ${totalPapel}`);
        console.log(`El costo de producción de ${totalPapel} PPL es de $${calcularPrecio(material, totalPapel)}`);
        // document.getElementById("pai").innerHTML = `El costo de producción de ${totalPapel} PPL es de $${calcularPrecio(material, totalPapel)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
        precio = calcularPrecio(material, totalPapel);
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + totalPapel + " " + material + " es de $" + precio,
            icon: "img/" + material + ".png",
            // // // timer: 3000,,,,
            button: true,
        });
        Toastify({
            text: "Agregado al historial de cotizaciones",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        document.getElementById("formul").reset();
        return material;
}

cpm = () => {
        let material = "CPM";
        let cantidad = document.getElementById("cantidadCPM").value;
        console.log(`La cantidad de CPM es de ${cantidad}`);
        let motivos = document.getElementById("motivosCPM").value;
        console.log(`La cantidad de motivos es de ${motivos}`);
        let demasia = document.getElementById("demasiaCPM").value;
        console.log(`La demasia es de ${demasia}%`);
        let demasiaCalculada = (demasia/100) +1;
        console.log(`La demasia calculada es de ${demasiaCalculada}`);
        let totalPapel = (demasiaCalculada * motivos * cantidad);
        console.log(`El total de papel es de ${totalPapel}`);
        console.log(`El costo de producción de ${totalPapel} CPM es de $${calcularPrecio(material, totalPapel)}`);
        // document.getElementById("cpm").innerHTML = `El costo de producción de ${totalPapel} CPM es de $${calcularPrecio(material, totalPapel)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
        precio = calcularPrecio(material, totalPapel);
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + totalPapel + " " + material + " es de $" + precio,
            icon: "img/" + material + ".png",
            // // // timer: 3000,,,,
            button: true,
        });
        Toastify({
            text: "Agregado al historial de cotizaciones",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        document.getElementById("formul").reset();
        return material;
}

front = () => {
        let material = "Front";
        let cantidad = document.getElementById("cantidadFront").value;
        let ancho = document.getElementById("anchoFront").value;
        let alto = document.getElementById("altoFront").value;
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material Front son de ${metrosCuadrados}`);
        console.log(`El costo de producción de ${cantidad} Front es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        // alert(`El costo de producción de ${cantidad} Front es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        // document.getElementById("front").innerHTML = `El costo de producción de ${cantidad} Front de ${ancho} x ${alto} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
            icon: "img/" + material + ".png",
            // // timer: 3000,,,
            button: true,
        });
        Toastify({
            text: "Agregado al historial de cotizaciones",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        document.getElementById("formul").reset();
        return material;
}

back = () => {
        let material = "Back";
        let cantidad = document.getElementById("cantidadBack").value;
        let ancho = document.getElementById("anchoBack").value;
        let alto = document.getElementById("altoBack").value;
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material Back son de ${metrosCuadrados}`);
        console.log(`El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        // alert(`El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        // document.getElementById("back").innerHTML = `El costo de producción de ${cantidad} Back de ${ancho} x ${alto} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
            icon: "img/" + material + ".png",
            // // timer: 3000,,,
            button: true,
        });
        Toastify({
            text: "Agregado al historial de cotizaciones",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        document.getElementById("formul").reset();
        return material;
}

vinilo = () => {
    let material = "Vinilo";
    let cantidad = document.getElementById("cantidadVinilo").value;
    let ancho = document.getElementById("anchoVinilo").value;
    let alto = document.getElementById("altoVinilo").value;
    let metrosCuadrados = (ancho * alto * cantidad);
    console.log(`Los metros cuadrados del material Vinilo es de ${metrosCuadrados}`);
    console.log(`El costo de producción de ${cantidad} Vinilo es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
    // alert(`El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
    // document.getElementById("vinilo").innerHTML = `El costo de producción de ${cantidad} Vinilo de ${ancho} x ${alto} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}. <br> Click para cotizar de nuevo <br>`;
    // document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
    // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
    precio = calcularPrecio(material, cantidad, metrosCuadrados);
    swal({
        title: "Cotización finalizada",
        text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
        icon: "img/" + material + ".png",
        // // timer: 3000,,,
        button: true,
    });
    Toastify({
        text: "Agregado al historial de cotizaciones",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    document.getElementById("formul").reset();
    return material;
}

sextuple = () => {
    let material = "Sextuple";
    let cantidad = document.getElementById("cantidadSextuple").value;
    console.log(`La cantidad de CPM es de ${cantidad}`);
    let motivos = document.getElementById("motivosSextuple").value;
    console.log(`La cantidad de motivos es de ${motivos}`);
    let demasia = document.getElementById("demasiaSextuple").value;
    console.log(`La demasia es de ${demasia}`);
    let demasiaCalculada = (demasia/100) +1;
    console.log(`La demasia calculada es de ${demasiaCalculada}`);
    let totalPapel = (demasiaCalculada * motivos * cantidad);
    console.log(`El total de papel es de ${totalPapel}`);
    console.log(`El costo de producción de ${cantidad} sextuples es de $${calcularPrecio(material, totalPapel)}`);
    // document.getElementById("sextuple").innerHTML = `El costo de producción de ${cantidad} sextuples es de $${calcularPrecio(material, cantidad)}. <br> Click para cotizar de nuevo <br>`;
    // document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
    // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
    precio = calcularPrecio(material, totalPapel);
    swal({
        title: "Cotización finalizada",
        text: "El costo de produccion de " + totalPapel + " " + material + "s es de $" + precio,
        icon: "img/" + material + ".png",
        // // timer: 3000,,,
        button: true,
    });
    Toastify({
        text: "Agregado al historial de cotizaciones",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    document.getElementById("formul").reset();
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
console.log(PRODUCTO);

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

// Toastify({
//     text: "This is a toast",
//     duration: 3000,
//     destination: "https://github.com/apvarun/toastify-js",
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "right", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//     },
//     onClick: function(){} // Callback after click
//   }).showToast();

// swal({
//     title: "Cotización finalizada",
//     text: "El costo de produccion de" + totalPapel + " " + material + " es de $" + precio,
//     icon: "success",
//     icon: "img/" + material + ".png",
//     timer: 2500,
// });
