import React, {useState,useContext} from "react";
import close from '../Assets/img/close.png';
import {DataToShowContext} from '../Context/DataToShowContext'

const InfoVacante = ({data}) => {

    const [hoverButtonAceptar, setHoverButtonAceptar] = useState({...styles.button, background: '#27AE60'});
    const [hoverButtonRechazar, setHoverButtonRechazar] = useState({...styles.button, background: '#C0392B'});

    const {setDetailSelected} = useContext(DataToShowContext)
    

    return(
        <div style={styles.container}>
            <div style={styles.containerIconClose}>
                <img src={close} style={{cursor: 'pointer'}} onClick={()=>setDetailSelected(false)}/>
            </div>
            <div style={styles.containerInfo}>
                <h1 style={{fontSize: '24px'}}>{data.titulo}</h1>
                <p style={styles.tituloSeccion}>Empresa:</p>
                <p style={styles.pInfo}>{data.nombreEmpresa}</p>
                <p style={styles.tituloSeccion}>Descripción de empleo:</p>
                <p style={styles.pInfo}>{data.description}</p>
                <p style={styles.tituloSeccion}>Requisitos:</p>
                <p style={styles.pInfo}>{data.requisitos}</p>
                <p style={styles.tituloSeccion}>Competencias:</p>
                <p style={styles.pInfo}>{data.competencias}</p>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Tipo de contratación: <p style={styles.pInfo}>{data.tipoContratacion}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Tipo de empleo: <p style={styles.pInfo}>{data.tipoEmpleo}</p></p>
                </div>
                <p style={styles.tituloSeccion}>Información</p>
                <p style={styles.pInfo}>{data.informacion}</p>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Estado: <p style={styles.pInfo}>{data.estado}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Ciudad: <p style={styles.pInfo}>{data.ciudad}</p></p>
                </div>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Nivel de inglés: <p style={styles.pInfo}>{data.nivelIngles}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Rango de sueldo: <p style={styles.pInfo}>$ {data.rangoSueldo}</p></p>
                </div>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Carrera: <p style={styles.pInfo}>{data.carrera}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Area: <p style={styles.pInfo}>{data.area}</p></p>
                </div>
                <div style={styles.containerSecciones}>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Número de personas: <p style={styles.pInfo}>{data.numeroPersonas}</p></p>
                    <p style={{...styles.tituloSeccion, ...styles.pSecciones}}>Prestaciones: <p style={styles.pInfo}>{data.prestaciones}</p></p>
                </div>
                <p style={styles.tituloSeccion}>Otros requisitos:</p>
                <p style={styles.pInfo}>{data.otrosRequisitos}</p>
                <p style={styles.tituloSeccion}>Horario:</p>
                <p style={styles.pInfo}>{data.horario}</p>
               
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