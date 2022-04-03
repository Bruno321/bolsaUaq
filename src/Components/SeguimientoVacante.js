import React, {useState, useEffect} from "react";

/*
    -------La información a recibir en los props para mostrar la información es la siguiente: 
    info={{titulo: '', descripcion: '', horario: '', salario: '', lugar: '', contacto: '', empresa: '', status: ''}}
*/

const SeguimientoVacante = (props) => {
    const [estado, setEstado] = useState({backgroundColor: 'grey'});
    const [hoverButton, setHoverButton] = useState({...styles.btn});

    useEffect(() => {
        if(props.info.status.toLowerCase() == 'disponible'){
            setEstado({backgroundColor: '#27AE60'});
        }else if(props.info.status.toLowerCase() == 'ocupada'){
            setEstado({backgroundColor: '#C0392B'});
        }
    }, []);
    
    return (
        <div style={styles.container}>
            <div style={{...styles.statusBar, ...estado}}></div>
            <div style={styles.containerInfo}>
                <h1 style={styles.title}>{props.info.titulo}</h1>
                <h3 style={styles.h3}>Descripción:</h3>
                <div style={styles.textDescription}>
                    <p>{props.info.descripcion}</p>
                </div>
                <button style={{...hoverButton, ...estado}}
                    onMouseEnter={() => props.info.status.toLowerCase() == 'disponible' 
                                                                        ? setHoverButton({...hoverButton}, setEstado({background: '#36f385'})) 
                                                                        : setHoverButton({...hoverButton}, setEstado({background: '#f54636'}))}
                    onMouseLeave={() => props.info.status.toLowerCase() == 'disponible' 
                                                                        ? setHoverButton({...hoverButton}, setEstado({background: '#27AE60'})) 
                                                                        : setHoverButton({...hoverButton}, setEstado({background: '#C0392B'}))}
                >{props.info.status}</button>
                <div style={styles.contDown}>
                    <h3 style={styles.h3}>Horario: <span style={styles.info}>{props.info.horario}</span></h3>
                    <h3 style={styles.h3}>Salario: <span style={styles.info}>{props.info.salario}</span></h3>
                    <h3 style={styles.h3}>Lugar: <span style={styles.info}>{props.info.lugar}</span></h3>
                    <h3 style={styles.h3}>Contacto: <span style={styles.info}>{props.info.contacto}</span> </h3>
                </div>
                <h3 style={styles.h3}>Nombre de la empresa: <span style={styles.info}>{props.info.empresa}</span></h3>
            </div>
        </div>
    )
}

export default SeguimientoVacante;

const styles = {
    container: {
        width: '90%',
        height: '180px',
        backgroundColor: '#FFFFFF',
        margin: '10px',
        borderRadius: '5px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    statusBar: {
        width: '10px',
        height: '100%',
        borderRadius: '5px 0px 0px 5px',
        position: 'relative',
        float: 'left'
    },
    containerInfo: {
        width: 'calc(100% - 10px)',
        height: '100%',
        position: 'relative',
        float: 'left',
        borderRadius: '0px 5px 5px 0px',
        padding: '5px 16px',
        boxSizing: 'border-box'
    },
    title: {
        margin: '10px 0px',
        fontWeight: '500',
    },
    textDescription: {
        width: '96%',
        height: '27px',
        textAlign: 'justify',
        overflow: 'hidden',
        margin: '0px 0px 6px 0px',
        padding: '5px 0px',
        fontSize: '13px'
    },
    btn: {
        width: '140px',
        height: '30px',
        color: 'white',
        borderStyle: 'none',
        position: 'relative',
        float: 'right',
        margin: '6px 0 0 0',
        cursor: 'pointer'
    },
    contDown: {
        width: 'calc(100% - 146px)',
        display: 'flex',
        flexWrap: 'wrap'
    },
    info: {
        fontWeight: '400',
        fontSize: '14px'
    },
    h3:{
        margin: '0px 10px 4px 0px',
        fontSize: '14px'
    }
}