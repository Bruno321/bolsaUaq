import React,{ createContext, useState } from "react";

export const DetailContext = createContext()
const Provider = ({children})=> {

    const [data,setData] = useState({})
    const [formm,setFormm] = useState({
        nombreVacante: '', 
        descripcion: '', 
        requisitos: '', 
        competencias: '', 
        tipoContratacion: '', 
        tipoEmpleo: '', 
        informacion: '', 
        estado: 'Querétaro', 
        ciudad: '', 
        nivelIngles: 'Básico', 
        rangoSueldo: '', 
        carrera: 'Licenciatura en Informática', 
        area: '', 
        horario: "",
        contacto:"",
        numeroPersonas: '', 
        prestaciones: '', 
        otrosRequisitos: '',
        nombreEmpresa: "",
        id:0
      })
  
    const value = {
        data,
        setData:(data)=>{
            setData(data)
        },
        formm,
        setFormm:(data)=>{
            setFormm(data)
        },
    }

    return (
        <DetailContext.Provider value={value}>
            {children}
        </DetailContext.Provider>
    )
}

export default {
    Provider,
    Consumer: DetailContext.Consumer
}