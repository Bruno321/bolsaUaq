import React from 'react'
import LeftBarnav from './LeftBarNav'
import CrearVacante from './CrearVacante'
import InfoToDisplay from './InfoToDisplay'

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
            return <InfoToDisplay title={"Seguimiento de vacantes"} optionSelected={3}/>
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