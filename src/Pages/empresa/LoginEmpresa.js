import React, {useContext} from 'react';
import {Context} from '../../Context/LoginContext'


const LoginEmpresa = () => {
    const {iniciarSesion,setUserTypeFunc} = useContext(Context)
    const handleClick = () => {
        setUserTypeFunc(false)
        iniciarSesion()
    }
    return (
        <div>
            Login empresa
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default LoginEmpresa