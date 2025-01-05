import React from "react";
import '../styles/Principal.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importa un ícono específico

import Button from "../components/Button";
import ProgresoLenguajes from "../components/ProgresoLenguajes";
import ProgresoBases from "../components/ProgresoBases";
import ProgresoCloud from "../components/ProgresoCloud";
import ProgresoFramework from "../components/ProgresoFramework";
import ProgresoMetodologias from "../components/ProgresoMetodologias";
import ProgresoExtras from "../components/ProgresoExtras";

import cv_arredondo from "../documents/cv_arredondo.pdf";
import tp_arredondo from "../documents/tp_arredondo.pdf";

import { mostrarOcultarMenu } from "../utils/navbarUtils";
import { mostrarSeccionHabilidad } from "../utils/habilidadesUtil";

function Principal() {
  return (
    <div className="Principal">
      <section className="presentacion" id="presentacion">
        <div className="contenido">
          <header>
            <div className="nav-bar" onClick={mostrarOcultarMenu}>
              <div><FontAwesomeIcon icon={faBars} /></div>
            </div>
            <nav className="nav" id="nav">
              <a href="#presentacion" onClick={mostrarOcultarMenu}>Inicio</a>
              <a href="#info_personal" onClick={mostrarOcultarMenu}>Sobre mi</a>
              <a href="#habilidades" onClick={mostrarOcultarMenu}>Habilidades</a>
              <a href="#experiencia" onClick={mostrarOcultarMenu}>Resumen</a>
              <a href="#contacto" onClick={mostrarOcultarMenu}>Contacto</a>
            </nav>
          </header>
          <div className="info">
            <h1>ETHAN ARREDONDO</h1>
            <h2>Diseñador y Desarrollador de Software</h2>
            <div className="redes">
              <a href="https://www.instagram.com/ethanarredondo1/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="mailto:ethansarredondo@gmail.com?subject=Consulta"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="https://www.linkedin.com/in/ethanarredondo/"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/EthanArredondo"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
          <div className="foto">
            <img src="./ethan.png" alt=""></img>
          </div>
        </div>
      </section>
      <section className="info_personal" id="info_personal">
        <div className="contenido">
          <h2>PERFIL PROFESIONAL</h2>
          <p className="especial">Egresado de la carrera Diseño y Desarrollo de Software en Tecsup.</p>
          <p>Destacado por liderar equipos, adaptarse rápidamente a nuevos desafíos y mantener una actitud proactiva y positiva bajo presión. Poseé habilidades de comunicación efectiva y capacidad para aprender rápidamente, con el objetivo de aportar soluciones innovadoras y eficientes</p>
        </div>
      </section>
      <section className="habilidades" id="habilidades">
        <div className="contenido">
          <h2>MIS HABILIDADES</h2>
          <div className="seleccion" style={{ display: "block" }}>
            <div className="fila">
              <div className="columna">
                <Button texto={"Lenguajes de Programación"} onClick={() => mostrarSeccionHabilidad("lenguajes")} />
              </div>
              <div className="columna">
                <Button texto={"Bases de Datos"} onClick={() => mostrarSeccionHabilidad("bases")} />
              </div>
              <div className="columna">
                <Button texto={"Herramientas Cloud"} onClick={() => mostrarSeccionHabilidad("cloud")} />
              </div>
            </div>
            <div className="fila">
              <div className="columna">
                <Button texto={"Frameworks"} onClick={() => mostrarSeccionHabilidad("frameworks")} />
              </div>
              <div className="columna">
                <Button texto={"Metodologías"} onClick={() => mostrarSeccionHabilidad("metodologias")} />
              </div>
              <div className="columna">
                <Button texto={"Extras"} onClick={() => mostrarSeccionHabilidad("extras")} />
              </div>
            </div>
          </div>
          <div id="lenguajes" className="progreso-seccion" style={{ display: "none" }}><ProgresoLenguajes /></div>
          <div id="bases" className="progreso-seccion" style={{ display: "none" }}><ProgresoBases /></div>
          <div id="cloud" className="progreso-seccion" style={{ display: "none" }}><ProgresoCloud /></div>
          <div id="frameworks" className="progreso-seccion" style={{ display: "none" }}><ProgresoFramework /></div>
          <div id="metodologias" className="progreso-seccion" style={{ display: "none" }}><ProgresoMetodologias /></div>
          <div id="extras" className="progreso-seccion" style={{ display: "none" }}><ProgresoExtras /></div>
        </div>
      </section >
      <section className="experiencia" id="experiencia">
        <div className="contenido">
          <h2>PREPARACIÓN Y EXPERIENCIAS</h2>
          <div className="info">
            <div class="col">
              <span class="titulo">Educación</span>
              <table>
                <tr>
                  <td class="datos">
                    <h4>2022 - 2024</h4>
                  </td>
                  <td rowspan="2" class="descripción">
                    <h4>Diseño y Desarrollo de Software</h4>
                    <p>Egresado de la carrera de diseño y desarrollo de software posicionado en el tercio superior.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Instituto de Educación Superior Tecnológico TECSUP</h5>
                  </td>
                </tr>
              </table>
            </div>
            <div class="col">
              <span class="titulo">Experiencia Laboral</span>
              <table>
                <tr>
                  <td class="datos">
                    <h4>Enero 2024 - Abril 2024</h4>
                  </td>
                  <td rowspan="2" class="descripción">
                    <h4>Desarrollador de software</h4>
                    <p>Diseñó y desarrolló un sistema de gestión de ventas e inventarios para una empresa de ropa, optimizando el control del almacén y automatizando el registro de ventas mediante el uso de React en el frontend y Spring Boot en el backend. Asumió la responsabilidad total del ciclo de desarrollo, desde la planificación hasta la implementación.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Colebel Group E.I.R.L.<br />(Pijama June)</h5>
                  </td>
                </tr>
              </table>
              <table>
                <tr>
                  <td class="datos">
                    <h4>Agosto 2024 - Noviembre 2024</h4>
                  </td>
                  <td rowspan="2" class="descripción">
                    <h4>Coodinador de Desarrollo Frontend</h4>
                    <p>Coordinó el desarrollo frontend de una aplicación de solicitud de taxis, implementando las funcionalidades en React Native y diseñando interfaces en Figma. Su enfoque garantizó una experiencia de usuario eficiente y visualmente atractiva, cumpliendo con los objetivos del proyecto.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Jhardsystex S.A.C</h5>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="contacto" id="contacto">
        <div className="contenido">
          <h2>¡Disponibilidad Inmediata!</h2>
          <div class="fila">
            <div class="col">
              <h2>
                <i class="fa-solid fa-phone"></i> Celular:
              </h2>
              <a href="https://wa.me/51941361396" target="_blank" rel="noopener noreferrer" class="info-contacto">+51 941 361 396</a>
            </div>
            <div class="col">
              <h2>
                <i class="fa-solid fa-envelope"></i> Correo:
              </h2>
              <a href="mailto:ethansarredondo@gmail.com" target="_blank" rel="noopener noreferrer" class="info-contacto">ethansarredondo@gmail.com</a>
            </div>
            <div class="col">
              <h2>
                <i class="fa-solid fa-globe"></i> Linkidin:
              </h2>
              <a href="https://www.linkedin.com/in/ethanarredondo/" target="_blank" rel="noopener noreferrer" class="info-contacto">Ethan Arredondo</a>
            </div>
            <div class="col">
              <h2>
                <i class="fa-solid fa-globe"></i> Curriculum:
              </h2>
              <a href={cv_arredondo} target="_blank" rel="noopener noreferrer" class="info-contacto">Curriculum Arredondo</a>
            </div>
            <div class="col">
              <h2>
                <i class="fa-solid fa-globe"></i> Tarjeta Presentación:
              </h2>
              <a href={tp_arredondo} target="_blank" rel="noopener noreferrer" class="info-contacto">Tarjeta Arredondo</a>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Principal;
