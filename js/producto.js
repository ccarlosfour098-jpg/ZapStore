/* ===========================================
OBTENER EL ID DEL PRODUCTO
=========================================== */

const parametros = new URLSearchParams(window.location.search);

const idProducto = Number(parametros.get("id"));

/* ===========================================
CARGAR PRODUCTOS
=========================================== */

fetch("../data/productos.json")
  .then((response) => response.json())

  .then((productos) => {
    const producto = productos.find((item) => item.id === idProducto);

    mostrarProducto(producto);
  })

  .catch((error) => {
    console.error(error);
  });

/* ===========================================
MOSTRAR PRODUCTO
=========================================== */

function mostrarProducto(producto) {
  const detalle = document.getElementById("detalle-producto");

  detalle.innerHTML = `   

        <div class="producto-detalle">

            <div class="imagen-producto">

                <img src="../${producto.imagen}" alt="${producto.nombre}">

            </div>

            <div class="info-producto">

                <h1>${producto.nombre}</h1>

                <p class="precio">

                    $ ${producto.precio.toLocaleString("es-CO")}

                </p>

                <p><strong>Código:</strong> ${producto.codigo}</p>

                <p><strong>Categoría:</strong> ${producto.categoria}</p>

                <p><strong>Color:</strong> ${producto.color}</p>

                <p><strong>Stock:</strong> ${producto.stock}</p>

                <p><strong>Tallas:</strong> ${producto.tallas.join(", ")}</p>

                <h3>Descripción</h3>

                <p>${producto.descripcion}</p>

                <button class="btn-whatsapp">

                Consultar por WhatsApp

                </button>

            </div>

        </div>

    `;

  const boton = document.querySelector(".btn-whatsapp");

  boton.addEventListener("click", () => {
    abrirWhatsApp(producto);
  });
}

/* ===========================================
CREAR MENSAJE DE WHATSAPP
=========================================== */

function crearMensajeWhatsApp(producto) {

  const enlaceProducto = window.location.href;

  return `Hola 

Estoy interesado en el siguiente producto.

Código: ${producto.codigo}

Producto: ${producto.nombre}

Precio: $${producto.precio.toLocaleString("es-CO")}

Enlace del producto:
${enlaceProducto}

¿Se encuentra disponible?`;
}

/* ===========================================
ABRIR WHATSAPP
=========================================== */

function abrirWhatsApp(producto) {
  const numero = "573004659336";

  const mensaje = crearMensajeWhatsApp(producto);

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}
