import React, { useContext, useEffect } from 'react';
import { Context } from '../../Context/LoginContext'
import LeftBarnav from '../../Components/LeftBarNav';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const StatusPuesto = () => {
    const { cerrarSesion } = useContext(Context)

    return (
        <div>
            <Header />
            <div style={styles.bodyContainer}>
                <LeftBarnav />
                <div style={styles.vacanteContainer}>
                    <div style={styles.container}>
                        <h2 style={styles.title}>Seguimiento de vacantes:</h2>
                    </div>
                </div>
            </div>
            <Footer />
            <button onClick={cerrarSesion}>Cerrar sesion</button>
        </div>
    )
}

export default StatusPuesto

const styles = {
    container: {
        height: "100%",
        width: "100%",
        margin: "14px",
        border: "1px solid black",
        padding: "30px 60px 50px 60px",

    },
    parrafo: {
        fontSize: "2.2rem",
        fontWeight: "300",
    },
    title: {
        fontSize: "2.8rem",
        fontWeight: "400",
        margin: "20px 0px",
        paddingBottom: "10px",
    },
    bodyContainer: {
        display: 'flex',
        width: '100%'
    },
    vacanteContainer: {
        width: '100%',
        padding: '5px',
        height: '100%',
        display: 'flex',
    }
}