export function volverSeleccion(seccion) {
    // Obtener referencias a los elementos
    const seleccion = document.querySelector(".seleccion");
    const seccionActual = document.getElementById(seccion);

    // Aplicar animación de salida a la sección actual (mover a la derecha)
    seccionActual.classList.add("slide-out-right");

    // Esperar a que termine la animación antes de ocultar la sección actual
    seccionActual.addEventListener("animationend", () => {
        seccionActual.style.display = "none";
        seccionActual.classList.remove("slide-out-right"); // Limpiar la clase de animación
    }, { once: true });

    // Mostrar la sección "seleccion" con animación de entrada (desde la izquierda)
    seleccion.style.display = "block";
    seleccion.classList.add("slide-in-left");

    // Limpiar la animación de entrada después de que termine
    seleccion.addEventListener("animationend", () => {
        seleccion.classList.remove("slide-in-left"); // Limpiar la clase de animación
    }, { once: true });
}