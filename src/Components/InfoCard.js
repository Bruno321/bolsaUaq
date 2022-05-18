import React, { useContext, useState } from "react";
import { DetailContext } from '../Context/DetailContext'
import { DataToShowContext } from '../Context/DataToShowContext'
import DropDownSetStatus from "./DropDownSetStatus";

const InfoCard = ({ props,filterOption }) => {
	console.log(props)
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
	const elementsToRender = () => {
		if (optionSelected == 0) {
			return (
				<>
					<p style={styles.vacantAttribute}> <b>Lugar de la empresa:</b>{props.ciudad}</p>
					<p style={styles.vacantAttribute}> <b>RFC:</b>  {props.rfc}</p>
					<p style={styles.vacantAttribute}> <b>Giro de la empresa:</b> {props.giro} </p>
					<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Mostrar detalles</button>
					<button style={styles.vacantDetails} onClick={onClickDetails} className="btnHover">Aceptar</button>
					<button style={styles.vacantDetails} onClick={onClickDetails} className="btnHover">Rechazar</button>
				</>
			)
		}
		if (optionSelected == 1) {
			return (
				<>
					<p style={styles.vacantAttribute}> <b>Horario:</b> {props.horario} </p>
					<p style={styles.vacantAttribute}> <b>Salario:</b>  {props.rangoSueldo}</p>
					<p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.nombreEmpresa} </p>
					<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Mostrar detalles</button>
					<button style={styles.vacantDetails} onClick={onClickDetails} className="btnHover">Aceptar</button>
					<button style={styles.vacantDetails} onClick={onClickDetails} className="btnHover">Rechazar</button>
				</>
			)
		}
		if (optionSelected == 2) {
			return (
				<>
					<p style={styles.vacantAttribute}> <b>Horario:</b> {props.horario} </p>
					<p style={styles.vacantAttribute}> <b>Salario:</b>  {props.rangoSueldo}</p>
					<p style={styles.vacantAttribute}> <b>Nombre:</b> {props.nombreEmpresa} </p>
					<button style={styles.vacantDetails} onClick={() => handleDetailButton()} className="btnHover">Mostrar detalles</button>
					<button style={styles.vacantDetails} onClick={onClickDetails} className="btnHover">Generar PDF</button>
					<button style={styles.vacantDetails} onClick={onClickDetails} className="btnHover">Ocupada/disponible</button>
				</>
			)
		}
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
						<p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.nombreEmpresa} </p>
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
						<p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.nombreEmpresa} </p>
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
						<p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {props.nombreEmpresa} </p>
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
			<h3 style={styles.vacantTitle}> { !props.nombreVacante ? props.nombreEmpresa:props.nombreVacante } </h3>
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
		margin: "4px 0",
		color: "#222",
		fontSize: "14px"
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
	}
}


export default InfoCard;