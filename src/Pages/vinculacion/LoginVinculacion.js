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
        axios.post('http://localhost:3000/loginVinculador',{data},{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors',})
            .then((response)=>{
                setUserTypeFunc(true)
                iniciarSesion(response.data.message)
            }).catch((e)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario o contraseña incorrectos',
                    text: 'Intente de nuevo',
                })
            })
    }
    return (
        <div className='main'>
            <section className='leftSide'>
                <h1 className='title'>Iniciar sesión</h1>
                <p className='subTitle'>NOTA: ¡Recuerde iniciar sesión con los datos que le hemos proporcionado!</p>
                <div className='formContainer'>
                    <label className='text'>Usuario / Expediente</label>
                    <input type="text" placeholder="000000" className='input' value={data.usuario} onChange={(e)=>setData({...data,usuario:e.target.value})}/>
                    <label className='text'>Contraseña</label>
                    <input type="password" placeholder="********" className='input' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
                    <button className="btnHover btnLogin" onClick={handleClick}>Iniciar Sesión</button>
                </div>
                <div className='imgContainer'>
                    <img src={logoFif} className='logoFif' />
                    <img src={logoCD} className='logoCD' />
                </div>
            </section>
            <section className='rightSide'>
                <h2 className='textMedium'>¡Bienvenido vinculador!</h2>
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