document.addEventListener("DOMContentLoaded", () => {
  // Detectar nivel de carpeta
  const path = window.location.pathname;
  let basePath = "./";

  if (path.includes("/colecciones/")) {
    basePath = "../../";
  } else if (path.includes("/carrito") || path.includes("/test") || path.includes("/nosotros")) {
    basePath = "./";
  } else {
    basePath = "./";
  }

  // Cargar comun.css dinámicamente
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${basePath}comun.css`;
  document.head.appendChild(link);

  // NAVBAR dinámico
  const navHTML = `
    <nav class="icon-nav position-fixed top-0 end-0 p-3 z-3">
      <a href="${basePath}coleccion.html" title="Colección"><i class="bi bi-eye"></i></a>
      <a href="${basePath}test.html" title="Experiencia"><i class="bi bi-stars"></i></a>
      <a href="${basePath}nosotros.html" title="Manifesto"><i class="bi bi-feather"></i></a>
      <a href="${basePath}carrito.html" class="text-white position-relative" title="Carrito">
        <i class="bi bi-bag"></i>
        <span id="cartCount" class="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger" style="display: none;">0</span>
      </a>
    </nav>`;

  const footerHTML = `
    <footer class="bg-dark text-white mt-5 py-4">
      <div class="container d-flex flex-wrap justify-content-between">
        <div>
          <p class="mb-1">Nuestra misión:<br>Una identidad expandida. 
            <br>Lo que ocultás, lo que vestís,
            <br>lo que elegís habitar.</p>
          <p class="mb-0"><i class="bi bi-instagram"></i> @alterego</p>
          <p class="mb-0"><i class="bi bi-envelope"></i> alterego@gmail.com</p>
        </div>
        <div>
          <ul class="list-unstyled">
            <li><a href="${basePath}index.html" class="text-white text-decoration-none">Home</a></li>
            <li><a href="${basePath}coleccion.html" class="text-white text-decoration-none">Colecciones</a></li>
            <li><a href="${basePath}test.html" class="text-white text-decoration-none">Test Interactivo</a></li>
            <li><a href="${basePath}carrito.html" class="text-white text-decoration-none">Carrito</a></li>
            <li><a href="${basePath}nosotros.html" class="text-white text-decoration-none">Sobre nosotros</a></li>
          </ul>
        </div>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("afterbegin", navHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Contador carrito
  function actualizarContadorVisual() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalItems = carrito.reduce((sum, prod) => sum + prod.cantidad, 0);
    const cartCountEl = document.getElementById("cartCount");
    if (cartCountEl) {
      cartCountEl.textContent = totalItems;
      cartCountEl.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
  }

  actualizarContadorVisual();
});
