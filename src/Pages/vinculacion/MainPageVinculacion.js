import React, {useContext,useState} from 'react';
import {Context} from '../../Context/LoginContext'
import HeaderVinculacion from '../../Components/HeaderVinculacion'
import LeftBarNav from '../../Components/LeftBarNav'

const MainPageVinculacion = () => {
    const {cerrarSesion} = useContext(Context)
    const [optionSelected,setOptionSelected] = useState(0) 
    
    const data = [
        "Validar Empresa",
        "Validar Vacante",
        "Ver Vacantes"
    ]

    return (
        <div style={styles.container}>
            <HeaderVinculacion />
            <div style={styles.bodyContainer}>
                <LeftBarNav title={"ADMIN"} data={data} optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
                
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