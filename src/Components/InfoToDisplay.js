import React, { useState, useEffect, useContext } from "react";
import {DataToShowContext} from '../Context/DataToShowContext'
import InfoCard from './InfoCard'
import DropDownMenuFilter from "./DropDownMenuFilter";
import SeguimientoVacante from "./SeguimientoVacante";
import dataFetch from "../Assets/js/dataFetch";
import CardDetailManager from './CardDetailManager'
import LoadingSpinner from './LoadingSpinner'
import axios from "axios"

const InfoToDisplay = ({title}) => {
  const {optionSelected,detailSelected} = useContext(DataToShowContext)
  const token = window.localStorage.getItem('token')
  
  // optionSelected defines the type of elements the card will gave and the route of the fetch
  /*
    0-validarEmpresas
    1-validar vacantes
    2-ver vacantes
    3-status del puesto
  */
  const [data,setData] = useState([])
  const [filteredData,setFilteredData] = useState([])
  // La opciones de filtrado del dropdownmenu 0-aceptadas,1-rechazadsa,2-pendientes
  const [filterOption,setFilterOption] = useState(0)
  const [loading,setLoading] = useState(true)
  const [timedOut,setTimedOut] = useState(false)

  // Hace los fetchs dependiendo que este seleccionado (se ejecuta cada que se cambia de opcion)
 
  useEffect(()=>{
    // console.log("entre al use Effect----------------------------------------------------------")
    // Si se selecciono validar empresa o ver empresas
    if(optionSelected==0 || optionSelected==3){
         axios.get('http://localhost:3000/empresa',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
            .then((response)=>{
               
                setData(response.data.message)
                setLoading(false)
            }).catch((e)=>{
                console.log("error",e)
            })
    }
    // Si se selecciono validar vacante o ver vacante
    if(optionSelected==1|| optionSelected==2  ){
      axios.get('http://localhost:3000/vacantes',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
         .then((response)=>{
             setData(response.data.message)
             setLoading(false)
         }).catch((e)=>{
             console.log("error",e)
         })
    }
    // Si se selecciono status del puesto
  if(optionSelected==4 ){
    axios.get('http://localhost:3000/vacante',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
      .then((response)=>{
          
          setData(response.data.message)
          setLoading(false)
      }).catch((e)=>{
          console.log("error",e)
          setTimedOut(true)
      })
    }
    setFilteredData([])
  },[optionSelected])

  // Aplica el filtro por status dependiendo que este seleccionado (se ejecuta despues de cada fetch)
  useEffect(()=>{

    // Si se esta en validar empresa o validar vacantes el filtro que siempre debe tener es 2 (pendientes)
    if(optionSelected==0 || optionSelected==1){
      data.forEach(e=>{
        if(e.status==2){
          setFilteredData(filteredData => [...filteredData,e])
        }
      })
    }else{
    // Si no se usa el filtro que el usuario elijio
      data.forEach(e=>{
        if(e.status==filterOption){
          setFilteredData(filteredData => [...filteredData,e])
        }
      })
    }
  },[data])

  // Aplica el filtro por aceptadas o rechazadas (se ejecuta cada que el usuario cambia el filtro)
  useEffect(()=>{
    setFilteredData([])
    data.forEach(e=>{
      if(e.status==filterOption){
        setFilteredData(filteredData => [...filteredData,e])
      }
    })
  },[filterOption])

  const renderFilter = () => {
    if(optionSelected==2 || optionSelected==3){
      return <DropDownMenuFilter options={[
        { label: "Aceptadas", value: 0},
        { label: "Rechazadas", value: 1},
    ]} setFilterOption={setFilterOption} filterOption={filterOption}/>
    }
    if( optionSelected==4){
      return <DropDownMenuFilter options={[
        { label: "Aceptadas", value: 0},
        { label: "Rechazadas", value: 1},
        { label: "Pendientes", value: 2},
    ]} setFilterOption={setFilterOption} filterOption={filterOption}/>
    }
  }
  console.log(filteredData)
  return (
    <div style={styles.container}>
      {detailSelected ? 
        <CardDetailManager/>
      : 
        <>
          <h2 style={styles.title}>{title}:</h2>
          {renderFilter()}
          {!timedOut ? 
            !loading ? 
              filteredData.length!=0 ? filteredData.map((data)=>{
                return (
                  <InfoCard props={data} key={data.vacanteId ? data.vacanteId : data.empresaId} />
                )
              }): <div>No hay elementos de este tipo</div>
            : 
              <div style={styles.spinner}>
                <LoadingSpinner />
              </div>
           : 
            <div>Algo salio mal</div>}
        </>
      }
      
    </div>
  );
};

export default InfoToDisplay;

const styles = {
  container: {
    minHeight: "80vh",
    width: "100%" ,
    margin: "14px", 
    border: "1px solid black", 
    padding: "30px 60px 50px 60px",

  },
  title: {
    fontSize: "3.4rem",
    fontWeight: "400",
    margin: "20px 0px",
    paddingBottom: "10px",
  },
  spinner: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"20%"
  }

};
