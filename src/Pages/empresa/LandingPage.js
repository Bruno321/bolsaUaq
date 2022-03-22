import React from "react";
import logo from "../../Assets/img/fifUaq_Logo.png";

const LandingPage = () => {

  return (
    <>
      <header style={styles.headerLanding}>
        <div style={styles.logoImgDiv}>
          <img src={logo} alt="Logo de la Facultad de Informática" style={{padding: "12px"}}/>
        </div>
        <p style={styles.titleHeader}>BOLSA DE TRABAJO DE LA FACULTAD DE INFORMÁTICA DE LA UNIVERSIDAD AUTÓNOMA DE QUERÉTARO</p>
      </header>
      <main style={styles.container}>
        <h1 style={styles.titleContainer}>UNIDXS PARA INNOVAR Y TRASCENDER</h1>
        <p style={styles.paragraphContainer}>¿Quieres emplear algún talento de la Facultad?</p>
        <button style={styles.btnLogin}>INICIAR SESIÓN</button>
        <button style={styles.btnRegister}>REGISTRARSE</button>
      </main>
    </>
  )
}

export default LandingPage;

const styles = {
  headerLanding: {
    width: "100%",
    height: "100px",
    backgroundColor: "var(--dark-purple)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImgDiv: {
    /* margin-left: 10vh; */
    left: "40px",
    width: "10vw",
    height: "100px",
    display: "flex",
    justifyItems: "center",
    position: "absolute",
  },

  /* FALTA ETIQUETA CSS DE LOGO FACULTAD */

  titleHeader: {
    width: "60vw",
    height: "100%",
    fontSize: "2rem",
    fontWeight: "400",
    color: "#fff",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "middle",
    /* position: absolute; */
  },

  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "var(--light-purple)",
    // backgroundImage: "linear-gradient(to right, rgba(160, 152, 237), rgba(160, 152, 237, .6)), url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
    backgroundPosition: "center",
    alignItems: "center",
    display: "column",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "middle",
  },
  titleContainer: {
    fontSize: "6.5rem",
    fontWeight: "bold",
    color: "#fff",
    width: "100%",
    height: "275px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },

  paragraphContainer: {
    color: "#fff",
    fontSize: "3.5rem",
    fontWeight: "bold",
  },
  btnLogin: {
    marginRight: "25px",
    marginTop: "60px",
    width: "200px",
    height: "50px",
    borderRadius: "15px",
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "var(--purple-gray)",
    borderColor: "transparent",
    fontSize: "1.5rem",
    cursor: "pointer",
  },

  btnRegister: {
    marginTop: "60px",
    width: "200px",
    height: "50px",
    borderRadius: "15px",
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "var(--purple-gray)",
    borderColor: "transparent",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};
