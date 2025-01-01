import React from "react";
import '../styles/Principal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUser, faLocation, faFlag } from '@fortawesome/free-solid-svg-icons'; // Importa un ícono específico

import Button from "../components/Button";
import ProgresoLenguajes from "../components/ProgresoLenguajes";
import ProgresoBases from "../components/ProgresoBases";
import ProgresoCloud from "../components/ProgresoCloud";
import ProgresoFramework from "../components/ProgresoFramework";
import ProgresoMetodologias from "../components/ProgresoMetodologias";
import ProgresoExtras from "../components/ProgresoExtras";

function Principal() {
  return (
    <div className="Principal">
      <section className="presentacion">
        <div className="contenido">
          <header>
            <div className="nav-bar" onclick="mostrarOcultarMenu()">
              <a href=""><FontAwesomeIcon icon={faBars} /></a>
            </div>
            <nav className="nav" id="nav">
              <a href="#inicio">Inicio</a>
              <a href="#sobremi">Sobre mi</a>
              <a href="#habilidades">Habilidades</a>
              <a href="#resumen">Resumen</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </header>
          <div className="info">
            <h1>ETHAN ARREDONDO</h1>
            <h2>Diseñador y Desarrollador de Software</h2>
            <div className="redes">
              <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href=""><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
          <div className="foto">
            <img src="./ethan.png" alt=""></img>
          </div>
        </div>
      </section>
      <section className="info_personal">
        <div className="contenido">
          <h2>PERFIL PROFESIONAL</h2>
          <p className="especial">Egresado de la carrera Diseño y Desarrollo de Software en Tecsup.</p>
          <p>Destacado por liderar equipos, adaptarse rápidamente a nuevos desafíos y mantener una actitud proactiva y positiva bajo presión. Poseé habilidades de comunicación efectiva y capacidad para aprender rápidamente, con el objetivo de aportar soluciones innovadoras y eficientes</p>
        </div>
      </section>
      <section className="habilidades">
        <div className="contenido">
          <h2>MIS HABILIDADES</h2>
          <div className="seleccion" style={{ display: "" }}>
            <div className="fila">
              <div className="columna">
                <Button texto={"Lenguajes de Programación"} />
              </div>
              <div className="columna">
                <Button texto={"Bases de Datos"} />
              </div>
              <div className="columna">
                <Button texto={"Herramientas Cloud"} />
              </div>
            </div>
            <div className="fila">
              <div className="columna">
                <Button texto={"Frameworks"} />
              </div>
              <div className="columna">
                <Button texto={"Metodologías"} />
              </div>
              <div className="columna">
                <Button texto={"Extras"} />
              </div>
            </div>
          </div>
          <div style={{ display: "none" }}><ProgresoLenguajes /></div>
          <div style={{ display: "none" }}><ProgresoBases /></div>
          <div style={{ display: "none" }}><ProgresoCloud /></div>
          <div style={{ display: "none" }}><ProgresoFramework /></div>
          <div style={{ display: "none" }}><ProgresoMetodologias /></div>
          <div style={{ display: "none" }}><ProgresoExtras /></div>
        </div>
      </section >
      <section className="experiencia">
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
      <section className="certificados">
        <div className="contenido">
          <h3>Mis certificados</h3>
          <h2>HE TOMADO CURSOS DE</h2>
          <div className="carrusel">
            <div className="certificado"></div>
          </div>
        </div>
      </section>
      <section className="proyectos">
        <div className="contenido">
          <h3>Proyectos personales</h3>
          <h2>PROYECTOS PERSONALES DESARROLLADOS</h2>
        </div>
      </section>
      <section className="contacto">
        <div className="contenido">
          <h2 class="titulo-seccion">Contacto</h2>
          <h3>Ponte en contacto ahora mismo!</h3>
          <div class="fila">
            <div class="col">
              <h2>
                <i class="fa-solid fa-phone"></i> Teléfono
              </h2>
              <span class="info-contacto">11223344</span>
            </div>
            <div class="col">
              <h2>
                <i class="fa-solid fa-envelope"></i> Correo
              </h2>
              <span class="info-contacto">ethansarredondo@gmail</span>
            </div>
            <div class="col">
              <h2>
                <i class="fa-solid fa-globe"></i> Página Web
              </h2>
              <span class="info-contacto">ethanarredondo.com</span>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Principal;
