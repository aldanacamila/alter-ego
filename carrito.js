const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoContainer = document.getElementById("carrito-contenido");


function cambiarCantidad(index, cambio) {
  carrito[index].cantidad += cambio;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito();
}

renderizarCarrito();




function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.getElementById("carrito-contenido");
  const totalEl = document.getElementById("total-carrito");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>No hay productos en el carrito.</p>";
    totalEl.textContent = "Total: $0";
    return;
  }

  let total = 0;

  carrito.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    contenedor.innerHTML += `
      <div class="mb-4 border-bottom pb-3">
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 80px;" class="me-3">
        <strong>${producto.nombre}</strong><br>
        Cantidad: ${producto.cantidad} – Subtotal: $${subtotal.toLocaleString()}
      </div>
    `;
  });

  totalEl.textContent = `Total: $${total.toLocaleString()}`;
}
document.addEventListener("DOMContentLoaded", mostrarCarrito);
