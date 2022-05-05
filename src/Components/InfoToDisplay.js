import React, { useState, useEffect } from "react";
import InfoCard from './InfoCard'
import DropDownMenuFilter from "./DropDownMenuFilter";
import SeguimientoVacante from "./SeguimientoVacante";
import dataFetch from "../Assets/js/dataFetch";
import CardDetailManager from './CardDetailManager'


const InfoToDisplay = ({title,optionSelected,setDetailSelected,detailSelected}) => {
  
  // optionSelected defines the type of elements the card will gave and the route of the fetch
  /*
    0-validarEmpresas
    1-validar vacantes
    2-ver vacantes
    3-status del puesto
  */
  const [data,setData] = useState([])
  useEffect(()=>{
    setData(dataFetch(optionSelected))
  },[optionSelected])

  return (
    <div style={styles.container}>
      {detailSelected ? 
        <CardDetailManager optionSelected={optionSelected}/>
      : 
        <>
          <h2 style={styles.title}>{title}:</h2>
          <DropDownMenuFilter/>
          {data.map((data)=>{
            return (
              <InfoCard props={data} optionSelected={optionSelected} setDetailSelected={setDetailSelected}/>
            )
          })}
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


};
