import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoExtras.css'

import { volverSeleccion } from "../utils/flechaRetrocesoUtil";


function ProgresoExtras() {

    return (
        <div className="ProgresoExtras">
            <button className="back-button" onClick={() => volverSeleccion("extras")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"Bizagi Studio"} rectangulosPintados={14} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Bizagi Modeler"} rectangulosPintados={14} />
                    </div>
                </div>
                <div className="fila" >
                    <div className="columna">
                        <Progreso habilidad={"SAP"} rectangulosPintados={11} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Postman"} rectangulosPintados={12} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"PhotoShop"} rectangulosPintados={8} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Filmora"} rectangulosPintados={9} />
                    </div>
                </div>
                <div className="fila" >
                    <div className="columna">
                        <Progreso habilidad={"Ingles"} rectangulosPintados={10} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Japones"} rectangulosPintados={3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgresoExtras;