/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description Proyecto Final JavaScript - Cotizador de Impresiones - Coderhouse
 *
 * History
 *  1.0.0 - 2022-02-23 : Juan Gaudino : Mostrar en consola si el alumno esta aprobado o no
 *  1.0.1 - 2022-03-30 : Juan Gaudino : 2do. Entrega Proyecto Final JavaScript - Clase 11 - Coderhouse
 *  1.0.2 - 2022-04-01 : Juan Gaudino : Entrega Proyecto Final JavaScript - Coderhouse
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
        motivos <= 1 ? precio = calcularPrecio(material, totalPapel) : precio = calcularPrecio(material, totalPapel) * 1.2;
        swal({
            // title: "Cotización finalizada",
            text: "El costo de produccion de " + totalPapel + " " + material + " a " + motivos + " motivos" + " es de $" + precio,
            icon: "img/" + material + ".png",
            button: true,
        });
        Toastify({
            text: "Cotización finalizada",
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
        motivos <= 1 ? precio = calcularPrecio(material, totalPapel) : precio = calcularPrecio(material, totalPapel) * 1.2;
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + totalPapel + " " + material + " a " + motivos + " motivos" + " es de $" + precio,
            icon: "img/" + material + ".png",
            // // // timer: 3000,,,,
            button: true,
        });
        Toastify({
            text: "Agregado al carrito",
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
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
            icon: "img/" + material + ".png",
            // // timer: 3000,,,
            button: true,
        });
        Toastify({
            text: "Agregado al carrito",
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
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
        swal({
            title: "Cotización finalizada",
            text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
            icon: "img/" + material + ".png",
            // // timer: 3000,,,
            button: true,
        });
        Toastify({
            text: "Agregado al carrito",
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
    precio = calcularPrecio(material, cantidad, metrosCuadrados);
    swal({
        title: "Cotización finalizada",
        text: "El costo de produccion de " + cantidad + " " + material + " de " + ancho + " x " + alto + " metros es de $" + calcularPrecio(material, cantidad, metrosCuadrados),
        icon: "img/" + material + ".png",
        // // timer: 3000,,,
        button: true,
    });
    Toastify({
        text: "Agregado al carrito",
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
    motivos <= 1 ? precio = calcularPrecio(material, totalPapel) : precio = calcularPrecio(material, totalPapel) * 1.2;
    swal({
        title: "Cotización finalizada",
        text: "El costo de produccion de " + totalPapel + " " + material + " a " + motivos + " motivos" + " es de $" + precio,
        icon: "img/" + material + ".png",
        // // timer: 3000,,,
        button: true,
    });
    Toastify({
        text: "Agregado al carrito",
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


// Carrito

const agregarAlCarrito = (producto) => {
    const carrito = document.getElementById("carrito");
    const productoCarrito = document.createElement("div");
    productoCarrito.classList.add("productoCarrito");
    productoCarrito.innerHTML = `
    <div class="titulo">${producto.titulo}</div>
    <div class="precio">${producto.precio}</div>
    <div class="cantidad">${producto.cantidad}</div>
    <div class="eliminar">X</div>
    `;
    carrito.appendChild(productoCarrito);
    calcularTotal();
}



// Array en Sección de Tipos de Materiales con oferta


const arrayProductosOferta = [
    { id: 1,
        titulo: "PAI",
        categoria: "Papel",
        precio: 95000,
        precioFull: 120000,
        cantidad: 100,
        material: "PAI",
        imagen: "/img/PAI.png",
    },
    { id: 2,
        titulo: "CPM",
        categoria: "Papel",
        precio: 75000,
        precioFull: 100000,
        cantidad: 500,
        material: "CPM",
        imagen: "/img/cpm.png",
    },
    { id: 3,
        titulo: "Sextuples",
        categoria: "Papel",
        precio: 110000,
        precioFull: 150000,
        cantidad: 300, 
        material: "Sextuple",
        imagen: "/img/sextuple.png",
    },
    { id: 4,
        titulo: "Vinilo",
        categoria: "Sustrato",
        precio: 140000,
        precioFull: 180000,
        cantidad: 50,
        material: "Vinilo",
        medida: "4x3",
        imagen: "/img/vinilo.png",
    },
    { id: 5,
        titulo: "Front",
        categoria: "Sustrato",
        precio: 160000,
        precioFull: 216000,
        cantidad: 10,
        material: "Front",
        medida: "12x4",
        imagen: "/img/front.png",
    },
    { id: 6,
        titulo: "Back",
        categoria: "Sustrato",
        precio: 50000,
        precioFull: 73000,
        cantidad: 50,
        material: "Back",
        medida: "1x2",
        imagen: "/img/back.png",
    },
];

// Cards

const cardProductos = document.getElementById("cardProductos");
const cardPapel = document.getElementById("cardPapel");
const cardSustrato = document.getElementById("cardSustrato");

arrayProductosOferta.forEach(arrayProductosOferta => {
    cardProductos.innerHTML += `
    <div class="col mb-5">
    <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Durabilidad</div>
                            <div class="badge text-white position-absolute" style="top: 2rem; right: 0.5rem">
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                            </div>
                            <!-- Product image-->
                            <img class="card-img-top" src="${arrayProductosOferta.imagen}"/>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${arrayProductosOferta.titulo}</h5>
                                    <!-- Product price-->
                                    <span class="text-muted text-decoration-line-through">$${arrayProductosOferta.precioFull}</span>
                                    <div> Costo Promocional: </div>
                                    <span class="text-danger font-weight-bold"><b>$${arrayProductosOferta.precio}</span></b>
                                    <div> por ${arrayProductosOferta.cantidad} ${arrayProductosOferta.titulo}</div>
                                </div>
                            </div>
                        </div>
        </div>
        `;
}
);
arrayProductosOferta.filter(arrayProductosOferta => {
    if (arrayProductosOferta.categoria === "Papel") {
        cardPapel.innerHTML += `
        <div class="col mb-5">
    <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Durabilidad</div>
                            <div class="badge text-white position-absolute" style="top: 2rem; right: 0.5rem">
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                            </div>
                            <!-- Product image-->
                            <img class="card-img-top" src="${arrayProductosOferta.imagen}"/>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${arrayProductosOferta.titulo}</h5>
                                    <!-- Product price-->
                                    <span class="text-muted text-decoration-line-through">$${arrayProductosOferta.precioFull}</span>
                                    <div> Costo Promocional: </div>
                                    <span class="text-danger font-weight-bold"><b>$${arrayProductosOferta.precio}</span></b>
                                    <div> por ${arrayProductosOferta.cantidad} ${arrayProductosOferta.titulo}</div>
                                </div>
                            </div>
                        </div>
        </div>
        `;
    }
}
);
arrayProductosOferta.filter(arrayProductosOferta => {
    if (arrayProductosOferta.categoria === "Sustrato") {
        cardSustrato.innerHTML += `
        <div class="col mb-5">
    <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Durabilidad</div>
                            <div class="badge text-white position-absolute" style="top: 2rem; right: 0.5rem">
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                            </div>
                            <!-- Product image-->
                            <img class="card-img-top" src="${arrayProductosOferta.imagen}"/>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${arrayProductosOferta.titulo}</h5>
                                    <!-- Product price-->
                                    <span class="text-muted text-decoration-line-through">$${arrayProductosOferta.precioFull}</span>
                                    <div> Costo Promocional: </div>
                                    <span class="text-danger font-weight-bold"><b>$${arrayProductosOferta.precio}</span></b>
                                    <div> por ${arrayProductosOferta.cantidad} ${arrayProductosOferta.titulo}</div>
                                </div>
                            </div>
                        </div>
        </div>
        `;
    }
}
);





        

// arrayProductosOferta.filter(arrayProductosOferta => {
//     cardPapel.innerHTML += `
//     <div class="col mb-5">
//     <div class="card h-100">
//                             <!-- Sale badge-->
//                             <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Durabilidad</div>
//                             <div class="badge text-white position-absolute" style="top: 2rem; right: 0.5rem">
//                                 <div class="d-flex justify-content-center small text-warning mb-2">
//                                     <div class="bi-star-fill"></div>
//                                     <div class="bi-star-fill"></div>
//                                     <div class="bi-star-fill"></div>
//                                     <div class="bi-star-fill"></div>
//                                     <div class="bi-star-fill"></div>
//                                 </div>
//                             </div>
//                             <!-- Product image-->
//                             <img class="card-img-top" src="${arrayProductosOferta.imagen}"/>
//                             <!-- Product details-->
//                             <div class="card-body p-4">
//                                 <div class="text-center">
//                                     <!-- Product name-->
//                                     <h5 class="fw-bolder">${arrayProductosOferta.titulo}</h5>
//                                     <!-- Product price-->
//                                     <span class="text-muted text-decoration-line-through">$${arrayProductosOferta.precioFull}</span>
//                                     <div> Costo Promocional: </div>
//                                     <span class="text-danger font-weight-bold"><b>$${arrayProductosOferta.precio}</span></b>
//                                     <div> por ${arrayProductosOferta.cantidad} ${arrayProductosOferta.titulo}</div>
//                                 </div>
//                             </div>
//                         </div>
//         </div>
//     `;
//     }
// );