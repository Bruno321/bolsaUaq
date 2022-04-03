import React, { useState } from "react";
import Formulario from "./Formulario";

const CrearVacante = () => {
  return (
    <>
      <h2>Registro de Vacante</h2>
      <hr />
      <form action="" method="">
        <div>
          <p>Título de la oferta de empleo:</p>
          <Formulario />
          <p>Descripción del puesto:</p>
          <Formulario />
          <p>Requisitos:</p>
          <Formulario />
          <p>Competencias:</p>
          <Formulario />
          <p>Tipo de Contratación:</p>
          <Formulario />
          <p>Tipo de Empleo:</p>
          <Formulario />
          <p>Información</p>
          <Formulario />
        </div>
        <div>
          <div>
          <p>Estado:</p>
            <select id="estados" name="estados">
              <option value="aguascalientes">Aguascalientes</option>
              <option value="baja california">Baja California</option>
              <option value="baja california sur">Baja California Sur</option>
              <option value="campeche">Campeche</option>
              <option value="chiapas">Chiapas</option>
              <option value="chihuahua">Chiahuahua</option>
              <option value="ciudad de mexico">Ciudad de México</option>
              <option value="coahuila de zaragoza">Coahuila de Zaragoza</option>
              <option value="colima">Colima</option>
              <option value="durango">Durango</option>
              <option value="guanajuato">Guanajuato</option>
              <option value="guerrero">Guerrero</option>
              <option value="hidalgo">Hidalgo</option>
              <option value="jalisco">Jalisco</option>
              <option value="estado de mexico">Estado de México</option>
              <option value="michoacan">Michoacán</option>
              <option value="morelos">Morelos</option>
              <option value="narayit">Nayarit</option>
              <option value="nuevo leon">Nuevo León</option>
              <option value="oaxaca">Oaxaca</option>
              <option value="puebla">Puebla</option>
              <option value="queretaro">Querétaro</option>
              <option value="quintana roo">Quitana Roo</option>
              <option value="san luis potosí">San Luis Potosí</option>
              <option value="sinaloa">Sinaloa</option>
              <option value="sonora">Sonora</option>
              <option value="tabasco">Tabasco</option>
              <option value="tamaulipas">Tamaulipas</option>
              <option value="veracruz">Veracruz</option>
              <option value="yucatan">Yucatán</option>
              <option value="zacatecas">Zacatecas</option>
            </select>
            <p>Nivel de Inglés:</p>
            <select id = "nivelIngles" name = "nivelIngles">
              <option value = "basico">Básico</option>
              <option value = "intermedio">Intermedio</option>
              <option value = "avanzado">Avanzado</option>
            </select>
            <p>Carrera:</p>
            <select id = "carreras" name = "carreras">
              <option value = "licenciatura_en_informatica">Licenciatura en Informática</option>
              <option value = "licenciatura_en_administración_de_las_ti">Licenciatura en Administración de las TI</option>
              <option value = "ingenieria_de_software">Ingeniería de Software</option>
              <option value = "ingenieria_en_computacion">Ingeniería en Computación</option>
              <option value = "ingenieria_en_telecomunicaciones">Ingeniería en Telecomunicaciones y Redes</option>
              {/* <option value = "ingenieria_en_ciencia_y_analiticas_de_datos">Ingeniería en Ciencia y Analítica de Datos</option> */}
            </select>
          </div>
          <div>
            <p>Ciudad:</p>
            <Formulario />
            <p>Rango de sueldo:</p>
            <Formulario />
            <p>Área:</p>
            <Formulario />
          </div>
        </div>
        <div>
            <p>Número de personas:</p>
            <Formulario />
            <p>Prestaciones:</p>
            <Formulario />
            <p>Otros requisitos:</p>
            <Formulario />
          </div>
      </form>
    </>
  );
};

export default CrearVacante;

const styles = {
  
}
