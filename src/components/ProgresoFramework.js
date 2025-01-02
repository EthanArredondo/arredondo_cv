import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoFramework.css'

import { volverSeleccion } from "../utils/flechaRetrocesoUtil";

function ProgresoFramework() {
    return (
        <div className="ProgresoFramework">
            <button className="back-button" onClick={() => volverSeleccion("frameworks")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"React"} rectangulosPintados={12} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Nodejs"} rectangulosPintados={9} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"SpringBoot"} rectangulosPintados={8} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"ASP.NET Core"} rectangulosPintados={8} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Django"} rectangulosPintados={7} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Flask"} rectangulosPintados={7} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Flutter"} rectangulosPintados={6} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Kotlin"} rectangulosPintados={6} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgresoFramework;