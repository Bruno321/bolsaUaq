import React, {useContext,useState} from 'react';
import {Context} from '../../Context/LoginContext'
import HeaderVinculacion from '../../Components/HeaderVinculacion'
import LeftBarNav from '../../Components/LeftBarNav'
import InfoToDisplay from '../../Components/InfoToDisplay';

const MainPageVinculacion = () => {
    const {cerrarSesion} = useContext(Context)
    const [optionSelected,setOptionSelected] = useState(0) 
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
                <LeftBarNav title={"ADMIN"} data={leftBarTitles} optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
                <InfoToDisplay title={titles[optionSelected]} optionSelected={optionSelected} />
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
        height: "100%"
    }
}

export default MainPageVinculacion