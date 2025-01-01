import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoLenguajes.css'


function ListaProgreso() {
    return (
        <div className="ProgresoLenguajes">
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"HTML/CSS"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"JAVASCRIPT"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"JAVA"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"PYTHON"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"PHP"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"C#"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"R"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"C"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaProgreso;