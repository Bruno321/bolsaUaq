import React, { useState,useContext,useEffect } from "react";
import {DetailContext} from '../Context/DetailContext'
import {DataToShowContext} from '../Context/DataToShowContext'
import axios from "axios";
import Swal from "sweetalert2";

const CrearVacante = () => {

  const token = window.localStorage.getItem('token')

  let form,setForm
  const {formm,setFormm,data,setData} = useContext(DetailContext)
  const {detailSelected,setDetailSelected} = useContext(DataToShowContext)

  if(detailSelected){
    form = data
    setForm = setData
  }else{
    form = formm
    setForm = setFormm
  }

  const handleClick = () => {
    axios.post('http://localhost:3000/vacante',{form},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
     .then((response)=>{
        
      Swal.fire(
        'Solicitud enviada correctamente',
        'Este atento a su correo electronico',
        'success'
      )
     }).catch((e)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal',
      })
     })
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registro de Vacante</h2>

      <div>
        <div>
          <p style={styles.parrafo}>Título de la oferta de empleo:</p>
          <input type="text" placeholder="Ingresa el título de la oferta de empleo" style={styles.input} value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/> 
          <p style={styles.parrafo}>Descripción del puesto:</p>
          <input type="text" placeholder="Ingresa la descripción del puesto" style={styles.inputLarge} value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}/>
          <p style={styles.parrafo}>Requisitos:</p>
          <input type="text" placeholder="Ingresa los requisitos del puesto" style={styles.inputLarge} value={form.requisitos} onChange={(e)=>setForm({...form,requisitos:e.target.value})}/>
          <p style={styles.parrafo}>Competencias:</p>
          <input type="text" placeholder="Ingresa las competencias del puesto" style={styles.inputLarge} value={form.competencias} onChange={(e)=>setForm({...form,competencias:e.target.value})}/>
          <p style={styles.parrafo}>Tipo de Contratación:</p>
          <input type="text" placeholder="Ingresa el tipo de contratación" style={styles.input} value={form.tipoContratacion} onChange={(e)=>setForm({...form,tipoContratacion:e.target.value})}/>
          <p style={styles.parrafo}>Tipo de Empleo:</p>
          <input type="text" placeholder="Ingresa el tipo de empleo" style={styles.input} value={form.tipoEmpleo} onChange={(e)=>setForm({...form,tipoEmpleo:e.target.value})}/>
          <p style={styles.parrafo}>Información</p>
          <input type="text" placeholder="Ingresa la información" style={styles.inputLarge} value={form.informacion} onChange={(e)=>setForm({...form,informacion:e.target.value})}/>
        </div>

        <div style={{display: "flex", width: "100%", height: "auto", margin: "10px 0px"}}>
          <div style={{width: "50%"}}>
            <p style={styles.parrafo}>Estado:</p>
            <select id="estados" name="estados" style={styles.select} value={form.estado} onChange={(e)=>setForm({...form,estado:e.target.value})}>
              <option value="Aguascalientes">Aguascalientes</option>
              <option value="Baja California">Baja California</option>
              <option value="Baja California Sur">Baja California Sur</option>
              <option value="Campeche">Campeche</option>
              <option value="Chiapas">Chiapas</option>
              <option value="Chiahuahua">Chiahuahua</option>
              <option value="Ciudad de México">Ciudad de México</option>
              <option value="Coahuila de Zaragoza">Coahuila de Zaragoza</option>
              <option value="Colima">Colima</option>
              <option value="Durango">Durango</option>
              <option value="Guanajuato">Guanajuato</option>
              <option value="Guerrero">Guerrero</option>
              <option value="Hidalgo">Hidalgo</option>
              <option value="Jalisco">Jalisco</option>
              <option value="Estado de México">Estado de México</option>
              <option value="Michoacan">Michoacán</option>
              <option value="Morelos">Morelos</option>
              <option value="Nayarit">Nayarit</option>
              <option value="Nuevo León">Nuevo León</option>
              <option value="Oaxaca">Oaxaca</option>
              <option value="Puebla">Puebla</option>
              <option value="Querétaro">Querétaro</option>
              <option value="Quitana Roo">Quitana Roo</option>
              <option value="San Luis Potos">San Luis Potosí</option>
              <option value="Sinaloa">Sinaloa</option>
              <option value="Sonora">Sonora</option>
              <option value="Tabasco">Tabasco</option>
              <option value="Tamaulipas">Tamaulipas</option>
              <option value="Veracruz">Veracruz</option>
              <option value="Yucatán">Yucatán</option>
              <option value="Zacatecas">Zacatecas</option>
            </select>

            <p style={styles.parrafo}>Nivel de Inglés:</p>
            <select id = "nivelIngles" name = "nivelIngles" style={styles.select} value={form.nivelIngles} onChange={(e)=>setForm({...form,nivelIngles:e.target.value})}>
              <option value = "Básico">Básico</option>
              <option value = "Intermedio">Intermedio</option>
              <option value = "Avanzado">Avanzado</option>
            </select>

            <p style={styles.parrafo}>Carrera:</p>
            <select id = "carreras" name = "carreras" style={styles.select} value={form.carrera} onChange={(e)=>setForm({...form,carrera:e.target.value})}>
              <option value = "Licenciatura en Informática">Licenciatura en Informática</option>
              <option value = "Licenciatura en Administración de las TI">Licenciatura en Administración de las TI</option>
              <option value = "Ingeniería de Software">Ingeniería de Software</option>
              <option value = "Ingeniería en Computación">Ingeniería en Computación</option>
              <option value = "Ingeniería en Telecomunicaciones y Redes">Ingeniería en Telecomunicaciones y Redes</option>
              {/* <option value = "ingenieria_en_ciencia_y_analiticas_de_datos">Ingeniería en Ciencia y Analítica de Datos</option> */}
            </select>
            <p style={styles.parrafo}>Contacto:</p>
            <input type="text" placeholder="Ingresa el numero para contactar sobre este puesto" style={styles.select}  value={form.contacto} onChange={(e)=>setForm({...form,contacto:e.target.value})}/>
          </div>

          <div style={{width: "49%"}}>
            <p style={styles.parrafo}>Ciudad:</p>
            <input type="text" placeholder="Ingresa la ciudad" style={styles.input} value={form.ciudad} onChange={(e)=>setForm({...form,ciudad:e.target.value})}/>
            <p style={styles.parrafo}>Rango de sueldo:</p>
            <input type="text" placeholder="Ingresa el rango de sueldo" style={styles.input} value={form.rangoSueldo} onChange={(e)=>setForm({...form,rangoSueldo:e.target.value})}/>
            <p style={styles.parrafo}>Área:</p>
            <input type="text" placeholder="Ingresa el área" style={styles.input} value={form.area} onChange={(e)=>setForm({...form,area:e.target.value})}/>
            <p style={styles.parrafo}>Horario:</p>
            <input type="text" placeholder="Ingresa el horario" style={styles.input} value={form.horario} onChange={(e)=>setForm({...form,horario:e.target.value})}/>
          </div>
        </div>

        <div>
          <p style={styles.parrafo}>Número de personas:</p>
          <input type="text" placeholder="Ingresa el número de personas" style={styles.input} value={form.numeroPersonas} onChange={(e)=>setForm({...form,numeroPersonas:e.target.value})}/>
          <p style={styles.parrafo}>Prestaciones:</p>
          <input type="text" placeholder="Ingresa las prestaciones" style={styles.input} value={form.prestaciones} onChange={(e)=>setForm({...form,prestaciones:e.target.value})}/>
          
          <p style={styles.parrafo}>Otros requisitos:</p>
          <input type="text" placeholder="Ingresa los requisitos" style={styles.inputLarge} value={form.otrosRequisitos} onChange={(e)=>setForm({...form,otrosRequisitos:e.target.value})}/>
        </div>


        <div style={{display: "flex", width: "100%", marginTop: "30px", justifyContent: "flex-end"}}>
          {detailSelected ? 
          <>
            <button style={styles.buttonBack} className="btnHover" onClick={()=>setDetailSelected(false)}>Regresar</button>
            <button style={styles.button} onClick={handleClick} className="btnHover">Editar Vacante</button>
          </>
          :
          <button style={styles.button} onClick={handleClick} className="btnHover">Registrar Vacante</button>
          
          }
          
        </div>

      </div>
    </div>
  );
};

export default CrearVacante;

const styles = {
  container: {
    // maxWidth: "980px",
    // minWidth: "320px",
    height: "100%", 
    width: "100%" ,
    margin: "14px", 
    border: "1px solid black", 
    // padding: "20px 50px 40px 50px",
    padding: "30px 60px 50px 60px",

  },
  parrafo: {
    // fontSize: "1.8rem",
    fontSize: "2.2rem",
    fontWeight: "300",
  },
  title: {
    // fontSize: "2.4rem",
    fontSize: "2.8rem",
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
