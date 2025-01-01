import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoCloud.css'


function ProgresoCloud() {
    return (
        <div className="ProgresoCloud">
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"AWS"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Azure"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"MongoDB Atlas"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Firebase"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Docker"} />
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

export default ProgresoCloud;