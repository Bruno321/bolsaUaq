import React, {Component} from 'react';
import Form from "../../Components/signup-company/Form";
import "../../Components/signup-company/form.css";

import Image from "../../Assets/img/register.png";

class RegistroEmpresa extends Component {
    
    render(){
    return <>
        <div className = "screen-register">
            <div className = "form-container">
                <h1>Registro de Empresa</h1>
                <p>Regístrate como empresa y empieza a publicar vacantes en 3 pasos.</p>
                <Form />
            </div>
            <div className = "img-half-screen">
                <h2>Ahorre tiempo y energía en el proceso de contratación.</h2>
                <img src = {Image} alt = "Imagen de registro"/>
            </div>
        </div>
    </>
    }
}

export default RegistroEmpresa