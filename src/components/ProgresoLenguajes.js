import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoLenguajes.css'

import { volverSeleccion } from "../utils/flechaRetrocesoUtil";

function ProgresoLenguajes() {
    return (
        <div className="ProgresoLenguajes">
            <button className="back-button" onClick={() => volverSeleccion("lenguajes")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"HTML/CSS"} rectangulosPintados={12} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"JAVASCRIPT"} rectangulosPintados={10} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"JAVA"} rectangulosPintados={8} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"PYTHON"} rectangulosPintados={7} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"PHP"} rectangulosPintados={6} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"C#"} rectangulosPintados={2} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"R"} rectangulosPintados={8} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"C"} rectangulosPintados={8} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgresoLenguajes;