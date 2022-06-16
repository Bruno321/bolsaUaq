import React,{useContext, useEffect,useState} from 'react'
import LeftBarnav from './LeftBarNav'
import CrearVacante from './CrearVacante'
import InfoToDisplay from './InfoToDisplay'
import {DataToShowContext} from '../Context/DataToShowContext'
import axios from 'axios'
import EditarPerfil from './EditarPerfil'

const ConsolaEmpresa = () => {
    const leftBarNavTitles = [
        {name:"Crear Vacante",value:0},
        {name:"Status del Puesto",value:4}
    ]
    const {optionSelected,detailSelected} = useContext(DataToShowContext)
    const [data,setData] = useState({})
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
        if(optionSelected==5){
            return <EditarPerfil data={data}/>
        }
    }
    const token = window.localStorage.getItem('token')
    useEffect(()=>{
        axios.get('http://localhost:3000/empresaInfo',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((response)=>{
            setData(response.data.message)
            console.log(response.data.message)
        }).catch((e)=>{
            console.log("error",e)
        })
    },[])
    return (
        <div style={styles.contentContainer}>
            <LeftBarnav title={data.nombreEmpresa} data={leftBarNavTitles} />
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