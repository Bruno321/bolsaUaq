import React, { useState } from "react";
import VacantCard from './VacantCard'
import VacantesValidadas from './VacantesValidadas'
import DropDownMenuFilter from "./DropDownMenuFilter";


const StatusPuesto = () => {
  const data = [
    {
      title:'titulo',
      description:'description',
      schedule:'schedule',
      salary:'salary',
      companyName:'companyName',
      onClickDetails:'onClickDetails'
    },
    {
      title:'titulo2',
      description:'description2',
      schedule:'schedule2',
      salary:'salary2',
      companyName:'companyName2',
      onClickDetails:'onClickDetails2'
    },
    {
      title:'titulo3',
      description:'description3',
      schedule:'schedule3',
      salary:'salary3',
      companyName:'companyName3',
      onClickDetails:'onClickDetails3'
    },
  ]
  console.log(data)
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Seguimiento de Vacantes:</h2>
      <DropDownMenuFilter/>
      {data.map((data)=>{
        return (
          <VacantCard props={data}/>
        )
      })}
    </div>
  );
};

export default StatusPuesto;

const styles = {
  container: {
    // maxWidth: "980px",
    // minWidth: "320px",
    minHeight: "66vh",
    height: "100%", 
    width: "100%" ,
    margin: "14px", 
    border: "1px solid black", 
    // padding: "20px 50px 40px 50px",
    padding: "30px 60px 50px 60px",

  },
  parrafo: {
    // fontSize: "1.8rem",
    fontSize: "2.2rem",
    fontWeight: "300",
  },
  title: {
    fontSize: "3.4rem",
    fontWeight: "400",
    margin: "20px 0px",
    paddingBottom: "10px",
  },
  input: {
    width: "98%",
    height: "30px",
    paddingLeft: "10px",
    border: "1px solid #505050",
    borderRadius: "5px",
    margin: "10px 0px 15px 0px",
  },
  inputLarge: {
    width: "98%",
    height: "60px",
    paddingLeft: "10px",
    border: "1px solid #505050",
    borderRadius: "5px",
    margin: "10px 0px",
  },
  select: {
    width: "95%",
    height: "32px",
    color: "#505050",
    margin: "10px 0px 15px 0px",
    paddingLeft: "10px",
    borderRadius: "5px",
  },
  buttonBack : {
    width: "36%",
    height: "40px",
    color: "var(--purple)",
    background: "white",
    border: "1px solid var(--purple)",
  },
  button : {
    width: "36%",
    height: "40px",
    marginLeft: "10px",
    background: "var(--purple)",
    color: "white",
    border: "none",
  },
};
