import React from "react";
import '../styles/Principal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importa un ícono específico


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
          <h3>Sobre mi</h3>
          <h2>PERFIL PROFESIONAL</h2>
          <p className="especial">Egresado de la carrera Diseño y Desarrollo de Software en Tecsup.</p>
          <p>Destacado por liderar equipos, adaptarse rápidamente a nuevos desafíos y mantener una actitud proactiva y positiva bajo presión. Poseé habilidades de comunicación efectiva y capacidad para aprender rápidamente, con el objetivo de aportar soluciones innovadoras y eficientes</p>
        </div>
      </section>
      <section className="habilidades">
        <div className="contenido">
          <h3>Mis habilidades</h3>
          <h2>Me especializo en</h2>
          <div className="fila">
            <div className="columna">
              <h4>HTML/CSS</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>JAVASCRIPT</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>JAVA</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
          </div>
          <div className="fila">
            <div className="columna">
              <h4>PYTHON</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>PHP</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>C</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
          </div>
          <div className="fila">
            <div className="columna">
              <h4>MYSQL</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>MONGODB</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>ORACLE</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
          </div>
          <h2>OTRAS HABILIDADES</h2>
          <div className="fila">
            <div className="columna">
              <h4>DOCKER</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>3T</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
          </div>
          <div className="fila">
            <div className="columna">
              <h4>SAP</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>BIZAGI</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
          </div>
          <div className="fila">
            <div className="columna">
              <h4>PHOTOSHOP</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
            <div className="columna">
              <h4>POSTMAN</h4>
              <div className="barra_progreso">
                <div className="barra"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experiencia">
        <div className="contenido">
          <h3>Resumen</h3>
          <h2>PREPARACIÓN Y EXPERIENCIAS</h2>
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
    </div>
  );
}

export default Principal;
