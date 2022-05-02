// Array en Sección de Tipos de Materiales con oferta

const arrayProductosOferta = [
    { id: 1,
        titulo: "Vinilo",
        categoria: "Sustrato",
        precio: 140000,
        precioFull: 180000,
        cantidad: 50,
        material: "Vinilo",
        medida: "4x3",
        imagen: "/img/vinilo.png",
    },
    { id: 2,
        titulo: "Front",
        categoria: "Sustrato",
        precio: 160000,
        precioFull: 216000,
        cantidad: 10,
        material: "Front",
        medida: "12x4",
        imagen: "/img/front.png",
    },
    { id: 3,
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

const cardSustrato = document.getElementById("cardSustrato");

arrayProductosOferta.forEach(arrayProductosOferta => {
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
);
