export const mostrarSeccionHabilidad = (idSeccion) => {
    const secciones = document.querySelectorAll(".habilidades > .contenido > div");
    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });

    const seccionSeleccionada = document.getElementById(idSeccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = "block";
    }
};