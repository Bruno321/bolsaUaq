import React, { useContext } from "react";
import { DetailContext } from '../Context/DetailContext'
import { DataToShowContext } from '../Context/DataToShowContext'

const InfoCard = ({ props }) => {

	const { setData } = useContext(DetailContext)
	const { optionSelected, setDetailSelected } = useContext(DataToShowContext)

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
						<button style={styles.vacantDetails} onClick={onClickDetails} className="btnHover">Disponible/Ocupada</button>
					</div>
				</>
			)
		}
	}

	return (
		<div style={styles.vacantContainer}>
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
		borderLeft: "6px solid #226688",
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
		backgroundColor: "#005183",
		color: "#fff",
		padding: "12px 25px",
		fontSize: "15px",
		margin: "10px",
		position: "relative",
		alignItems: "flex-end"
	}
}

export default InfoCard;