# ZapStore

## Descripción

ZapStore es un catálogo web de zapatos desarrollado como proyecto de aprendizaje y con enfoque profesional, utilizando HTML, CSS y JavaScript.

## Objetivo

Permitir a los usuarios explorar un catálogo de productos, consultar sus detalles y contactar a la tienda mediante WhatsApp.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- JSON

## Estado del proyecto

 En desarrollo

---

## Avance 1 - Estructura Base

Se organizó el proyecto utilizando una estructura de carpetas profesional.

Se implementó la estructura principal de la página utilizando etiquetas semánticas de HTML5:

- Header
- Nav
- Main
- Section
- Footer

El objetivo fue construir un layout limpio y preparado para la implementación del catálogo.

## Avance 2 - Estilos base

Se implementó la configuración inicial de estilos utilizando CSS.

### Aspectos desarrollados

- Reset CSS para normalizar los estilos del navegador.
- Variables globales mediante `:root`.
- Estilos generales del `body`.
- Encabezado con Flexbox.
- Menú de navegación horizontal.
- Efecto visual al pasar el cursor sobre los enlaces.

### Conceptos aprendidos

- Selector universal (`*`).
- Variables CSS (`:root` y `var()`).
- Box Model (`box-sizing`).
- Flexbox (`display: flex`).
- Selectores por clase y por elemento.

## Avance 3 - Preparación del catálogo dinámico

Se implementó la estructura base para que el catálogo sea generado mediante JavaScript.

### Cambios realizados

- Se creó el contenedor de productos.
- Se preparó el diseño del catálogo con Flexbox.
- Se creó el módulo `productos.js`.
- Se verificó la carga del archivo utilizando la consola del navegador.

### Conceptos aprendidos

- Separación de responsabilidades.
- Manipulación futura del DOM.
- Uso de `console.log()` para depuración.
- Flexbox con `flex-wrap`.

## Avance 4 - Lectura de datos con JavaScript

Se implementó la lectura del archivo `productos.json` utilizando la función `fetch()`.

### Conceptos aprendidos

- Peticiones HTTP locales.
- Uso de `fetch()`.
- Promesas (`then` y `catch`).
- Conversión de JSON a objetos JavaScript.
- Exploración de arreglos y objetos mediante `console.log()`.

## Avance 5 - Diseño de la arquitectura

Se definió la estructura general del proyecto para separar las responsabilidades entre la página principal y la página de detalles del producto.

### Decisiones tomadas

- El catálogo se mostrará en `index.html`.
- Los detalles de cada producto se visualizarán en `producto.html`.
- Cada producto tendrá un código único.
- El botón "Ver detalles" se convertirá en un enlace hacia la página del producto.
- El futuro botón de WhatsApp enviará automáticamente la información del producto seleccionado.

### Conceptos aprendidos

- Arquitectura del proyecto.
- Responsabilidad única (SRP).
- Separación entre datos, lógica y presentación.

## Avance 6 - Navegación dinámica

Se implementó el envío del identificador del producto mediante la URL.

### Cambios realizados

- Cada tarjeta genera un enlace con el `id` del producto.
- Se creó la página `producto.html`.
- Se creó el archivo `producto.js`.
- Se obtuvo el parámetro `id` desde la URL utilizando `URLSearchParams`.

### Conceptos aprendidos

- Parámetros en la URL.
- Navegación entre páginas.
- Lectura de parámetros con JavaScript.
- Reutilización de una misma página para múltiples productos.

## Avance 7 - Integración con WhatsApp

Se implementó el módulo de contacto mediante WhatsApp.

### Funcionalidades

- Se creó una función para construir el mensaje automáticamente.
- Se creó una función para abrir WhatsApp con el mensaje generado.
- Se utilizó `encodeURIComponent()` para codificar correctamente el texto.
- El botón de consulta ejecuta un evento `click` que abre la conversación con el producto seleccionado.

### Conceptos aprendidos

- Modularización de funciones.
- Eventos (`addEventListener`).
- Construcción dinámica de URLs.
- Integración con servicios externos (WhatsApp).