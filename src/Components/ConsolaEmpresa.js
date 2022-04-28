import React from 'react'
import LeftBarnav from './LeftBarNav'
import CrearVacante from './CrearVacante'
import StatusPuesto from './StatusPuesto'

const ConsolaEmpresa = ({optionSelected,setOptionSelected}) => {
    console.log(optionSelected)

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
            <LeftBarnav optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
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