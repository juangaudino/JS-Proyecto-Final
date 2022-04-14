/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



const monedaInicial = document.getElementById('moneda_calcular');
const monedaResultado = document.getElementById('moneda_calculada');
const cantidadInicial = document.getElementById('cantidad_calcular');
const cantidadResultado = document.getElementById('cantidad_calculada');
const cambioEl = document.getElementById('cambio');
const tasaEl = document.getElementById('tasa');


// Fetch Exchange Rate and Update the DOM
function calculate(){
    const moneda_inicial = monedaInicial.value;
    const moneda_resultado = monedaResultado.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_inicial}`)
   .then(res => res.json() )
   .then(data => {
       const tasa = data.rates[moneda_resultado];
       
       cambioEl.innerText = `1 ${moneda_inicial} = ${tasa} ${moneda_resultado}`;

       cantidadResultado.value = (cantidadInicial.value * tasa).toFixed(2);

    } );
    
}

//Event listeners
monedaInicial.addEventListener('change', calculate);
cantidadInicial.addEventListener('input', calculate);
monedaResultado.addEventListener('change', calculate);
cantidadResultado.addEventListener('input', calculate);

tasa.addEventListener('click', () =>{
    const temp = monedaInicial.value;
    monedaInicial.value = monedaResultado.value;
    monedaResultado.value = temp;
    calculate();
} );


calculate();