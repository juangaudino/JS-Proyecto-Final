/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description Proyecto Final JavaScript - Cotizador de Impresiones - Coderhouse
 *
 * History
 *  1.0.0 - 2022-05-01 : Juan Gaudino : Carrito de compras
 */

// Carrito de compras

// localStorage.setItem('carrito', 0); // Metodo 1
// localStorage.carrito = 0; // Metodo 2
// localStorage.setItem('carrito', JSON.stringify([])); // Metodo 3 Sugerencia Copilot

const carrito = document.getElementById('carrito');
const productosCarrito = document.getElementById('productos-carrito');
const carritoVacioBtn = document.getElementById('carritoVacio');

cargarEventListeners();

function cargarEventListeners() {
    productosCarrito.addEventListener('click', comprarProducto);
    carrito.addEventListener('click', eliminarProducto);
    carritoVacioBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

function comprarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.parentElement;
        leerProducto(producto);
    }
}

function leerProducto(producto) {
    const infoProducto = {
        nombre: producto.querySelector('h4').innerText,
        precio: producto.querySelector('.precio span').innerText,
        id: producto.querySelector('a').getAttribute('data-id')
    }
    agregarProducto(infoProducto);
}

function insertarCarrito(productoCarrito) {
    const row = document.createElement('div');
    row.classList.add('carrito-producto');
    row.innerHTML = `
        <div class="producto-carrito">
            <img src="img/productos/${productoCarrito.id}.jpg" alt="${productoCarrito.nombre}">
            <div class="info-producto">
                <h4>${productoCarrito.nombre}</h4>
                <p class="precio">
                    <span>${productoCarrito.precio}</span>
                </p>
                <p class="cantidad">
                    <i class="fas fa-minus-circle"></i>
                    <span>1</span>
                    <i class="fas fa-plus-circle"></i>
                </p>
            </div>
        </div>
        <div class="acciones">
            <i class="fas fa-trash"></i>
        </div>
    `;
    carrito.appendChild(row);
    guardarLocalStorage(productoCarrito);
}

function carritoTotal() {
    let total = 0;
    const itemTotal = document.querySelectorAll('.itemTotal');
    carrito.forEach(item => {);
        total += Number(item.innerText);
    }
    return total;
}








