import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoBases.css'

import { volverSeleccion } from "../utils/flechaRetrocesoUtil";

function ProgresoBases() {
    return (
        <div className="ProgresoBases">
            <button className="back-button" onClick={() => volverSeleccion("bases")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"MySQL"} rectangulosPintados={12} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"PostgreSQL"} rectangulosPintados={8} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Oracle"} rectangulosPintados={8} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"MongoDB"} rectangulosPintados={10} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"PhpMyAdmin"} rectangulosPintados={11} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"SQL Server"} rectangulosPintados={10} />
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