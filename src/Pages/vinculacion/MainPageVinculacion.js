import React, {useContext} from 'react';

import {Context} from '../../Context/LoginContext'
import {DataToShowContext} from '../../Context/DataToShowContext'

import HeaderVinculacion from '../../Components/HeaderVinculacion'
import LeftBarNav from '../../Components/LeftBarNav'
import InfoToDisplay from '../../Components/InfoToDisplay';

const MainPageVinculacion = () => {
    const {cerrarSesion} = useContext(Context)
    const {optionSelected} = useContext(DataToShowContext)
    const titles = [
        "Validación de empresas",
        "Vacantes validadas",
        "Vacantes validadas"
    ]

    const leftBarTitles = [
        "Validar Empresa",
        "Validar Vacante",
        "Ver Vacantes"
    ]

    return (
        <div style={styles.container}>
            <HeaderVinculacion />
            <div style={styles.bodyContainer}>
                <LeftBarNav title={"ADMIN"} data={leftBarTitles}/>
                <InfoToDisplay title={titles[optionSelected]} />
            </div>
        </div>
    )
}

const styles = {
    container:{
        height:"100vh",
    },
    bodyContainer: {
        display: "flex",
    }
}

export default MainPageVinculacion