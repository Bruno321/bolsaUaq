import React from "react";

const SolicitudEmpresa = (props) => {
  const { data, onClickAceptar, onClickRechazar, onClickCerrar } = props;

  const { empresa, domicilio, reclutador, descripcion, registro } = data;

  return (
    <div style={styles.card}>
      <div style={styles.row}>
        <div style={{ ...styles.col, marginLeft: "auto" }}>
          <button style={styles.btnCerrar} onClick={onClickCerrar}>X</button>
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
            <p style={styles.normalText}>{empresa.nombre}</p>
            <p style={styles.normalText}>{empresa.razonSocial}</p>
            <p style={styles.normalText}>{empresa.sector}</p>
            <p style={styles.normalText}>{empresa.rfc}</p>
          </div>
          <div style={{ ...styles.col_12, margin: "auto", textAlign: 'center', marginTop: '8px' }}>
            <p style={styles.normalText}>{empresa.email}</p>
            <p style={styles.normalText}>{empresa.telefono}</p>


            <p style={styles.normalText}>{empresa.sitioWeb}</p>
          </div>
          <div style={{ ...styles.col_12, margin: "auto", textAlign: 'center', marginTop: '8px' }}>
            <p style={styles.normalText}>Fecha de registro:</p>
            <p style={styles.normalText}>{registro.fecha}</p>
          </div>

        </div>
        <div style={styles.col_8}>
          <div style={styles.row}>
            <div style={styles.col_12}>
              <h2 style={styles.title}>Domicilio</h2>
              <p style={styles.normalText}>{domicilio.direccion}</p>
              <p style={styles.normalText}>{domicilio.colonia}</p>
              <p style={styles.normalText}>{domicilio.ciudad}</p>
              <p style={styles.normalText}>{domicilio.codigoPostal}</p>
              <p style={styles.normalText}>{domicilio.estado}</p>
            </div>
            <div style={styles.col_12}>
              <h2 style={styles.title}>Reclutador</h2>
              <p style={styles.normalText}>{reclutador.nombre}</p>
              <p style={styles.normalText}>{reclutador.email}</p>
              <p style={styles.normalText}>{reclutador.telefono}</p>
            </div>
            <div style={styles.col_12}>
              <h2 style={styles.title}>Descripción</h2>
              <p style={styles.normalText}>{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.row}>
        <div style={{ ...styles.col, marginLeft: "auto" }}>
          <button
            onClick={onClickRechazar}
            style={{ ...styles.btnAccion, ...styles.btnRechazar }}>
            Rechazar
          </button>
          <button
            onClick={onClickAceptar}
            style={{ ...styles.btnAccion, ...styles.btnAceptar }}>
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


// Ejemplo de uso

// const data = {
//   empresa: {
//     nombre: "Microsoft",
//     razonSocial: "[Razón Social]",
//     sector: '[Sector]',
//     rfc: '[RFC]',
//     email: "contacto@microsoft.com",
//     telefono: "12154 135 13513",
//     sitioWeb: 'www.microsoft.com'
//   },
//   registro: {
//     fecha: "3 de enero de 2022"
//   },
//   domicilio: {
//     direccion: "[Dirección]",
//     colonia: "[Colonia]",
//     ciudad: "[ciudad]",
//     codigoPostal: "[Codigo Postal]",
//     estado: "[Estado]"
//   },
//   reclutador: {
//     nombre: "[Nombre]",
//     email: "[Email]",
//     telefono: "[Telefono]"
//   },
//   descripcion: "[descripcion]"
// }


// <SolicitudEmpresa
//   data={data}
//   onClickAceptar={(e) => alert("Aceptar")}
//   onClickRechazar={(e) => alert("Rechazar")}
//   onClickCerrar={(e) => alert("Cerrar")}
// />