import React, { useState } from "react";
import VacantCard from './VacantCard'
import DropDownMenuFilter from "./DropDownMenuFilter";
import SeguimientoVacante from "./SeguimientoVacante";
import InfoVacante from "./InfoVacante";


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
          <div>
            <VacantCard props={data}/>
           
            {/* <SeguimientoVacante info={{titulo: '', descripcion: '', horario: '', salario: '', lugar: '', contacto: '', empresa: '', status: ''}} /> */}
          </div>
        )
      })}
    </div>
  );
};

export default StatusPuesto;

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
