import React, {useContext} from 'react';
import {Context} from '../../Context/LoginContext'

const ValidarEmpresa = () => {
    const {cerrarSesion} = useContext(Context)
    return (
        <div>
            Validar empresa
            <button onClick={cerrarSesion}>Cerrar sesion</button>
        </div>
    )
}

export default ValidarEmpresa