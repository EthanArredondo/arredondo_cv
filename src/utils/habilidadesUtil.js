export function mostrarSeccionHabilidad(seccion) {
    // Obtener referencias a los elementos
    const seleccion = document.querySelector(".seleccion");
    const seccionProgreso = document.getElementById(seccion);

    // Aplicar animación de salida a "seleccion"
    seleccion.classList.add("slide-out-left");

    // Mostrar la sección de progreso con animación de entrada
    seccionProgreso.style.display = "block";
    seccionProgreso.classList.add("slide-in-right");

    // Ocultar todas las otras secciones de progreso
    const todasLasSecciones = ["lenguajes", "bases", "cloud", "frameworks", "metodologias", "extras"];
    todasLasSecciones.forEach((s) => {
        if (s !== seccion) {
            const otraSeccion = document.getElementById(s);
            otraSeccion.style.display = "none";
            otraSeccion.classList.remove("slide-in-right"); // Limpiar la clase de animación
        }
    });

    // Esperar a que termine la animación antes de ocultar "seleccion"
    seleccion.addEventListener("animationend", () => {
        seleccion.style.display = "none";
        seleccion.classList.remove("slide-out-left"); // Limpiar la clase de animación
    }, { once: true });
}