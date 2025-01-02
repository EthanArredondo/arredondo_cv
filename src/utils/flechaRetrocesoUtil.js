export const volverSeleccion = (idSeccion) => {
    const seccionSeleccionada = document.getElementById(idSeccion);
    const seleccion = document.querySelector(".habilidades .seleccion");
    if (seccionSeleccionada && seleccion) {
        seccionSeleccionada.style.display = "none";
        seleccion.style.display = "block";
    }
};