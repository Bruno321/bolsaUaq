import React,{useContext, useEffect,useState} from 'react'
import LeftBarnav from './LeftBarNav'
import CrearVacante from './CrearVacante'
import InfoToDisplay from './InfoToDisplay'
import {DataToShowContext} from '../Context/DataToShowContext'
import axios from 'axios'

const ConsolaEmpresa = () => {
    const leftBarNavTitles = [
        {name:"Crear Vacante",value:0},
        {name:"Status del Puesto",value:4}
    ]
    const [title,setTitle] = useState('')
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
    const token = window.localStorage.getItem('token')
    useEffect(()=>{
        axios.get('http://localhost:3000/empresaInfo',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
        .then((response)=>{
            setTitle(response.data.message.nombreEmpresa)
        }).catch((e)=>{
            console.log("error",e)
        })
    },[])
    return (
        <div style={styles.contentContainer}>
            <LeftBarnav title={title} data={leftBarNavTitles} />
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