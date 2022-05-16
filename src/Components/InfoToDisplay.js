import React, { useState, useEffect, useContext } from "react";
import {DataToShowContext} from '../Context/DataToShowContext'

import InfoCard from './InfoCard'
import DropDownMenuFilter from "./DropDownMenuFilter";
import SeguimientoVacante from "./SeguimientoVacante";
import dataFetch from "../Assets/js/dataFetch";
import CardDetailManager from './CardDetailManager'
import LoadingSpinner from './LoadingSpinner'

const InfoToDisplay = ({title}) => {
  const {optionSelected,detailSelected} = useContext(DataToShowContext)
  
  // optionSelected defines the type of elements the card will gave and the route of the fetch
  /*
    0-validarEmpresas
    1-validar vacantes
    2-ver vacantes
    3-status del puesto
  */
  const [data,setData] = useState([])
  const [filteredData,setFilteredData] = useState([])
  const [filterOption,setFilterOption] = useState(0)
  const [loading,setLoading] = useState(true)
  const [timedOut,setTimedOut] = useState(false)

  // console.log("FILTRADA",filteredData)
  // console.log("data",data)
  useEffect(()=>{
    async function fetchAPI(){
      setData(dataFetch(optionSelected,setLoading))
      console.log("RETURN",dataFetch(optionSelected,setLoading))
    }

    fetchAPI()
    setFilteredData([])
    // Se esta en validar empresa o validar vacantes, cuyo filtro siempre sera 2 "pendientes"
  },[optionSelected])

  useEffect(()=>{
    if(optionSelected==0 || optionSelected==1){
      data.forEach(e=>{
        if(e.status==2){
          setFilteredData(filteredData => [...filteredData,e])
        }
      })
    }else{
      data.forEach(e=>{
        if(e.status==filterOption){
          setFilteredData(filteredData => [...filteredData,e])
        }
      })
    }
  },[data])

  useEffect(()=>{
    setFilteredData([])
    data.forEach(e=>{
      if(e.status==filterOption){
        setFilteredData(filteredData => [...filteredData,e])
      }
    })
  },[filterOption])

  const renderFilter = () => {
    if(optionSelected==2 || optionSelected==3 || optionSelected==4){
      return <DropDownMenuFilter setFilterOption={setFilterOption} filterOption={filterOption}/>
    }
  }
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
                  <InfoCard props={data} />
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
