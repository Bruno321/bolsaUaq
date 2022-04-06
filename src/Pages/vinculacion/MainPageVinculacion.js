import React, {useContext} from 'react';
import {Context} from '../../Context/LoginContext'

const MainPageVinculacion = () => {
    const {cerrarSesion} = useContext(Context)

    return (
        <div>
            Main Page empresa
            <button onClick={cerrarSesion}>Cerrar sesion</button>
        </div>
    )
}

export default MainPageVinculacion