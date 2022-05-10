import React, { useState,useContext,useEffect } from "react";
import {DetailContext} from '../Context/DetailContext'
import {DataToShowContext} from '../Context/DataToShowContext'

const CrearVacante = () => {

  const [form,setForm] = useState({
        titulo: '', 
        description: '', 
        requisitos: '', 
        competencias: '', 
        tipoContratacion: '', 
        tipoEmpleo: '', 
        informacion: '', 
        estado: 'aguascalientes', 
        ciudad: '', 
        nivelIngles: 'Básico', 
        rangoSueldo: '', 
        carrera: 'licenciatura_en_informatica', 
        area: '', 
        horario: "",
        contacto:"",
        numeroPersonas: '', 
        prestaciones: '', 
        otrosRequisitos: '',
        nombreEmpresa: "",
        id:0
      })
  const {data,setData} = useContext(DetailContext)
  const {detailSelected} = useContext(DataToShowContext)

  // if(detailSelected){
  //   console.log(data)
  //   setForm(data)
  // }

  useEffect(()=>{
    if(detailSelected){
      console.log(data)
      setForm(data)
    }else{
      // aca usamos el otro form
      setForm({
        titulo: '', 
        description: '', 
        requisitos: '', 
        competencias: '', 
        tipoContratacion: '', 
        tipoEmpleo: '', 
        informacion: '', 
        estado: 'asd', 
        ciudad: '', 
        nivelIngles: 'asd', 
        rangoSueldo: '', 
        carrera: 'asd', 
        area: '', 
        horario: "",
        contacto:"",
        numeroPersonas: '', 
        prestaciones: '', 
        otrosRequisitos: '',
        nombreEmpresa: "",
        id:0
      })
    }
  },[detailSelected])
  const handleClick = () => {
    console.log(form)
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registro de Vacante</h2>

      <div>
        <div>
          <p style={styles.parrafo}>Título de la oferta de empleo:</p>
          <input type="text" placeholder="Ingresa el título de la oferta de empleo" style={styles.input} value={form.titulo} onChange={(e)=>setForm({...form,titulo:e.target.value})}/> 
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
              <option value="aguascalientes">Aguascalientes</option>
              <option value="baja_california">Baja California</option>
              <option value="baja_california sur">Baja California Sur</option>
              <option value="campeche">Campeche</option>
              <option value="chiapas">Chiapas</option>
              <option value="chihuahua">Chiahuahua</option>
              <option value="ciudad_de_mexico">Ciudad de México</option>
              <option value="coahuila_de_zaragoza">Coahuila de Zaragoza</option>
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
              <option value="san_luis_potosí">San Luis Potosí</option>
              <option value="sinaloa">Sinaloa</option>
              <option value="sonora">Sonora</option>
              <option value="tabasco">Tabasco</option>
              <option value="tamaulipas">Tamaulipas</option>
              <option value="veracruz">Veracruz</option>
              <option value="yucatan">Yucatán</option>
              <option value="zacatecas">Zacatecas</option>
            </select>

            <p style={styles.parrafo}>Nivel de Inglés:</p>
            <select id = "nivelIngles" name = "nivelIngles" style={styles.select} value={form.nivelIngles} onChange={(e)=>setForm({...form,nivelIngles:e.target.value})}>
              <option value = "basico">Básico</option>
              <option value = "intermedio">Intermedio</option>
              <option value = "avanzado">Avanzado</option>
            </select>

            <p style={styles.parrafo}>Carrera:</p>
            <select id = "carreras" name = "carreras" style={styles.select} value={form.carrera} onChange={(e)=>setForm({...form,carrera:e.target.value})}>
              <option value = "licenciatura_en_informatica">Licenciatura en Informática</option>
              <option value = "licenciatura_en_administración_de_las_ti">Licenciatura en Administración de las TI</option>
              <option value = "ingenieria_de_software">Ingeniería de Software</option>
              <option value = "ingenieria_en_computacion">Ingeniería en Computación</option>
              <option value = "ingenieria_en_telecomunicaciones">Ingeniería en Telecomunicaciones y Redes</option>
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
          <button style={styles.buttonBack}>Regresar</button>
          <button style={styles.button} onClick={handleClick}>Registrar Vacante</button>
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
