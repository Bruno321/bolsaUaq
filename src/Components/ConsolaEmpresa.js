import React,{useContext} from 'react'
import LeftBarnav from './LeftBarNav'
import CrearVacante from './CrearVacante'
import InfoToDisplay from './InfoToDisplay'
import {DataToShowContext} from '../Context/DataToShowContext'

const ConsolaEmpresa = () => {
    const leftBarNavTitles = [
        {name:"Crear Vacante",value:0},
        {name:"Status del Puesto",value:4}
    ]
    const {optionSelected,detailSelected} = useContext(DataToShowContext)

    const componentToRender = () => {
        if(optionSelected==0){
            return <CrearVacante/>
        }
        if(optionSelected==4 && detailSelected==false){
            return <InfoToDisplay title={"Seguimiento de vacantes"} />
        }
        if(optionSelected==4 && detailSelected){
            return <CrearVacante/>
        }
    }
    return (
        <div style={styles.contentContainer}>
            <LeftBarnav title={"BALSOFT"} data={leftBarNavTitles} />
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