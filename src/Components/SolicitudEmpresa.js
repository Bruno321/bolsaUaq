import React,{useContext,useEffect,useState} from "react";
import {DataToShowContext} from '../Context/DataToShowContext'


const SolicitudEmpresa = (props) => {
  const { data } = props;

  const { title,rfc,giro,razonSocial,email,telefono,sitioWeb,fechaRegistro, 
          direccion,colonia,city,codigoPostal,estado, description,
          nombreReclutador,emailReclutador,telefonoReclutador,id } = data;
          
  const {setDetailSelected} = useContext(DataToShowContext)
  const [disable,setDisable] = useState(false)
  const [statusText,setStatusText] = useState("")

  const handleAceptar = () => {
    
  }

  const handleRechazar = () => {

  }
  const handleCerrar = () => {
    setDetailSelected(false)
  }

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

  return (
    <div style={styles.card}>
      <div style={styles.row}>
        <div style={{ ...styles.col, marginLeft: "auto" }}>
          <button style={styles.btnCerrar} onClick={handleCerrar}>X</button>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col_4}>
          <div style={styles.row}>
            <div style={{ ...styles.col, margin: "auto", marginBottom: '8px' }}>
              <div style={styles.imgEmpresaContainer}>
                <img
                  style={styles.imgEmpresa}
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div style={{ ...styles.col_12, margin: "auto", textAlign: 'center', marginTop: '8px' }}>
            <p style={styles.normalText}>{title}</p>
            <p style={styles.normalText}>{razonSocial}</p>
            <p style={styles.normalText}>{giro}</p>
            <p style={styles.normalText}>{rfc}</p>
          </div>
          <div style={{ ...styles.col_12, margin: "auto", textAlign: 'center', marginTop: '8px' }}>
            <p style={styles.normalText}>{email}</p>
            <p style={styles.normalText}>{telefono}</p>


            <p style={styles.normalText}>{sitioWeb}</p>
          </div>
          <div style={{ ...styles.col_12, margin: "auto", textAlign: 'center', marginTop: '8px' }}>
            <p style={styles.normalText}>Fecha de registro:</p>
            <p style={styles.normalText}>{fechaRegistro}</p>
          </div>

        </div>
        <div style={styles.col_8}>
          <div style={styles.row}>
            <div style={styles.col_12}>
              <h1> Status ({statusText})</h1>
              <h2 style={styles.title}>Domicilio</h2>
              <p style={styles.normalText}>{direccion}</p>
              <p style={styles.normalText}>{colonia}</p>
              <p style={styles.normalText}>{city}</p>
              <p style={styles.normalText}>{codigoPostal}</p>
              <p style={styles.normalText}>{estado}</p>
            </div>
            <div style={styles.col_12}>
              <h2 style={styles.title}>Reclutador</h2>
              <p style={styles.normalText}>{nombreReclutador}</p>
              <p style={styles.normalText}>{emailReclutador}</p>
              <p style={styles.normalText}>{telefonoReclutador}</p>
            </div>
            <div style={styles.col_12}>
              <h2 style={styles.title}>Descripción</h2>
              <p style={styles.normalText}>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.row}>
        <div style={{ ...styles.col, marginLeft: "auto" }}>
          <button
            // className={disable ? "btnDisabled": null}
            className={`btnAceptar ${disable ? 'btnDisabled' : "pointer"}`}
            onClick={handleAceptar}
            >
            Rechazar
          </button>
          <button
            className={`btnRechazar ${disable ? 'btnDisabled' : "pointer"}`}
            onClick={handleRechazar}
            >
            Aceptar
          </button>
        </div>
      </div>
    </div >
  );
};

const styles = {
  card: {
    width: "100%",
    height: "auto",
    padding: '16px',
    boxSizing: 'border-box',
    backgroundColor: "#fff",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "4px",
    marginRight: "2px",
    marginLeft: "2px",
  },
  col: {
    // width: '100%',
    maxWidth: '100%',
    // flex: '1 0 0%'
  },
  col_12: {
    width: '100%',
    flex: '0 0 auto'
    // flex: '1 0 0%'
  },
  col_3: {
    width: '25%',
    flex: '0 0 auto'
  },
  col_4: {
    width: '33.33333333%',
    flex: '0 0 auto'
  },
  col_6: {
    width: '50%',
    flex: '0 0 auto'
  },
  col_8: {
    width: '66.66666666%',
    flex: '0 0 auto'
  },
  col_9: {
    width: '75%',
    flex: '0 0 auto'
  },
  btnCerrar: {
    background: "none",
    border: "none",
    cursor: 'pointer',
    color: "#999",
  },
  btnAccion: {
    border: 'none',
    padding: '4px 12px',
    color: '#fff',
    borderRadius: '4px',
    width: '132px',
    height: '38px',
    margin: '4px 8px',
    cursor: 'pointer'
  },
  title: {
    fontSize: '24px',
    marginBottom: '4px'
  },
  normalText: {
    fontSize: '14px',
    marginBottom: '2px'
  },
  btnAceptar: {
    backgroundColor: '#27ae60',
  },
  btnRechazar: {
    backgroundColor: '#c0392b'
  },
  imgEmpresaContainer: {
    width: "75px",
    height: "75px",
    borderRadius: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  imgEmpresa: {
    width: "100%",
    height: "auto",
  },
};

export default SolicitudEmpresa;
