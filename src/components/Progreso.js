import '../styles/Progreso.css'

function Progreso({ habilidad, rectangulosPintados }) {

    const totalRectangulos = 18;
    const rectangulos = Array.from({ length: totalRectangulos }, (_, index) => (
        <div
            key={index}
            className={`rectangulo ${index < rectangulosPintados ? "pintado" : ""}`}
        />
    ));


    return (
        <div className="Progreso">
            <h4>{habilidad}</h4>
            <div className="barra-progreso">
                {rectangulos}
            </div>
        </div>
    )
}

export default Progreso;