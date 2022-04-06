import React, { useState } from "react";
import Formulario from "./Formulario";

const CrearVacante = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registro de Vacante</h2>

      <form>
        <div>
          <p style={styles.parrafo}>Título de la oferta de empleo:</p>
          <input type="text" placeholder="Ingresa el título de la oferta de empleo" style={styles.input} /> 
          <p style={styles.parrafo}>Descripción del puesto:</p>
          <input type="text" placeholder="Ingresa la descripción del puesto" style={styles.inputLarge} />
          <p style={styles.parrafo}>Requisitos:</p>
          <input type="text" placeholder="Ingresa los requisitos del puesto" style={styles.inputLarge} />
          <p style={styles.parrafo}>Competencias:</p>
          <input type="text" placeholder="Ingresa las competencias del puesto" style={styles.inputLarge} />
          <p style={styles.parrafo}>Tipo de Contratación:</p>
          <input type="text" placeholder="Ingresa el tipo de contratación" style={styles.input} />
          <p style={styles.parrafo}>Tipo de Empleo:</p>
          <input type="text" placeholder="Ingresa el tipo de empleo" style={styles.input} />
          <p style={styles.parrafo}>Información</p>
          <input type="text" placeholder="Ingresa la información" style={styles.inputLarge} />
        </div>

        <div style={{display: "flex", width: "100%", height: "auto", margin: "10px 0px"}}>
          <div style={{width: "50%"}}>
            <p style={styles.parrafo}>Estado:</p>
            <select id="estados" name="estados" style={styles.select}>
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

            <p style={styles.parrafo}>Nivel de Inglés:</p>
            <select id = "nivelIngles" name = "nivelIngles" style={styles.select}>
              <option value = "basico">Básico</option>
              <option value = "intermedio">Intermedio</option>
              <option value = "avanzado">Avanzado</option>
            </select>

            <p style={styles.parrafo}>Carrera:</p>
            <select id = "carreras" name = "carreras" style={styles.select}>
              <option value = "licenciatura_en_informatica">Licenciatura en Informática</option>
              <option value = "licenciatura_en_administración_de_las_ti">Licenciatura en Administración de las TI</option>
              <option value = "ingenieria_de_software">Ingeniería de Software</option>
              <option value = "ingenieria_en_computacion">Ingeniería en Computación</option>
              <option value = "ingenieria_en_telecomunicaciones">Ingeniería en Telecomunicaciones y Redes</option>
              {/* <option value = "ingenieria_en_ciencia_y_analiticas_de_datos">Ingeniería en Ciencia y Analítica de Datos</option> */}
            </select>
          </div>

          <div style={{width: "49%"}}>
            <p style={styles.parrafo}>Ciudad:</p>
            <input type="text" placeholder="Ingresa la ciudad" style={styles.input} />
            <p style={styles.parrafo}>Rango de sueldo:</p>
            <input type="text" placeholder="Ingresa el rango de sueldo" style={styles.input} />
            <p style={styles.parrafo}>Área:</p>
            <input type="text" placeholder="Ingresa el área" style={styles.input} />
          </div>
        </div>

        <div>
          <p style={styles.parrafo}>Número de personas:</p>
          <input type="text" placeholder="Ingresa el número de personas" style={styles.input} />
          <p style={styles.parrafo}>Prestaciones:</p>
          <input type="text" placeholder="Ingresa las prestaciones" style={styles.input} />
          <p style={styles.parrafo}>Otros requisitos:</p>
          <input type="text" placeholder="Ingresa los requisitos" style={styles.inputLarge} />
        </div>

        <div style={{display: "flex", width: "100%", marginTop: "30px", justifyContent: "flex-end"}}>
          <button style={styles.buttonBack}>Regresar</button>
          <button style={styles.button}>Registrar Vacante</button>
        </div>

      </form>
    </div>
  );
};

export default CrearVacante;

const styles = {
  container: {
    maxWidth: "980px",
    minWidth: "320px",
    height: "100%", 
    margin: "14px", 
    border: "1px solid black", 
    padding: "20px 50px 40px 50px",
  },
  parrafo: {
    fontSize: "1.8rem",
    fontWeight: "300",
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: "400",
    margin: "20px 0px",
    paddingBottom: "10px",
    borderBottom: "1px solid #505050",
  },
  input: {
    width: "98%",
    height: "30px",
    paddingLeft: "10px",
    border: "1px solid #505050",
    borderRadius: "5px",
    margin: "10px 0px 15px 0px",
  },
  inputLarge: {
    width: "98%",
    height: "60px",
    paddingLeft: "10px",
    border: "1px solid #505050",
    borderRadius: "5px",
    margin: "10px 0px",
  },
  select: {
    width: "95%",
    height: "32px",
    color: "#505050",
    margin: "10px 0px 15px 0px",
    paddingLeft: "10px",
    borderRadius: "5px",
  },
  buttonBack : {
    width: "36%",
    height: "40px",
    color: "var(--purple)",
    background: "white",
    border: "1px solid var(--purple)",
  },
  button : {
    width: "36%",
    height: "40px",
    marginLeft: "10px",
    background: "var(--purple)",
    color: "white",
    border: "none",
  },
};
