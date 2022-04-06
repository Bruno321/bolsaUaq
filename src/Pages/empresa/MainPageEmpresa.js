import React, {useContext} from 'react';
import {Context} from '../../Context/LoginContext'
import LeftBarnav from '../../Components/LeftBarNav';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import CrearVacante from '../../Components/CrearVacante';

const MainPageEmpresa = () => {
    const {cerrarSesion} = useContext(Context)

    return (
        <div>
            <Header/>
            <div style={styles.bodyContainer}>
                <LeftBarnav/>
                <div style={styles.vacanteContainer}>
                    <CrearVacante/>
                </div>
            </div>
            <Footer/>
            Main Page empresa
            <button onClick={cerrarSesion}>Cerrar sesion</button>
        </div>
    )
}

export default MainPageEmpresa

const styles = {
    bodyContainer:{
        display:'flex',
        // width: '100%'
    },
    vacanteContainer:{
        width: '87%',
        padding:'5px',
        height:'100%',
        display: 'flex',

    }
}