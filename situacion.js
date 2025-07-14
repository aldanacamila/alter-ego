document.addEventListener("DOMContentLoaded", () => {
  const personalityCount = { shadow: 0, muse: 0, echo: 0, edge: 0 };

  const opciones = document.querySelectorAll("[dato-personalidad]");

  opciones.forEach(btn => {
    btn.addEventListener("click", () => {
      const personalidad = btn.getAttribute("dato-personalidad");
      const grupo = btn.closest(".opciones");

      // Desactivar todas
      grupo.querySelectorAll("[dato-personalidad]").forEach(el => {
        el.classList.remove("selected");
        el.removeAttribute("data-selected");
        el.style.opacity = "0.3";
        el.style.pointerEvents = "none";
      });

      // Activar seleccionada
      btn.classList.add("selected");
      btn.setAttribute("data-selected", "true");
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";

      // Scroll a la siguiente pregunta
      const preguntaActual = btn.closest(".pregunta");
      const siguiente = preguntaActual.nextElementSibling;
      if (siguiente && siguiente.classList.contains("pregunta")) {
        setTimeout(() => {
          siguiente.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 500);
      }
    });
  });

  const form = document.getElementById("formulario_test");
  form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Verificar que todas las preguntas tengan al menos una opción seleccionada
  const preguntas = document.querySelectorAll(".pregunta");
  const seleccionadas = document.querySelectorAll("[data-selected='true']");

  if (seleccionadas.length < preguntas.length) {
    alert("Por favor respondé todas las preguntas antes de continuar.");
    return;
  }

  // Contar personalidades
  document.querySelectorAll("[data-selected='true']").forEach(el => {
    const tipo = el.getAttribute("dato-personalidad");
    if (tipo) personalityCount[tipo]++;
  });

  const ordenado = Object.entries(personalityCount).sort((a, b) => b[1] - a[1]);
  const ganador = ordenado.find(p => p[1] >= 2)?.[0] || ordenado[0][0];

  localStorage.setItem("alterEgoResult", ganador);
  window.location.href = `resultados/resultado-${ganador}.html`;
});

  });

