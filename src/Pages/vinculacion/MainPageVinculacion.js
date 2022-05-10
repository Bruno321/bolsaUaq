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
    const leftBarNavTitles = [
        {name:"Validar Empresa",value:0},
        {name:"Validar Vacante",value:1},
        {name:"Ver Vacantes",value:2},
    ]

    return (
        <div style={styles.container}>
            <HeaderVinculacion />
            <div style={styles.bodyContainer}>
                <LeftBarNav title={"ADMIN"} data={leftBarNavTitles}/>
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