import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoFramework.css'


function ProgresoFramework() {
    return (
        <div className="ProgresoFramework">
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"React"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Nodejs"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"SpringBoot"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"ASP.NET Core"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Django"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Flask"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Flutter"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Kotlin"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgresoFramework;