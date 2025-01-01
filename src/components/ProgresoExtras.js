import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoExtras.css'


function ProgresoExtras() {

    return (
        <div className="ProgresoExtras">
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Bizagi Studio"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Bizagi Modeler"} />
                    </div>
                </div>
                <div className="fila" >
                    <div className="columna">
                        <Progreso habilidad={"SAP"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Postman"} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"PhotoShop"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Filmora"} />
                    </div>
                </div>
                <div className="fila" >
                    <div className="columna">
                        <Progreso habilidad={"Ingles"} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Japones"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgresoExtras;