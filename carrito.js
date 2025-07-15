document.addEventListener("DOMContentLoaded", () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoContainer = document.getElementById("carrito-contenido");
  const totalEl = document.getElementById("total-carrito");

  if (carrito.length === 0) {
    carritoContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
    totalEl.textContent = "Total: $0";
    return;
  }

  let total = 0;

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const productoEl = document.createElement("div");
    productoEl.classList.add("producto-carrito");

    productoEl.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="descripcion">
        <strong>${producto.nombre}</strong><br>
        Precio unitario: $${producto.precio.toLocaleString()}<br>
        Subtotal: $${subtotal.toLocaleString()}
      </div>
      <div class="contador">
        <button onclick="cambiarCantidad(${index}, -1)">−</button>
        <span>${producto.cantidad}</span>
        <button onclick="cambiarCantidad(${index}, 1)">+</button>
      </div>
    `;

    carritoContainer.appendChild(productoEl);
  });

  totalEl.textContent = `Total: $${total.toLocaleString()}`;
});

function cambiarCantidad(index, cambio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito[index].cantidad += cambio;
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload(); // recarga para re-renderizar
}
