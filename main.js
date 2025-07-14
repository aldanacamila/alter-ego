let cartCount = 0;

  const cartCounter = document.querySelector('.cart-count');

  function agregarAlCarrito() {
    cartCount++;
    cartCounter.textContent = cartCount;
  }

  const botones = document.querySelectorAll('.agregar-carrito');

  botones.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
  });

  window.addEventListener('load', () => {
    const savedCount = localStorage.getItem('carrito');
    if (savedCount) {
      cartCount = parseInt(savedCount);
      cartCounter.textContent = cartCount;
    }
  });

  function agregarAlCarrito() {
    cartCount++;
    cartCounter.textContent = cartCount;
    localStorage.setItem('carrito', cartCount);
  }
