document.addEventListener("DOMContentLoaded", () => {
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

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "producto-carrito";

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="descripcion">
        <strong>${producto.nombre}</strong><br>
        Subtotal: $${subtotal.toLocaleString()}
      </div>
      <div class="contador">
        <button onclick="cambiarCantidad(${index}, -1)">−</button>
        <span>${producto.cantidad}</span>
        <button onclick="cambiarCantidad(${index}, 1)">+</button>
      </div>
    `;

    contenedor.appendChild(div);
  });

  totalEl.textContent = `Total: $${total.toLocaleString()}`;
});

function cambiarCantidad(index, cambio) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito[index].cantidad += cambio;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
}
