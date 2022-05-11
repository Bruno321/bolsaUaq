import React, {useState} from "react";
import CandadoImg from '../Assets/img/candadoPassword.png'

const ModalInforCambiarPassword = () => {

    const [hoverButton, setHoverButton] = useState({...styles.button});

    return (
        <div style={styles.container}>
            <div style={styles.containerImg}>
                <img src={CandadoImg} style={styles.img}/>
            </div>
            <h1>¿DESEAS CAMBIAR DE CONTRASEÑA?</h1>
            <div style={styles.containerInfo}>
                <p>Le recomendamos que envie los siguientes datos:</p>
                <ul>
                    <li>Correo electrónico</li>
                    <li>Nombre de la empresa</li>
                    <li>RFC de la empresa</li>
                </ul>
                <p>Al siguiente correo: <b>contacto@uaq.mx</b></p>
            </div>
            <button style={{...hoverButton}}
                onMouseEnter={()=>setHoverButton({...hoverButton, background: 'rgba(75, 62, 184, 0.9)', color: 'white'})}
                onMouseLeave={()=>setHoverButton({...styles.button})}
            >
                Continuar
            </button>
        </div>
    )
}

export default ModalInforCambiarPassword;

const styles = {
    container: {
        width: '500px',
        height: '340px',
        background: '#EEEEEE',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto',
        borderRadius: '10px',
        border: '1px solid #000000',
    },
    containerImg: {
        width: '100px',
        height: '100px',
    },
    img: {
        width: '100%',
        height: '100%'
    },
    containerInfo: {
        fontSize: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        lineHeight: '1.5',
    },
    button: {
        width: '200px',
        height: '32px',
        background: '#5F4FEB',
        borderStyle: 'none',
        color: 'white',
        borderRadius: '10px',
        fontSize: '15px',
        cursor: 'pointer'
    }
}