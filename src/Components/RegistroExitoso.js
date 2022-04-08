import React from 'react';
import checkMark from '../Assets/img/checkMark.png'
import Button from './Button';

const Modal = (props) => {
    //const [show, setShow] = useState(false);

    const { setShow } = props;

    const handleClose = () => setShow(false);
  
    return (
        <div style={{...styles.modalContainer}}>
          <div style={styles.modal}>
            <img src={checkMark} style={styles.image}/>
            <h1 style={{fontSize:"2.4rem"}}>FELICIDADES ¡SOLICITASTE REGISTRO!</h1>
            <div style={styles.pContainer}>
              <p style={{fontSize:"2.4rem", fontFamily: 'Roboto', fontWeight: "300"}}>
              Su solicitud está siendo procesada, en caso de ser aceptado, 
              se le enviará una contraseña temporal al correo donde se registró.</p>
            </div>
            <Button title={'Continuar'} styles={{background: '#5F4FEB', color: 'white', margin: '25px 0px', width:'40%'}}
            click={handleClose}/>
          </div>
        </div>
    );
  };

const styles = {
	modalContainer:{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal:{
    width: "40%",
    height: "53%",
    backgroundColor: "#ffffff",
    border:  "1.5px solid black",
    borderRadius: "12px",
    display: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    width: "9vw",
    height: "18vh",
    marginTop: '4%',
    marginBottom: '2%',
  },
  pContainer:{
    width: "90%",
    marginLeft:"5%"
  }
};
  
export default Modal;