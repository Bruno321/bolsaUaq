import React, { useContext, useState } from "react";
import { DetailContext } from '../Context/DetailContext'
import { DataToShowContext } from '../Context/DataToShowContext'
import DropDownSetStatus from "./DropDownSetStatus";
import Swal from "sweetalert2";
import axios from "axios";
import moment from 'moment';
import 'moment/locale/es'

const InfoCard = ({ props,filterOption }) => {
	const token = window.localStorage.getItem('token')

	let fecha = moment(props.fechaRegistro).format('dddd, MMMM D, YYYY')

	const { setData } = useContext(DetailContext)
	const { optionSelected, setDetailSelected } = useContext(DataToShowContext)
	// Una vacante aceptada puede tener status 0 : Disponible, 1: Llena
	const [status,setStatus] = useState(props.isDisponible)
	const onClickDetails = () => {
	}
	const handleDetailButton = () => {
		setData(props)
		setDetailSelected(true)
	}

	const handleAceptarE = () => {
		Swal.fire(
			{
				icon: 'warning',
				title: '¿Está seguro?',
				text: 'Esto aceptará la solicitud de la empresa',
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
			}
		).then((result) => {
			if (result.isConfirmed) {
			  axios.patch('http://localhost:3000/empresa',{data:{id:props.empresaId,status:0}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
			  .then((response)=>{
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
					/* setTimeout(()=>{
					  location.reload()
					},2000) */
			  }).catch((e)=>{
				  console.log("error",e)
			  })
		  }
		})
	  }
	
	  const handleRechazarE = () => {
		Swal.fire(
			{
				icon: 'warning',
				title: '¿Está seguro?',
				text: 'Esto rechazará la solicitud de la empresa',
				width: '50%',
				padding: '5rem 10rem',
				background: '#fff',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Cancelar',
				confirmButtonText: 'Sí, cambiar disponibilidad',
				customClass: {
					htmlContainer: 'htmlContainer-class',
					title: 'title-class',
					confirmButton: 'confirmButton-class',
					cancelButton: 'cancelButton-class',
					icon: 'icon-class'
				}
			}
		).then((result) => {
			if (result.isConfirmed) {
			  axios.patch('http://localhost:3000/empresa',{data:{id:props.empresaId,status:1}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
			  .then((response)=>{
				  Swal.fire({
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
					}).then((result) => {
						if(result.isConfirmed){
							location.reload()
						}
					});
					/* setTimeout(()=>{
					  location.reload()
					},2000) */
			  }).catch((e)=>{
				  console.log("error",e)
			  })
		  }
		})
	  }

	  const handleAceptarV = () => {
		Swal.fire(
			{
				title: '¿Está seguro?',
				text: "Esto aceptará la solicitud de la vacante" ,
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Cancelar',
				confirmButtonText: 'Sí, cambiar disponibilidad',
						icon: 'warning',
						title: '¿Está seguro?',
						text: 'Esto aceptará la solicitud de la vacante',
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
			}
		).then((result) => {
			if (result.isConfirmed) {
			  axios.patch('http://localhost:3000/vacantes',{data:{id:props.vacanteId,status:0}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
			  .then((response)=>{
				  Swal.fire({
					icon: 'success',
					title: 'Estatus actualizado',
					text: 'La vacante ha sido aceptada',
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
				  });
					/* setTimeout(()=>{
					  location.reload()
					},2000) */
			  }).catch((e)=>{
				  console.log("error",e)
			  })
		  }
		})
	  }
	
	  const handleRechazarV = () => {
		Swal.fire({
			title: '¿Está seguro?',
			text: "Esto rechazará la solicitud de la vacante" ,
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
			  axios.patch('http://localhost:3000/vacantes',{data:{id:props.vacanteId,status:1}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
			  .then((response)=>{
				  Swal.fire({
					icon: 'success',
					title: 'Estatus actualizado',
					text: 'La vacante ha sido rechazada',
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
				  });
					/* setTimeout(()=>{
					  location.reload()
					},2000) */
			  }).catch((e)=>{
				  console.log("error",e)
			  })
		  }
		})
	  }

	const elementsToRender = () => {
		// Se selecciono Validar empresas
		if (optionSelected == 0) {
			return (
				<>
					<p style={styles.vacantAttribute}> <b>Lugar de la empresa:</b>{props.ciudad}</p>
					<p style={styles.vacantAttribute}> <b>RFC:</b>  {props.rfc}</p>
					<p style={styles.vacantAttribute}> <b>Giro de la empresa:</b> {props.giro} </p>
					<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Mostrar detalles</button>
					<button style={styles.vacantDetails} onClick={handleAceptarE} className="btnHover">Aceptar empresa</button>
					<button style={styles.vacantDetails} onClick={handleRechazarE} className="btnHover">Rechazar empresa</button>
				</>
			)
		}
		// Se selecciono Validar vacantes
		if (optionSelected == 1) {
			return (
				<>
					<p style={styles.vacantAttribute}> <b>Horario:</b> {props.horario} </p>
					<p style={styles.vacantAttribute}> <b>Salario:</b>  {props.rangoSueldo}</p>
					{props.empresa  ? <p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.empresa.nombreEmpresa}  </p>: null}
					<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Mostrar detalles</button>
					<button style={styles.vacantDetails} onClick={handleAceptarV} className="btnHover">Aceptar vacante</button>
					<button style={styles.vacantDetails} onClick={handleRechazarV} className="btnHover">Rechazar vacante</button>
				</>
			)
		}
		// Se selecciono ver vacantes

		if (optionSelected == 2) {
			const handleColor = () => {
				if(props.isDisponible==0){
					return '#27AE60'

				}
				if(props.isDisponible==1){
					return '#C0392B'
				}
			}
			return (
				<>
					<p style={styles.vacantAttribute}> <b>Horario:</b> {props.horario} </p>
					<p style={styles.vacantAttribute}> <b>Salario:</b>  {props.rangoSueldo}</p>
					{props.empresa  ? <p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.empresa.nombreEmpresa}  </p>: null}
					<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Mostrar detalles</button>
					<button style={styles.vacantDetails} onClick={onClickDetails} className="btnHover">Generar PDF</button>
					{/* <button style={{...styles.vacantDetails,backgroundColor:handleColor()}} onClick={onClickDetails} className="btnHover">
						{props.isDisponible==0 ?'Disponible' :'Ocupada' }
					</button> */}
				</>
			)
		}
		// Se selecciono ver empresas

		if (optionSelected == 3) {
			return (
				<>
					<p style={styles.vacantAttribute}> <b>Lugar:</b> {props.ciudad} </p>
					<p style={styles.vacantAttribute}> <b>Rfc:</b>  {props.rfc}</p>
					<p style={styles.vacantAttribute}> <b>Giro de la empresa:</b> {props.giro} </p>
					<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Mostrar detalles</button>
				</>
			)
		}
		// Se selecciono status del puesto
		if (optionSelected == 4) {
			// Aceptada: 
			if(props.status===0){
				return (
					<>
						<div style={{ display: "flex", justifyContent: "space-evenly" }}>
							<p style={styles.vacantAttribute}> <b>Horario:</b> {props.horario} </p>
							<p style={styles.vacantAttribute}> <b>Salario:</b> {props.rangoSueldo} </p>
							<p style={styles.vacantAttribute}> <b>Lugar:</b>  {props.ciudad}</p>
							<p style={styles.vacantAttribute}> <b>Contacto:</b>  {props.contacto}</p>
						</div>
					{props.empresa  ? <p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.empresa.nombreEmpresa}  </p>: null}
						
						<div style={{ display: "flex", justifyContent: "flex-end" }}>
							<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Editar</button>
							<DropDownSetStatus filterOption={status} setFilterOption={setStatus} vacanteId={props.vacanteId} />
						</div>
					</>
				)
			}
			// Rechazada: 
			if(props.status===1){
				return (
					<>
						<div style={{ display: "flex", justifyContent: "space-evenly" }}>
							<p style={styles.vacantAttribute}> <b>Horario:</b> {props.horario} </p>
							<p style={styles.vacantAttribute}> <b>Salario:</b> {props.rangoSueldo} </p>
							<p style={styles.vacantAttribute}> <b>Lugar:</b>  {props.ciudad}</p>
							<p style={styles.vacantAttribute}> <b>Contacto:</b>  {props.contacto}</p>
						</div>
					{props.empresa  ? <p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.empresa.nombreEmpresa}  </p>: null}
						
						<div style={{ display: "flex", justifyContent: "flex-end" }}>
							<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Editar</button>
						</div>
					</>
				)
			}
			// Pendiente 
			if(props.status===2){
				return (
					<>
						<div style={{ display: "flex", justifyContent: "space-evenly" }}>
							<p style={styles.vacantAttribute}> <b>Horario:</b> {props.horario} </p>
							<p style={styles.vacantAttribute}> <b>Salario:</b> {props.rangoSueldo} </p>
							<p style={styles.vacantAttribute}> <b>Lugar:</b>  {props.ciudad}</p>
							<p style={styles.vacantAttribute}> <b>Contacto:</b>  {props.contacto}</p>
						</div>
					{props.empresa  ? <p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.empresa.nombreEmpresa}  </p>: null}
						
						<div style={{ display: "flex", justifyContent: "flex-end" }}>
							<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Mostrar detalles</button>
						</div>
					</>
				)
			}
			
		}
	}

	const handleBorderColor = () => {
		// Aceptada: verde
		if(props.status===0){
			return '#27AE60'
		}
		// Rechazada: roja
		if(props.status===1){
			return '#C0392B'
		}
		// Pendiente azul
		if(props.status===2){
			return '#226688'
		}
	}

	return (
		<div style={{...styles.vacantContainer,borderLeftColor:handleBorderColor()}} >
			<div style={styles.container}>
				<h3 style={styles.vacantTitle}> <b>{ !props.nombreVacante ? props.nombreEmpresa:props.nombreVacante }</b> {optionSelected == 2 ? props.isDisponible==0 ?'(Estado de la vacante: Disponible)' :'(Estado de la vacante: Ocupada)'  : ''}</h3>
				<div style={styles.fechaContainer}>
					<h2>Fecha: {fecha}</h2>
				</div>
			</div>
			<p style={styles.vacantAttribute}> <b>Descripción:</b> <br />{props.descripcion}</p>
			{elementsToRender()}
		</div>
	);
}
const styles = {
	vacantContainer: {
		width: "100%",
		background: "#fff",
		border: "1px solid #ddd",
		// borderLeft: "14px solid #226688",
		borderLeft: "14px solid",
		padding: "4px 16px",
		borderRadius: "4px",
		margin: "4px",
		flexDirection: "column",
		marginTop: "20px"

	},
	vacantTitle: {
		fontWeight: "normal",
		color: "#222",
		fontSize: "14px",
		width: '500px'
	},
	vacantAttribute: {
		padding: "5px",
		margin: "2px 0",
		color: "#333",
		fontSize: "15px"
	},
	vacantDetails: {
		border: "none",
        width: '18%',
        height: '60px',
		backgroundColor: "#005183",
		color: "#fff",
		padding: "12px 25px",
		fontSize: "15px",
		marginRight: "20px",
		position: "relative",
		alignItems: "flex-end"
	},
	container:{
		display:'flex'
	},
	fechaContainer:{
		display:'flex',
		justifyContent:"flex-end",
		width:'100%'
	}
}


export default InfoCard;