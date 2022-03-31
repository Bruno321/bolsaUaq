import React, {useContext} from 'react';
import {Context} from '../../Context/LoginContext'

const LoginVinculacion = () => {
    const {iniciarSesion,setUserTypeFunc} = useContext(Context)
    const handleClick = () => {
        setUserTypeFunc(true)
        iniciarSesion()
    }
    return (
        <div>
            Login vinculacion
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default LoginVinculacion