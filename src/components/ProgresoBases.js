import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoBases.css'


function ProgresoBases() {
    return (
        <div className="ProgresoBases">
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"MySQL"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"PostgreSQL"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Oracle"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"MongoDB"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"PhpMyAdmin"} />
                    </div>
                    <div className="columna">

                    </div>
                </div>
                <div className="fila">
                    <div className="columna">

                    </div>
                    <div className="columna">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgresoBases;