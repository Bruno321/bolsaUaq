import React, { useContext } from 'react';
// Context
import { Context } from '../Context/LoginContext';
// Components
import Button from '../Components/Button';
import LoginTextInput from '../Components/LoginTextInput';
// Assets
import imgDev from "../Assets/img/dev.png";
import fifLogo from "../Assets/img/fif-logo.png";
import logoCD from "../Assets/img/Logo-CD.png";
import logoPortal from "../Assets/img/Logo-portal.png";
// Styles
import './CambioContraseña.css';


const CambioContraseña = () => {
	// const { iniciarSesion, setUserTypeFunc } = useContext(Context)
	const handleClick = () => {
		// setUserTypeFunc(false)
		// iniciarSesion()
		alert("Cambiar contraseña");
	}
	return (
		<div className='container'>
			<div className='containerLeft'>
				<div className='containerImgLeft'>
					<img src={imgDev} className='imgDev' />
				</div>
				<div className='containerInfoCarrusel'>
					<h1>Encuentre a sus próximos <br /> empleados. Rápido.</h1>
					<p>Sabe a quién está buscando. <br /> Lo ayudaremos a encontrarlo</p>
				</div>
			</div>
			<div className='containerForm'>
				<div className='containerImgLogoPortal'>
					<img src={logoPortal} className='imgLogoPortal' />
				</div>
				<h1 className='h1'>¡Felicidades, su cuenta<br /> ha sido verificada!</h1>
				<form className='form'>
					<legend className='legend'>Cambie su contraseña actual.</legend>
					<LoginTextInput labelText="Contraseña actual" placeHolder="" inputType="password" />
					<LoginTextInput labelText="Nueva contraseña" placeHolder="" inputType="password" />
					<LoginTextInput labelText="Confirme contraseña" placeHolder="" inputType="password" />

					<Button title={'Iniciar Sesión'} styles={{ background: '#5F4FEB', color: 'white', margin: '5px 0px' }} click={handleClick} />
				</form>
				<div className='containerLogosFacultad'>
					<img src={fifLogo} className='imgLogosFacultad' />
					<img src={logoCD} className='imgLogosFacultad' />
				</div>
			</div>
		</div>
	)
}

export default CambioContraseña;

const styles = {
	container: {
		width: '100%',
		height: '100vh',
		background: 'red',
		display: 'flex',
	},
	containerLeft: {
		width: '55%',
		height: '100%',
		background: '#2B246B',
		display: 'flex',
		padding: '0px 20px 40px 20px',
		boxSizing: 'border-box',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	containerImgLeft: {
		width: '600px',
		height: '500px',
	},
	imgDev: {
		width: '100%',
		height: '100%'
	},
	containerInfoCarrusel: {
		textAlign: 'center',
		color: 'white'
	},
	containerForm: {
		width: '45%',
		height: '100%',
		background: '#FFFFFF',
		padding: '10px 40px',
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		overflow: 'auto'
	},
	containerImgLogoPortal: {
		width: '250px',
		height: '100px',
		margin: '0px 0px 20px 0px'
	},
	imgLogoPortal: {
		width: '100%',
		height: '100%',
	},
	form: {
		width: '100%',
		height: '50%',
		margin: '20px 0px 0px 0px'
	},
	legend: {
		textAlign: 'center',
		fontWeight: '600',
		fontSize: '20px'
	},
	h1: {
		fontSize: '30px',
		textAlign: 'center'
	},
	containerA: {
		width: '100%',
		display: 'flex',
		justifyContent: 'end',
		margin: '5px 0px 20px 0px'
	},
	a: {
		fontSize: '14px',
		color: 'black'
	},
	containerLogosFacultad: {
		width: '100%',
		height: '50px',
		display: 'flex',
		justifyContent: 'center'
	},
	imgLogosFacultad: {
		height: '40px',
		margin: '0px 10px',
	}
}