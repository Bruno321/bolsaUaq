import React,{useContext,useEffect,useState} from "react";
import {DataToShowContext} from '../Context/DataToShowContext'
import axios from "axios";
import Swal from "sweetalert2";
import moment from 'moment';
import 'moment/locale/es'

const SolicitudEmpresa = (props) => {
  const { data } = props;
  const token = window.localStorage.getItem('token')
  const { nombreEmpresa,rfc,giro,razonSocial,email,telefonoEmpresa,sitioWeb,fechaRegistro, 
          direccion,colonia,ciudad,codigoPostal,estado, descripcion,
          nombreReclutador,emailReclutador,telefonoReclutador,empresaId } = data;
          
  const {setDetailSelected} = useContext(DataToShowContext)
  const [disable,setDisable] = useState(false)
  const [statusText,setStatusText] = useState("")
  
	let fecha = moment(fechaRegistro).format('dddd, MMMM D, YYYY')

  const handleAceptar = () => {
    Swal.fire({
      title: '¿Está seguro?',
			text: "Esto aceptará la solicitud de la empresa" ,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, cambiar disponibilidad',
      cancelButtonText: 'Cancelar',
			width: '50%',
			padding: '5rem 10rem',
			background: '#fff',
			customClass: {
				htmlContainer: 'htmlContainer-class',
				title: 'title-class',
				confirmButton: 'confirmButton-class',
        cancelButton: 'cancelButton-class',
				icon: 'icon-class'
			}
    }).then((result) => {
        if (result.isConfirmed) {
          axios.patch('http://localhost:3000/empresa',{data:{id:empresaId,status:0}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
          .then((response)=>{
              console.log(response)
              Swal.fire(
              {
                icon: 'success',
                title: 'Estatus actualizado',
                text: 'La empresa ha sido aceptada',
                width: '50%',
                padding: '5rem 10rem',
                background: '#fff',
                customClass: {
                  htmlContainer: 'htmlContainer-class',
                  title: 'title-class',
                  confirmButton: 'confirmButton-class',
                  icon: 'icon-class'
						    }
              }
              ).then((result) => {
                if(result.isConfirmed){
                  location.reload()
                }
              });
          }).catch((e)=>{
              console.log("error",e)
          })
      }
    })
  }

  const handleRechazar = () => {
    Swal.fire({
      title: '¿Está seguro?',
			text: "Esto rechazará la solicitud de la empresa" ,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, cambiar disponibilidad',
      cancelButtonText: 'Cancelar',
			width: '50%',
			padding: '5rem 10rem',
			background: '#fff',
			customClass: {
				htmlContainer: 'htmlContainer-class',
				title: 'title-class',
				confirmButton: 'confirmButton-class',
        cancelButton: 'cancelButton-class',
				icon: 'icon-class'
			}
    }).then((result) => {
        if (result.isConfirmed) {
          axios.patch('http://localhost:3000/empresa',{data:{id:empresaId,status:1}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
          .then((response)=>{
              console.log(response)
              Swal.fire(
                {
                  icon: 'success',
                  title: 'Estatus actualizado',
                  text: 'La empresa ha sido rechazada',
                  width: '50%',
                  padding: '5rem 10rem',
                  background: '#fff',
                  customClass: {
                    htmlContainer: 'htmlContainer-class',
                    title: 'title-class',
                    confirmButton: 'confirmButton-class',
                    icon: 'icon-class'
                  }
                }
              ).then((result) => {
                if(result.isConfirmed){
                  location.reload()
                }
              });
          }).catch((e)=>{
              console.log("error",e)
          })
      }
    })
  }
  const handleCerrar = () => {
    setDetailSelected(false)
  }

  useEffect(()=>{
    if(data.status==0 || data.status==1){
      setDisable(true)
    }
    if(data.status==0){
        setStatusText("Aceptada")
    }
    if(data.status==1){
        setStatusText("Rechazada")
    }
    if(data.status==2){
        setStatusText("Pendiente")
    }
  })

  return (
    <div style={styles.container}>
      <div style={styles.innerDiv}>
        <div style={styles.imgContainer}>
          <img
            style={styles.img}
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <b style={styles.normalText}>Nombre de la empresa:</b>
        <p style={styles.normalText}>{nombreEmpresa}</p>
        <b style={styles.normalText}>Razón social:</b>
        <p style={styles.normalText}>{razonSocial}</p>
        <b style={styles.normalText}>Giro:</b>
        <p style={styles.normalText}>{giro}</p>
        <b style={styles.normalText}>RFC:</b>
        <p style={styles.normalText}>{rfc}</p>
        <b style={styles.normalText}>Email:</b>
        <p style={styles.normalText}>{email}</p>
        <b style={styles.normalText}>Teléfono:</b>
        <p style={styles.normalText}>{telefonoEmpresa}</p>
        <b style={styles.normalText}>Página web:</b>
        <p style={styles.normalText}>{sitioWeb}</p>
        <b style={styles.normalText}>Fecha de registro:</b>
        <p style={styles.normalText}>{fecha}</p>
      </div>
      <div style={styles.innerDiv}>
        <h1> Estatus ({statusText})</h1>
        <h2 style={styles.title}>Domicilio</h2>
        <b style={styles.normalText}>Dirección:</b>
        <p style={styles.normalText}>{direccion}</p>
        <b style={styles.normalText}>Colonia:</b>
        <p style={styles.normalText}>{colonia}</p>
        <b style={styles.normalText}>Ciudad:</b>
        <p style={styles.normalText}>{ciudad}</p>
        <b style={styles.normalText}>Código postal:</b>
        <p style={styles.normalText}>{codigoPostal}</p>
        <b style={styles.normalText}>Estado:</b>
        <p style={styles.normalText}>{estado}</p>
        <h2 style={styles.title}>Descripción:</h2>
        <p style={styles.normalText}>{descripcion}</p>
      </div>
      <div style={styles.innerDiv}>
        <button style={styles.btnCerrar} onClick={handleCerrar}><h1 style={{color:"black"}}>X</h1></button>
        <h2 style={styles.title}>Nombre del reclutador:</h2>
        <p style={styles.normalText}>{nombreReclutador}</p>
        <b style={styles.normalText}>Email del reclutador:</b>
        <p style={styles.normalText}>{emailReclutador}</p>
        <b style={styles.normalText}>Teléfono del reclutador:</b>
        <p style={styles.normalText}>{telefonoReclutador}</p>
        <div style={styles.buttonsContainer}>
          
          {
              disable ? 
                '' 
              : 
              <button className={`btnAceptar ${disable ? 'btnDisabled' : "pointer"}`} disabled={disable} onClick={handleAceptar}>Aceptar empresa</button>
          }

          {
            disable ? 
              ''
            :
              <button className={`btnRechazar ${disable ? 'btnDisabled' : "pointer"}`} disabled={disable} onClick={handleRechazar}>Rechazar empresa</button>
          }
        </div>
      </div>
    </div>
  );
};

const styles = {
  container:{
    // backgroundColor:'red',
    display:'flex',
    width:'100%',
    height:'100%',
  },
  innerDiv:{
    // backgroundColor:'blue',
    width:'33.3%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems: "center",
    // justifyContent: "center",
  },
  imgContainer:{
    width: '300px',
    // height: '300px',
    borderRadius: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
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
  btnCerrar: {
    background: "none",
    border: "none",
    cursor: 'pointer',
    color: "#999",
    alignSelf: "flex-end"
  },

};

export default SolicitudEmpresa;
