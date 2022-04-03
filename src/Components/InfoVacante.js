import React, {useState} from "react";
import close from '../Assets/img/close.png';

/*
    -------La información a recibir en los props para mostrar la información es la siguiente: 
    info={{titulo: '', descripcion: '', requisitos: '', competencias: '', tipoContratacion: '', tipoEmpleo: '', informacion: '', estado: '', ciudad: '', nivelIngles: '', rangoSueldo: '', carrera: '', area: '', numeroPersonas: '', prestaciones: '', otrosRequisitos: ''}}
*/

const InfoVacante = (props) => {

    const [hoverButtonAceptar, setHoverButtonAceptar] = useState({...styles.button, background: '#27AE60'});
    const [hoverButtonRechazar, setHoverButtonRechazar] = useState({...styles.button, background: '#C0392B'});
    

    return(
        <div style={styles.container}>
            <div style={styles.containerIconClose}>
                <img src={close} style={{cursor: 'pointer'}}/>
            </div>
            <div style={styles.containerInfo}>
                <h1 style={{fontSize: '24px'}}>{props.info.titulo}</h1>
                <p style={styles.tituloSeccion}>Descripción de empleo:</p>
                <p style={styles.pInfo}>{props.info.descripcion}</p>
                <p style={styles.tituloSeccion}>Requisitos:</p>
                <p style={styles.pInfo}>{props.info.requisitos}</p>
                <p style={styles.tituloSeccion}>Competencias:</p>
                <p style={styles.pInfo}>{props.info.competencias}</p>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Tipo de contratación: <p style={styles.pInfo}>{props.info.tipoContratacion}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Tipo de empleo: <p style={styles.pInfo}>{props.info.tipoEmpleo}</p></p>
                </div>
                <p style={styles.tituloSeccion}>Información</p>
                <p style={styles.pInfo}>{props.info.informacion}</p>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Estado: <p style={styles.pInfo}>{props.info.estado}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Ciudad: <p style={styles.pInfo}>{props.info.ciudad}</p></p>
                </div>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Nivel de inglés: <p style={styles.pInfo}>{props.info.nivelIngles}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Rango de sueldo: <p style={styles.pInfo}>$ {props.info.rangoSueldo}</p></p>
                </div>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Carrera: <p style={styles.pInfo}>{props.info.carrera}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Area: <p style={styles.pInfo}>{props.info.area}</p></p>
                </div>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Número de personas: <p style={styles.pInfo}>{props.info.numeroPersonas}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Prestaciones: <p style={styles.pInfo}>{props.info.prestaciones}</p></p>
                </div>
                <p style={styles.tituloSeccion}>Otros requisitos:</p>
                <p style={styles.pInfo}>{props.info.otrosRequisitos}</p>
            </div>
            <div style={styles.containerButtons}>
                <button 
                    style={{...hoverButtonAceptar}}
                    onMouseEnter={() => setHoverButtonAceptar({...hoverButtonAceptar,background: '#3bea67'})}
                    onMouseLeave={() => setHoverButtonAceptar({...hoverButtonAceptar,background: '#27AE60'})}
                >Aceptar</button>
                <button 
                    style={{...hoverButtonRechazar}}
                    onMouseEnter={() => setHoverButtonRechazar({...hoverButtonRechazar,background: '#ff4838'})}
                    onMouseLeave={() => setHoverButtonRechazar({...hoverButtonRechazar,background: '#C0392B'})}
                >Rechazar</button>
            </div>
        </div>
    )
}

export default InfoVacante;

const styles = {
    container: {
        width: '96%',
        height: '96%',
        background: '#EEEEEE',
        borderRadius: '14px',
        padding: '14px 30px',
        boxSizing: 'border-box',
        border: '1px solid black',
    },
    containerIconClose: {
        width: '100%',
        height: '20px',
        display: 'flex',
        justifyContent: 'end'
    },
    containerInfo:{
        width: '100%',
        height: '84%',
        overflow: 'auto',
        margin: '0px 0px 20px 0px',
    },
    tituloSeccion: {
        fontSize: '18px',
        margin: '8px 0px',
        fontWeight: '500',
    },
    containerSecciones: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    pSecciones: {
        width: '50%'
    },
    pInfo: {
        fontSize: '15px',
        fontWeight: '400',
        textAlign: 'justify',
        margin: '0px 10px 0px 0px'
    },
    containerButtons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'end'
    },
    button: {
        width: '150px',
        height: '44px',
        borderRadius: '10px',
        margin: '0px 0px 0px 40px',
        color: 'white',
        borderStyle: 'none',
        cursor: 'pointer',
    }
}