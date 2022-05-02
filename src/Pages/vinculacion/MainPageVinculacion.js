import React, {useContext} from 'react';
import {Context} from '../../Context/LoginContext'
import HeaderVinculacion from '../../Components/HeaderVinculacion'
import LeftBarNav from '../../Components/LeftBarNav'

const MainPageVinculacion = () => {
    const {cerrarSesion} = useContext(Context)

    return (
        <div style={styles.container} className="KAKA">
            <HeaderVinculacion />
            <LeftBarNav />
        </div>
    )
}

const styles = {
    container:{
        height:"100vh",
    }
}

export default MainPageVinculacion