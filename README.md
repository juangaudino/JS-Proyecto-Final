# Proyecto Final JavaScript | Coderhouse
## Cotizador de Producción

Este es el proyecto final correspondiente al curso de JavaScript en ***CODERHOUSE***, **Comisión 20100**. 
Es un cotizador de producción de diversos materiales impresos que se utilizan en la industria publicitaria. Esta es una herramienta que suelo usar en mi trabajo diario, pero en un Excel. La idea con este proyecto es hacerla mas accesible al estar en versión web.

## Recursos, APIS y Librerías utilizadas

Este sitio web esta desarrollado en JavaScript, sobre una plantilla de Bootstrap 5.
Se hace el uso de dos APIS. Una es [ExchangeRate-API](https://www.exchangerate-api.com/), utilizada para tener acceso a distintas tasas de cambio. 
La otra API utilizada es [Random User Generator](https://randomuser.me/), utilizada en la sección contactos.

## Funcionamiento

En el Home nos encontramos con los 6 tipos de material para cotizar. Tenemos que en algunos casos indicar: cantidad, motivos a imprimir y porcentaje de demasía (impresión extra de material) a ser producida. En otros casos, se indica: medidas (ancho y alto en metros) y cantidad.
Todos estos indicadores darán distintos resultados, acorde a lo formulado en las funciones.
Por ejemplo: no es lo mismo cotizar 100 CPM, a 1 motivo con 40% de demasía (que arroja un total de 140 impresiones) que cotizar 50 CPM, a 2 motivos con 40% de demasía (que también arroja 140 impresiones), dado que en ese último caso la máquina de impresión tiene que hacer lo que coloquialmente se conoce como "dos pasadas".

> Esto ha sido desarrollado por **Juan Gaudino**
> 
![screenshot-proyecto-final-js-cotizador vercel app-2022 05 02-21_15_59](https://user-images.githubusercontent.com/89493053/166345725-44e8170e-cbc8-4fd8-9a1d-6e06297e5485.png)
