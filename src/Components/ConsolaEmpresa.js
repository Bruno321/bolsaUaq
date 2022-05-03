import React from 'react'
import LeftBarnav from './LeftBarNav'
import CrearVacante from './CrearVacante'
import StatusPuesto from './StatusPuesto'

const ConsolaEmpresa = ({optionSelected,setOptionSelected}) => {
    const data = [
        "Crear Vacante",
        "Status del Puesto"
    ]

    const componentToRender = () => {
        if(optionSelected==0){
            return <CrearVacante/>
        }
        if(optionSelected==1){
            return <StatusPuesto/>
        }
    }
    return (
        <div style={styles.contentContainer}>
            <LeftBarnav title={"BALSOFT"} data={data} optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
            {componentToRender()}
        </div>
    )
}

export default ConsolaEmpresa

const styles = {
    contentContainer: {
        width: '100%',
        display:"flex"
    }
}