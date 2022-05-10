import React, {useContext} from 'react'
import SolicitudEmpresa from './SolicitudEmpresa'
import InfoVacante from './InfoVacante'
import {DetailContext} from '../Context/DetailContext'
import {DataToShowContext} from '../Context/DataToShowContext'


// Depending on the number of optionSelected is the detail component that is going to be rendered
const CardDetailManager = () => {

  const {data} = useContext(DetailContext)
  const {optionSelected} = useContext(DataToShowContext)

    const handleRender = () => {
        if(optionSelected==0 ){
            return <SolicitudEmpresa data={data} />
        }
        if(optionSelected==1 || optionSelected==2){
            return <InfoVacante info={{titulo: '', descripcion: '', requisitos: '', competencias: '', tipoContratacion: '', tipoEmpleo: '', informacion: '', estado: '', ciudad: '', nivelIngles: '', rangoSueldo: '', carrera: '', area: '', numeroPersonas: '', prestaciones: '', otrosRequisitos: ''}}/>
        }   
        if(optionSelected==3){

        }
    }
    return (
        <>
            {handleRender()}
        </>
    )
}

export default CardDetailManager