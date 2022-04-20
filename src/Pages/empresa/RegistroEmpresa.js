import React, {Component} from 'react';
import Form from "../../Components/signup-company/Form"
import "../../Components/signup-company/Form.css"

class RegistroEmpresa extends Component {
    
    render(){
    return <>
        <div className = "screen-register">
            <div className = "form-container">
                <Form />
            </div>
            <div className = "img-half-screen">

            </div>
        </div>
     </>
    }
}

export default RegistroEmpresa