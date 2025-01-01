import React from "react";
import '../styles/Principal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUser, faLocation, faFlag } from '@fortawesome/free-solid-svg-icons'; // Importa un ícono específico

import Button from "../components/Button";
import ProgresoLenguajes from "../components/ProgresoLenguajes";
import ProgresoBases from "../components/ProgresoBases";

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
          <div className="seleccion" style={{ display: "none" }}>
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
          <div style={{ display: "" }}><ProgresoBases /></div>
        </div>
      </section >
      <section className="experiencia">
        <div className="contenido">
          <h3>Resumen</h3>
          <h2>PREPARACIÓN Y EXPERIENCIAS</h2>
          <div className="info">
            <div class="col">
              <span class="titulo">Educación</span>
              <table>
                <tr>
                  <td class="datos">
                    <h3>2006-2010</h3>
                  </td>
                  <td rowspan="2" class="descripción">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente eaque pariatur reiciendis. Laboriosam adipisci eos eaque, at culpa, minima nostrum quam odit blanditiis, architecto voluptatem. Quaerat libero unde odit quos!
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Lic. en computación</h4>
                    <p>Universidad de San Juan</p>
                    <span class="promedio">8.9PG</span>
                  </td>
                </tr>
              </table>
              <table>
                <tr>
                  <td class="datos">
                    <h3>2010-2015</h3>
                  </td>
                  <td rowspan="2" class="descripción">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente eaque pariatur reiciendis. Laboriosam adipisci eos eaque, at culpa, minima nostrum quam odit blanditiis, architecto voluptatem. Quaerat libero unde odit quos!
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Programador FS</h4>
                    <p>Udemy Cursos</p>
                    <span class="promedio">8.9PG</span>
                  </td>
                </tr>
              </table>
            </div>
            <div class="col">
              <span class="titulo">Experiencia Laboral</span>
              <table>
                <tr>
                  <td class="datos">
                    <h3>3 años</h3>
                  </td>
                  <td rowspan="2" class="descripción">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente eaque pariatur reiciendis. Laboriosam adipisci eos eaque, at culpa, minima nostrum quam odit blanditiis, architecto voluptatem. Quaerat libero unde odit quos!
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Mercado Libre</h4>
                    <p>Programador Junior</p>
                    <span class="promedio">8.9PG</span>
                  </td>
                </tr>
              </table>
              <table>
                <tr>
                  <td class="datos">
                    <h3>2 años</h3>
                  </td>
                  <td rowspan="2" class="descripción">
                    Loredsdsdm, ipsum dolor sit amet consectetur adipisicing elit. Sapiente eaque pariatur reiciendis. Laboriosam adipisci eos eaque, at culpa, minima nostrum quam odit blanditiis, architecto voluptatem. Quaerat libero unde odit quos!
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Software inc. FS</h4>
                    <p>Diseñador principal</p>
                    <span class="promedio">8.9PG</span>
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
