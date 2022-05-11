import React,{ createContext, useState } from "react";

export const RegisterContext = createContext()
const Provider = ({children})=> {

    const [form,setForm] = useState({
        nombreEmpresa: '', 
        usuario: '', 
        correoElectronico: '', 
        telefonoEmpresa: '', 
        logo: '', 
        rfc: '', 
        razonSocial: '', 
        sector: '', 
        descripcion: '', 
        pagina: '', 
        pais: 'México', 
        estado: '', 
        ciudad: '', 
        codigoPostal: '', 
        colonia: "",
        direccion:"",
        numExterior: '', 
        numInterior: '', 
        nombreContacto: '',
        apellido: "",
        telefonoContacto: "",
      })
  
    const value = {
        form,
        setForm:(data)=>{
            setForm(data)
        },
    }

    return (
        <RegisterContext.Provider value={value}>
            {children}
        </RegisterContext.Provider>
    )
}

export default {
    Provider,
    Consumer: RegisterContext.Consumer
}