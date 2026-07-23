/* ===========================================
OBTENER LA CATEGORÍA DESDE LA URL
=========================================== */

const parametros = new URLSearchParams(window.location.search);

const categoria = parametros.get("categoria");

console.log(categoria);

/* ===========================================
MOSTRAR EL TÍTULO
=========================================== */

const titulo = document.getElementById("titulo-categoria");

titulo.textContent = categoria;

/* ===========================================
CARGAR LOS PRODUCTOS
=========================================== */

fetch("../data/productos.json")

    .then(response => response.json())

    .then(productos => {

    const productosFiltrados = productos.filter(producto => {

        return producto.categoria === categoria;

    });

    mostrarProductos(productosFiltrados);


})

    .catch(error => {

        console.error(error);

    });

function mostrarProductos(productos){

    const contenedor = document.getElementById("contenedor-productos");

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        contenedor.innerHTML += `

        <article class="tarjeta-producto">

            <img src="../${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p>$ ${producto.precio.toLocaleString("es-CO")}</p>

            <a class="btn-detalles"
               href="producto.html?id=${producto.id}">
                Ver detalles
            </a>

        </article>

        `;

    });

}