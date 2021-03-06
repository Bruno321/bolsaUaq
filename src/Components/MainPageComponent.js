import React, {useState} from 'react'
import ImgEmpresa from '../Assets/img/ImagenMainEmpresa.png'


const MainPageComponent = () => {
    const [hoverButton, setHoverButton] = useState({...styles.button});
    
    return (
        <div style={styles.containerBody}>
            <div style={styles.containerInfo}>
                <div style={styles.containerDescription}>
                    <h1 style={styles.title}>Ahorre tiempo y energía en el proceso de contratación.</h1>
                    <p style={styles.p}>Encontrar a la persona indicada para el empleo no debería consumir todo su tiempo. Las herramientas sencillas y poderosas de Indeed le permiten buscar, seleccionar y contratar más rápido.</p>
                        <button style={{...hoverButton}}
                            onMouseEnter={()=>setHoverButton({...hoverButton, background: 'rgba(75, 62, 184, 0.9)', color: 'white'})}
                            onMouseLeave={()=>setHoverButton({...styles.button})}
                        >
                            Publicar una vacante
                        </button>
                    </div>
                    <div style={styles.containerImg}>
                        <img src={ImgEmpresa} style={styles.img}/>
                    </div>
                </div>
                <div style={styles.containerCards}>
                    <div style={styles.card}>
                        <h1 style={styles.h1}>Verifique su <br/> cuenta</h1>
                        <p style={styles.p}>Si ha cumplido con los pasos de verificación se le asignará un correo y contraseña para el uso de esta plataforma</p>
                    </div>
                    <div style={styles.card}>
                        <h1 style={styles.h1}>Cree su publicación de empleo</h1>
                        <p style={styles.p}>Luego agregue el titulo, la descripción y la ubicación de su publicación de empleo ¡y listo!</p>
                    </div>
                    <div style={styles.card}>
                        <h1 style={styles.h1}>¿Ya encontró talento para su puesto?</h1>
                        <p style={styles.p}>Luego de contratar, es necesario cambiar el status del puesto, para tener un orden en la plataforma</p>
                    </div>
                </div>
        </div>
    )
}

export default MainPageComponent

const styles = {
    container:{
        width: '100%',
        height: '10vh',
    },
    containerBody: {
        width: '100%',
        height: 'calc(100vh - 22vh)',
        background: '#FFFFFF',
        padding: '20px 40px',
        boxSizing: 'border-box'
    },
    containerInfo: {
        width: '100%',
        height: '50%',
        padding: '0px 40px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between'
    },
    containerDescription: {
        width: '600px',
        height: '100%',
        background: '#FFFFFF',
        padding: '10px 40px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: '30px',
        margin: '10px 0px'
    },
    button: {
        width: '200px',
        height: '36px',
        margin: '20px 0px 0px 0px',
        background: '#4B3EB8',
        color: '#FFFFFF',
        borderRadius: '10px',
        borderStyle: 'none',
        cursor: 'pointer'
    },
    containerImg: {
        width: '300px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '210px',
        height: '210px'
    },
    containerCards: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0px 10px',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
    },
    card: {
        width: '300px',
        height: '200px',
        borderRadius: '10px',
        background: '#FFFFFF',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer'
    },
    h1: {
        fontSize: '26px',
        margin: '10px 0px'
    },
    p: {
        fontSize: '1.4rem',
        color: '#7D7D7D',
    }
}