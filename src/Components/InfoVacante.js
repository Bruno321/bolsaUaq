import React, {useState,useContext,useEffect} from "react";
import close from '../Assets/img/close.png';
import {DataToShowContext} from '../Context/DataToShowContext'

const InfoVacante = ({data}) => {


    const {setDetailSelected} = useContext(DataToShowContext)
    const [disable,setDisable] = useState(false)
    const [statusText,setStatusText] = useState("")
         
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
    
    return(
        <div style={styles.container}>
            <div style={styles.containerIconClose}>
                <img src={close} style={{cursor: 'pointer'}} onClick={()=>setDetailSelected(false)}/>
            </div>
            <h1> Status ({statusText})</h1>

            <div style={styles.containerInfo}>
                <h1 style={{fontSize: '24px'}}>{data.titulo}</h1>
                <p style={styles.tituloSeccion}>Empresa:  </p>
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
                <p style={styles.tituloSeccion}>Información</p>
                <p style={styles.pInfo}>{data.informacion}</p>
                <p style={styles.tituloSeccion}>Horario:</p>
                <p style={styles.pInfo}>{data.horario}</p>
               
            </div>
            <div style={styles.containerButtons}>
                <button 
                    className={`btnAceptar ${disable ? 'btnDisabled' : "pointer"}`}
                >Aceptar</button>
                <button 
                    className={`btnRechazar ${disable ? 'btnDisabled' : "pointer"}`}
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