import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoMetodologias.css'


function ProgresoMetodologias() {
    return (
        <div className="ProgresoMetodologias">
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"SCRUM"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Agile"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"RUP"} />
                    </div>
                    <div className="columna">
                    </div>
                </div>
                <div className="fila" >
                    <div className="columna">

                    </div>
                    <div className="columna">

                    </div>
                </div>
                <div className="fila" >
                    <div className="columna">

                    </div>
                    <div className="columna">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgresoMetodologias;