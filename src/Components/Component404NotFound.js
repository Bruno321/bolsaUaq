import React, {useState} from 'react'
import img404 from '../Assets/img/404Error.png'

const Page404NotFound = () => {

    const [hoverButton, setHoverButton] = useState({...styles.button});

    return(
        <div style={styles.container}>
            <div style={styles.containerImg}>
                <img src={img404} style={styles.img}/>
            </div>
            <div style={styles.containerInfo}>
                <h1 style={styles.h1}>404</h1>
                <h2 style={styles.h2}>Página no encontrada</h2>
                <p style={styles.p}>Esta página no existe o ha sido removida</p>
                <p style={styles.p}>Le sugerimos que vuelva al inicio</p>
                <button style={{...hoverButton}}
                    onMouseEnter={()=>setHoverButton({...hoverButton, background: 'rgba(95, 79, 234, 0.8)', color: 'white'})}
                    onMouseLeave={()=>setHoverButton({...styles.button})}
                    onClick={() => location.href="/"}
                >
                    Regresar al inicio
                </button>
            </div>
        </div>
    );
}

export default Page404NotFound;

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        
    },
    containerImg: {
        width: '500px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '400px',
        height: '400px'
    },
    containerInfo: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    h1: {
        fontSize: '80px',
        color: '#2B246B',
        margin: '60px 0px 0px 0px',
    },
    h2: {
        fontSize: '20px',
        margin: '10px 0px',
    },
    p: {
        fontSize: '16px',
    },
    button: {
        width: '160px',
        height: '30px',
        borderRadius: '8px',
        margin: '16px 0px',
        background: '#5F4FEB',
        color: 'white',
        borderStyle: 'none',
        cursor: 'pointer'
    }
}