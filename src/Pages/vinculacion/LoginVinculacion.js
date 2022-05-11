import React, {useContext} from 'react';
import {Context} from '../../Context/LoginContext';

import logoFif from'../../Assets/img/fifUaq_Logo.png';
import logoCD from '../../Assets/img/Logo-CD.png';
import vinculador from '../../Assets/img/vinculador.png';

const LoginVinculacion = () => {
    const {iniciarSesion,setUserTypeFunc} = useContext(Context)
    const handleClick = () => {
        setUserTypeFunc(true)
        iniciarSesion()
    }
    return (
        <div style={styles.main}>
            <section style={styles.leftSide}>
                <h1 style={styles.title}>Iniciar sesión</h1>
                <p style={styles.subTitle}>NOTA: ¡Recuerde iniciar sesión con los datos que le hemos proporcionado!</p>
                <form style={styles.containerForm}>
                    <label style={styles.text}>Usuario / Expediente</label>
                    <input type="text" placeholder="000000" style={styles.input} />
                    <label style={styles.text}>Contraseña</label>
                    <input type="password" placeholder="********" style={styles.input} />
                    <button style={styles.btnLogin} onClick={handleClick}>Iniciar Sesión</button>
                </form>
                <div style={styles.imgContainer}>
                    <img src={logoFif} style={styles.logoFif}/>
                    <img src={logoCD} style={styles.logoCD} />
                </div>
            </section>
            <section style={styles.rightSide}>
                <h2 style={styles.textMedium}>¡Bienvenido vinculador!</h2>
                <img src={vinculador} style={styles.imgVinculador} />
            </section>
        </div>
    )
}

export default LoginVinculacion;

const styles = {
    main: {
        display: 'flex',
    },
    leftSide: {
        width: "50%",
        height: "100vh",
        boxSizing: "border-box",
        padding: "0 10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2b246b",
        color: "white",
    },
    title: {
        fontSize: "4.4rem",
        fontWeight: 300,
        textAlign: "center",
        marginBottom: "15px",
    },
    subTitle: {
        width: "340px",
        fontSize: "1.8rem",
        textAlign: "center",
        marginBottom: "30px",
    },
    containerForm: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    text: {
        fontSize: "1.6rem",
    },
    input: {
        outline: "none"
    },
    btnLogin: {
        width: "80%",
        height: "40px",
        margin: "20px",
        borderRadius: "5px",
        border: "none",
        alignSelf: "center",
        fontSize: "1.8rem",
        color: "#5f4feb",
        marginBottom: "40%",
    },
    imgContainer: {
        position: "absolute",
        bottom: "7%",
    },
    logoFif: {
        width: "110px",
        margin: "10px",
    },
    logoCD: {
        height: "110px",
        margin: "10px",
    },
    rightSide: {
        width: "50%",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    textMedium: {
        fontSize: "2.8rem",
        marginBottom: "20px",
    },
    imgVinculador: {
        width: "80%",
    },
}