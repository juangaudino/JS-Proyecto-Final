/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description Proyecto Final JavaScript - Cotizador de Impresiones - Coderhouse
 *
 * History
 *  1.0.0 - 2022-02-23 : Juan Gaudino : Mostrar en consola si el alumno esta aprobado o no
 *  1.0.1 - 2022-03-30 : Juan Gaudino : 2do. Entrega Proyecto Final JavaScript - Clase 11 - Coderhouse
 *  1.0.2 - 2022-05-01 : Juan Gaudino : Entrega Proyecto Final JavaScript - Coderhouse
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
        case 'pai':
            precio = totalPapel * unitarioPAI;
            break;
        case 'cpm':
            precio = totalPapel * unitarioCPM;
            break;
        case 'front':
            precio = metrosCuadrados * metroCuadradoFront;
            break;
        case 'back':
            precio = metrosCuadrados * metroCuadradoBack;
            break;
        case 'vinilo':
            precio = metrosCuadrados * metroCuadradoVinilo;
            break;
        case 'sextuple':
            precio = totalPapel * unitarioSextuple;
    }
    return precio;
}




//Funciones por producto

pai = () => {
        let material = "pai";
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
        motivos <= 1 ? precio = calcularPrecio(material, totalPapel) : precio = calcularPrecio(material, totalPapel) * 1.2;
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + totalPapel + " " + material + " a " + motivos + " motivos" + " es de $" + precio,
            icon: "img/" + material + ".png",
            button: true,
        });
        Toastify({
            text: "Click en OK para continuar",
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
        let material = "cpm";
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
        motivos <= 1 ? precio = calcularPrecio(material, totalPapel) : precio = calcularPrecio(material, totalPapel) * 1.2;
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + totalPapel + " " + material + " a " + motivos + " motivos" + " es de $" + precio,
            icon: "img/" + material + ".png",
            // // // timer: 3000,,,,
            button: true,
        });
        Toastify({
            text: "Click en OK para continuar",
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
        let material = "front";
        let cantidad = document.getElementById("cantidadFront").value;
        let ancho = document.getElementById("anchoFront").value;
        let alto = document.getElementById("altoFront").value;
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material Front son de ${metrosCuadrados}`);
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
            icon: "img/" + material + ".png",
            // // timer: 3000,,,
            button: true,
        });
        Toastify({
            text: "Click en OK para continuar",
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
        let material = "back";
        let cantidad = document.getElementById("cantidadBack").value;
        let ancho = document.getElementById("anchoBack").value;
        let alto = document.getElementById("altoBack").value;
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material Back son de ${metrosCuadrados}`);
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
            icon: "img/" + material + ".png",
            // // timer: 3000,,,
            button: true,
        });
        Toastify({
            text: "Click en OK para continuar",
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
    let material = "vinilo";
    let cantidad = document.getElementById("cantidadVinilo").value;
    let ancho = document.getElementById("anchoVinilo").value;
    let alto = document.getElementById("altoVinilo").value;
    let metrosCuadrados = (ancho * alto * cantidad);
    console.log(`Los metros cuadrados del material Vinilo es de ${metrosCuadrados}`);
    precio = calcularPrecio(material, cantidad, metrosCuadrados);
    swal({
        title: "Cotización finalizada",
        text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
        icon: "img/" + material + ".png",
        // // timer: 3000,,,
        button: true,
    });
    Toastify({
        text: "Click en OK para continuar",
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
    let material = "sextuple";
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
    motivos <= 1 ? precio = calcularPrecio(material, totalPapel) : precio = calcularPrecio(material, totalPapel) * 1.2;
    swal({
        title: "Cotización finalizada",
        text: "El costo de produccion de " + totalPapel + " " + material + " a " + motivos + " motivos" + " es de $" + precio,
        icon: "img/" + material + ".png",
        // // timer: 3000,,,
        button: true,
    });
    Toastify({
        text: "Click en OK para continuar",
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