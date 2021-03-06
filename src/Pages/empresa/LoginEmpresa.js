import React, {useContext,useState} from 'react';
import {Context} from '../../Context/LoginContext';
import Button from '../../Components/Button';
import imgDev from "../../Assets/img/dev.png";
import fifLogo from "../../Assets/img/fif-logo.png";
import logoCD from "../../Assets/img/Logo-CD.png";
import logoPortal from "../../Assets/img/Logo-portal.png";
import {Link } from '@reach/router';
import ModalInforCambiarPassword from '../../Components/ModalInfoCambiarPassword';
import axios from 'axios';
import Swal from 'sweetalert2';
// import './LoginEmpresa.css';
import '../../css/sweetAlertStyles.css'

const LoginEmpresa = () => {
    const {iniciarSesion,setUserTypeFunc} = useContext(Context)
    const [showModal,setShowModal] = useState(false)
    const [data,setData] = useState({
        usuario: "",
        password: ""
    })
    const handleClick = () => {
        if (data.usuario == '' || data.password == '') {
            if(data.usuario == '' && data.password != ''){
                document.getElementById('usuario').focus();
                document.getElementById('usuario').style['border-color'] = 'red';
            }else if(data.password == '' && data.usuario != ''){
                document.getElementById('password').focus();
                document.getElementById('password').style['border-color'] = 'red';
            }else{
                document.getElementById('usuario').focus();
                document.getElementById('usuario').style['border-color'] = 'red';
                document.getElementById('password').style['border-color'] = 'red';
            }
            Swal.fire({
                icon: 'error',
                title: 'Falta llenar campos',
                text: 'Intente de nuevo',
                width: '45%',
                padding: '5rem 10rem',
                background: '#fff',
                customClass: {
                    htmlContainer: 'htmlContainer-class',
                    title: 'title-class',
                    confirmButton: 'confirmButton-class',
                    icon: 'icon-class'
                }
            });
        }else{
            //Mandar a hacer el fetch
            axios.post('http://localhost:3000/api/auth/empresa',{data},{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors',})
            .then((response)=>{
                setUserTypeFunc(false)
                iniciarSesion(response.data.message)
            }).catch((e)=>{
                console.log(e)
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario o contrase??a incorrectos',
                    text: 'Intente de nuevo',
                    width: '50%',
                    padding: '5rem 10rem',
                    background: '#fff',
                    customClass: {
                        htmlContainer: 'htmlContainer-class',
                        title: 'title-class',
                        confirmButton: 'confirmButton-class',
                        icon: 'icon-class'
                    }
                });
            });
        };
    }

    const handleModal = () => {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
          )
    }
    
    
    return (
        <div style={styles.container} className="LoginContainer">
            {showModal ? 
            <div style={styles.modalContainer} onClick={()=>setShowModal(false)}>
                <ModalInforCambiarPassword/>   
            </div>: null}
           
            <div style={styles.containerLeft}>
                <div style={styles.containerImgLeft}>
                    <img src={imgDev} style={styles.imgDev}/>
                </div>
                <div style={styles.containerInfoCarrusel}>
                    <h1>Encuentre a sus pr??ximos <br/> empleados. R??pido.</h1>
                    <p style={{fontSize:"1.3rem"}}>Sabe a qui??n est?? buscando. <br/> Lo ayudaremos a encontrarlo</p>
                </div>
            </div>

            <div style={styles.containerForm}>
                <div style={styles.containerImgLogoPortal}>
                    <img src={logoPortal} style={styles.imgLogoPortal}/>
                </div>
                <h1 style={styles.h1}>??Est?? listo para dar el <br/> siguiente paso?</h1>
                <div style={styles.form}>
                    <legend style={styles.legend}>Inicia sesi??n</legend>
                    <label style={styles.text}>Usuario </label>
                    <input type="text" placeholder="000000" style={styles.input} value={data.usuario} onChange={(e)=>{setData({...data,usuario:e.target.value}); document.getElementById('usuario').style['border-color'] = 'black';}} id='usuario'/>
                    <label style={styles.text}>Contrase??a</label>
                    <input type="password" placeholder="********" style={styles.input} value={data.password} onChange={(e)=>{setData({...data,password:e.target.value}); document.getElementById('password').style['border-color'] = 'black';}} id='password'/>
                    <div style={styles.containerA}>
                        <div  style={styles.a} onClick={()=>setShowModal(true)}>??Olvidaste tu contrase??a?</div>
                    </div>
                    <Button title={'Iniciar Sesi??n'} styles={{background: '#5F4FEB', color: 'white', margin: '5px 0px'}} click={handleClick}/>
                    <Link to="/register" >
                        <Button title={'Registrarse'} styles={{background: 'white', color: '#5F4FEB', margin: '5px 0px'}}/>
                    </Link>
                </div>
                <div style={styles.containerLogosFacultad}>
                        <img src={fifLogo} style={styles.imgLogosFacultad}/>
                        <img src={logoCD} style={styles.imgLogosFacultad}/>

                </div>
            </div>
        </div>
    )
}

export default LoginEmpresa;

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
    },
    containerLeft: {
        width: '50%',
        height: '100%',
        background: '#2B246B',
        display: 'flex',
        padding: '0px 20px 40px 20px',
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImgLeft: {
        // width: '90%',
        height: '78%',
        // background: 'red',
        // margin: '20px 0px'
    },
    imgDev: {
        width:"90%",
        // height:"300px"
    },
    containerInfoCarrusel: {
        textAlign: 'center',
        color: 'white'
    },
    containerForm: {
        width: '50%',
        height: '100%',
        background: '#FFFFFF',
        padding: '10px 40px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'auto'
        // justifyContent: 'space-around'
    },
    containerImgLogoPortal: {
        width: '250px',
        height: '100px',
        // background: 'red',
        margin: '0px 0px 20px 0px'
    },
    imgLogoPortal: {
        width: '100%',
        height: '100%',
    },
    form: {
        width: '100%',
        height: '50%',
        margin: '20px 0px 0px 0px'
    },
    legend: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '20px'
    },
    h1: {
        fontSize: '30px',
        textAlign: 'center'
    },
    containerA: {
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        margin: '5px 0px 20px 0px'
    },
    a: {
        fontSize: '14px',
        color: 'black',
        cursor:"pointer",
        textDecoration: "underline"
    },
    containerLogosFacultad: {
        width: '100%',
        height: '50px',
        // background: 'red',
        display: 'flex',
        justifyContent: 'center'
    },
    imgLogosFacultad: {
        // width: '40px',
        height: '40px',
        margin: '0px 10px',
    },
    modalContainer:{
        position:"absolute",
        display:"flex",
        width:"100%",
        height:"100%",
    },
    text: {
        fontSize: "1.6rem",
    },
    input: {
        outline: "none",
        borderColor: 'black'
    },
    sweet: {
        width: '60rem',
        height: '40rem'
    },
    containerClass: {
        backgroundColor: 'aquamarine'
    }
}