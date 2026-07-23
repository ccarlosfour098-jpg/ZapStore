
//CARGAR PRODUCTOS


fetch("data/productos.json")
    .then(response => response.json())
    .then(productos => {

        mostrarProductos(productos);

    })
    .catch(error => {

        console.error("Error:", error);

    });

// MOSTRAR PRODUCTOS

function mostrarProductos(productos){

    const contenedor = document.getElementById("contenedor-productos");

    productos.forEach(producto => {

        contenedor.innerHTML += `<article class="tarjeta-producto">

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p>$ ${producto.precio.toLocaleString("es-CO")}</p>

                <a class="btn-detalles" href="pages/producto.html?id=${producto.id}">
                    Ver detalles
                </a>

            </article>`;

    });

}