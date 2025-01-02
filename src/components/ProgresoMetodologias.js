import Progreso from "./Progreso"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import '../styles/ProgresoMetodologias.css'

import { volverSeleccion } from "../utils/flechaRetrocesoUtil";


function ProgresoMetodologias() {
    return (
        <div className="ProgresoMetodologias">
            <button className="back-button" onClick={() => volverSeleccion("metodologias")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="contenido">
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"SCRUM"} rectangulosPintados={8} />
                    </div>
                    <div className="columna">
                        <Progreso habilidad={"Agile"} rectangulosPintados={8} />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <Progreso habilidad={"RUP"} rectangulosPintados={6} />
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