import React,{useContext,useState} from "react";
import {DataToShowContext} from '../Context/DataToShowContext'
import axios from "axios";
import Swal from "sweetalert2";
import moment from 'moment';
import 'moment/locale/es'

const EditarPerfil = (props) => {
  const { data } = props;
  const { nombreEmpresa,rfc,giro,razonSocial,email,telefonoEmpresa,sitioWeb, 
    direccion,colonia,ciudad,codigoPostal,estado, descripcion,
    nombreReclutador,emailReclutador,telefonoReclutador,logo } = data;
  const [form,setForm] = useState({
    nombreEmpresa:nombreEmpresa,
    rfc: rfc,
    giro: giro,
    razonSocial: razonSocial,
    email: email,
    telefonoEmpresa: telefonoEmpresa,
    sitioWeb: sitioWeb, 
    direccion: direccion,
    colonia: colonia,
    ciudad: ciudad,
    codigoPostal: codigoPostal,
    estado: estado, 
    descripcion: descripcion,
    nombreReclutador: nombreReclutador,
    emailReclutador: emailReclutador,
    telefonoReclutador: telefonoReclutador,
  })
  const token = window.localStorage.getItem('token')
  const {setDetailSelected} = useContext(DataToShowContext)
  
    
  const handleCerrar = () => {
    setDetailSelected(false)
  }

  const handleSubmit = () => {
    console.log(form)
    Swal.fire({
      title: '¿Está seguro?',
      text: "Esta cambiara los datos editados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,guardar cambios',
      width: '45%',
      padding: '5rem 10rem',
      background: '#fff',
      customClass: {
          htmlContainer: 'htmlContainer-class',
          title: 'title-class',
          confirmButton: 'confirmButton-class',
          cancelButton: 'confirmButton-class',
          icon: 'icon-class'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        axios.put('http://localhost:3000/empresa',{form},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
       .then((response)=>{
        Swal.fire({
          icon: 'success',
          title: 'Cambios guardados correctamente',
          // text: 'En caso de aprobarse la solicitud, esta se publicará en el sistema',
          width: '50%',
          padding: '5rem 10rem',
          background: '#fff',
          customClass: {
              htmlContainer: 'htmlContainer-class',
              title: 'title-class',
              confirmButton: 'confirmButton-class',
              icon: 'icon-class'
          }
        }).then((result) => {
          if(result.isConfirmed){
            location.reload()
          }
          /* setTimeout(()=>{
					  location.reload()
					},2000) */
        });
       }).catch((e)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salio mal',
          width: '45%',
          padding: '5rem 10rem',
          background: '#fff',
          customClass: {
              htmlContainer: 'htmlContainer-class',
              title: 'title-class',
              confirmButton: 'confirmButton-class',
              icon: 'icon-class'
          }
        })
       })
      }
    })
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerDiv}>
        <div style={styles.imgContainer}>
          <img
            style={styles.img}
            src={`http://localhost:3000/${logo}`}
            alt=""
          />
        </div>
        <b style={styles.normalText}>Nombre de la empresa:</b>
        <input style={styles.normalText} value={form.nombreEmpresa} onChange={(e)=>{setForm({...form,nombreEmpresa:e.target.value});}}></input>
        <b style={styles.normalText}>Razón social:</b>
        <input style={styles.normalText} value={form.razonSocial} onChange={(e)=>{setForm({...form,razonSocial:e.target.value});}}></input>
        <b style={styles.normalText}>Giro:</b>
        <input style={styles.normalText} value={form.giro} onChange={(e)=>{setForm({...form,giro:e.target.value});}}></input>
        <b style={styles.normalText}>RFC:</b>
        <input style={styles.normalText} value={form.rfc} onChange={(e)=>{setForm({...form,rfc:e.target.value});}}></input>
        <b style={styles.normalText}>Email:</b>
        <input style={styles.normalText} value={form.email} onChange={(e)=>{setForm({...form,email:e.target.value});}}></input>
        <b style={styles.normalText}>Teléfono:</b>
        <input style={styles.normalText} value={form.telefonoEmpresa} onChange={(e)=>{setForm({...form,telefonoEmpresa:e.target.value});}}></input>
        <b style={styles.normalText}>Página web:</b>
        <input style={styles.normalText} value={form.sitioWeb} onChange={(e)=>{setForm({...form,sitioWeb:e.target.value});}}></input>
      </div>
      <div style={styles.innerDiv}>
        <h2 style={styles.title}>Domicilio</h2>
        <b style={styles.normalText}>Dirección:</b>
        <input style={styles.normalText} value={form.direccion} onChange={(e)=>{setForm({...form,direccion:e.target.value});}}></input>
        <b style={styles.normalText}>Colonia:</b>
        <input style={styles.normalText} value={form.colonia} onChange={(e)=>{setForm({...form,colonia:e.target.value});}}></input>
        <b style={styles.normalText}>Ciudad:</b>
        <input style={styles.normalText} value={form.ciudad} onChange={(e)=>{setForm({...form,ciudad:e.target.value});}}></input>
        <b style={styles.normalText}>Código postal:</b>
        <input style={styles.normalText} value={form.codigoPostal} onChange={(e)=>{setForm({...form,codigoPostal:e.target.value});}}></input>
        <b style={styles.normalText}>Estado:</b>
        <input style={styles.normalText} value={form.estado} onChange={(e)=>{setForm({...form,estado:e.target.value});}}></input>
        <h2 style={styles.title}>Descripción:</h2>
        <input style={styles.normalText} value={form.descripcion} onChange={(e)=>{setForm({...form,descripcion:e.target.value});}}></input>
      </div>
      <div style={styles.innerDiv}>
        <button style={styles.btnCerrar} onClick={handleCerrar}><h1 style={{color:"black"}}>X</h1></button>
        <h2 style={styles.title}>Nombre del reclutador:</h2>
        <input style={styles.normalText} value={form.nombreReclutador} onChange={(e)=>{setForm({...form,nombreReclutador:e.target.value});}}></input>
        <b style={styles.normalText}>Email del reclutador:</b>
        <input style={styles.normalText} value={form.emailReclutador} onChange={(e)=>{setForm({...form,emailReclutador:e.target.value});}}></input>
        <b style={styles.normalText}>Teléfono del reclutador:</b>
        <input style={styles.normalText} value={form.telefonoReclutador} onChange={(e)=>{setForm({...form,telefonoReclutador:e.target.value});}}></input>
        <div style={styles.buttonsContainer}>
              <button style={styles.button} className = "btnHover" onClick={handleSubmit}>Guardar cambios</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container:{
    display:'flex',
    width:'100%',
    height:'100%',
    padding:"20px"
  },
  innerDiv:{
    width:'33.3%',
    height:'88vh',
    display:'flex',
    flexDirection:'column',
    alignItems: "center",
    marginTop:"20px",
  },
  imgContainer:{
    width: '300px',
    borderRadius: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    // marginTop:"20px",
  },
  img:{
    width: "100%",
    height: "auto",
  },
  title: {
    fontSize: '25px',
    marginBottom: '4px',
    marginTop:'10px'
  },
  normalText: {
    fontSize: '16px',
    marginBottom: '2px',
    marginTop:'5px'
  },
  buttonsContainer:{
    marginTop: 'auto',
    display: 'flex',
  },
  button: {
    width: "150px",
    height: "40px",
    margin: "10px",
    borderRadius: "6px",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "#5F4FEB",
    color: "#fff",
    cursor: "pointer",
  },
  btnCerrar: {
    background: "none",
    border: "none",
    cursor: 'pointer',
    color: "#999",
    alignSelf: "flex-end",
    marginLeft:"20px"
  },

};

export default EditarPerfil;
