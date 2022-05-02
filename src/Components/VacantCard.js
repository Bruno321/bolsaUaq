import React from "react";

const VacantCard = (props) => {

	const { title, description, schedule, salary, companyName, onClickDetails } = props;

	return (
		<div style={styles.vacantContainer}>
			<h3 style={styles.vacantTitle}> {title} </h3>
			<p style={styles.vacantAttribute}> <b>Descripción:</b> <br />{description}</p>
			<p style={styles.vacantAttribute}> <b>Horario:</b> {schedule} </p>
			<p style={styles.vacantAttribute}> <b>Salario:</b>  {salary}  </p>
			<p style={styles.vacantAttribute}> <b>Nombre de la empresa:</b> {companyName}</p>
			<button style={styles.vacantDetails} onClick={onClickDetails} >Mostrar detalles</button>
		</div>
	);
}

const styles = {
	vacantContainer: {
		width: "100%",
		heigth: "auto",
		background: "#fff",
		border: "1px solid #ddd",
		borderLeft: "6px solid #226688",
		padding: "4px 16px",
		borderRadius: "4px",
		margin: "4px",
		display: "flex",
		flexDirection: "column"

	},
	vacantTitle: {
		fontWeight: "normal",
		margin: "4px 0",
		color: "#222",
		fontSize: "14px"
	},
	vacantAttribute: {
		margin: "2px 0",
		color: "#333",
		fontSize: "11px"
	},
	vacantDetails: {

		border: "none",
		backgroundColor: "#226688",
		color: "#fff",
		borderRadius: "4px",
		padding: "6px 10px",
		fontSize: "12px",
		textAlign: "right",
		margin: "4px",
		marginLeft: "auto"
	}
}

export default VacantCard;