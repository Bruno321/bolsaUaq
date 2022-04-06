import React, {useContext} from 'react';
import {Context} from '../../Context/LoginContext'
import LeftBarnav from '../../Components/LeftBarNav';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const MainPageEmpresa = () => {
    const {cerrarSesion} = useContext(Context)

    return (
        <div>
            <Header/>
            <div>
                <LeftBarnav/>
                <div>
                    
                </div>
            </div>
            <Footer/>
            {/* Main Page empresa
            <button onClick={cerrarSesion}>Cerrar sesion</button> */}
        </div>
    )
}

export default MainPageEmpresa