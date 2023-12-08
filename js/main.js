// Evento que se dispara cuando la ventana ha terminado de cargar
window.addEventListener("load", function () {
  // Selecciona el elemento con la clase "title"
  const titleElement = document.querySelector(".title");

  // Crea un elemento de cursor y lo añade al elemento "title"
  const cursorElement = document.createElement("span");
  cursorElement.className = "cursor";
  cursorElement.textContent = "|";
  titleElement.appendChild(cursorElement);

  // Array de títulos para el efecto de escribir
  const titles = ["Desarrolladora Fullstack", "Diseñadora UX/UI"];
  let titleIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  // Función para el efecto de escribir y borrar
  function typeDeleteTitle() {
    const title = titles[titleIndex];
    const currentText = isDeleting
      ? title.substring(0, letterIndex - 1)
      : title.substring(0, letterIndex + 1);

    titleElement.textContent = currentText;
    letterIndex += isDeleting ? -1 : 1;

    if (
      (!isDeleting && letterIndex > title.length) ||
      (isDeleting && letterIndex === 0)
    ) {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }

    setTimeout(typeDeleteTitle, isDeleting ? 150 : 100);
  }

  // Inicia el efecto de escribir
  typeDeleteTitle();
});
// Evento de escucha para el clic en la flecha y desplazamiento suave hacia arriba
document.addEventListener("DOMContentLoaded", function () {
  const backToTopLink = document.querySelector(".back-to-top");
  const aboutSection = document.querySelector("#about");

  backToTopLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
