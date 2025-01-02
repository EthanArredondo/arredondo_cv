import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoCloud.css'

import { volverSeleccion } from "../utils/flechaRetrocesoUtil";

function ProgresoCloud() {
    return (
        <div className="ProgresoCloud">
            <button className="back-button" onClick={() => volverSeleccion("cloud")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"AWS"} rectangulosPintados={12} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Azure"} rectangulosPintados={4} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"MongoDB Atlas"} rectangulosPintados={4} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Firebase"} rectangulosPintados={6} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Docker"} rectangulosPintados={10} />
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