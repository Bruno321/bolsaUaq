import React, { useState } from "react";
import VacantCard from './VacantCard'
import DropDownMenuFilter from "./DropDownMenuFilter";
import SeguimientoVacante from "./SeguimientoVacante";


const InfoToDisplay = ({title,data,optionSelected}) => {
    // data must be an array []
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <DropDownMenuFilter/>
      {data.map((data)=>{
        return (
          <VacantCard props={data}/>
        )
      })}
    </div>
  );
};

export default InfoToDisplay;

const styles = {
  container: {
    minHeight: "66vh",
    height: "78vh", 
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
