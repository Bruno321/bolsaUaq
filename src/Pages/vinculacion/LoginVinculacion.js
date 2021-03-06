import React, {useContext,useState} from 'react';
import {Context} from '../../Context/LoginContext';
import axios from 'axios';
import Swal from 'sweetalert2';
// Assets
import logoFif from'../../Assets/img/fifUaq_Logo.png';
import logoCD from '../../Assets/img/Logo-CD.png';
import vinculador from '../../Assets/img/vinculador.png';
// Styles
import './LoginVinculacion.css';

const LoginVinculacion = () => {
    const {iniciarSesion,setUserTypeFunc} = useContext(Context)
    const [data,setData] = useState({
        usuario:"",
        password:""
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
            axios.post('http://localhost:3000/api/auth/vinculador',{data},{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors',})
            .then((response)=>{
                setUserTypeFunc(true)
                iniciarSesion(response.data.message)
            }).catch((e)=>{
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
                })
            })
        }
    }
    return (
        <div className='main'>
            <section className='leftSide'>
                <h1 className='title'>Iniciar sesi??n</h1>
                <p className='subTitle'>NOTA: ??Recuerde iniciar sesi??n con los datos que le hemos proporcionado!</p>
                <div className='formContainer'>
                    <label className='text'>Usuario / Expediente</label>
                    <input type="text" placeholder="000000" className='input' value={data.usuario} onChange={(e)=>{setData({...data,usuario:e.target.value}); document.getElementById('usuario').style['border-color'] = 'black';}} id="usuario"/>
                    <label className='text'>Contrase??a</label>
                    <input type="password" placeholder="********" className='input' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value}); document.getElementById('password').style['border-color'] = 'black';}} id="password"/>
                    <button className="btnHover btnLogin" onClick={handleClick}>Iniciar Sesi??n</button>
                </div>
                <div className='imgContainer'>
                    <img src={logoFif} className='logoFif' />
                    <img src={logoCD} className='logoCD' />
                </div>
            </section>
            <section className='rightSide'>
                <h2 className='textMedium'>??Bienvenido vinculador!</h2>
                <img src={vinculador} className='imgVinculador' />
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