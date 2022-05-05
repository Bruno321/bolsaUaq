import React from 'react'
import SolicitudEmpresa from './SolicitudEmpresa'
import InfoVacante from './InfoVacante'

// Depending on the number of optionSelected is the detail component that is going to be rendered
const CardDetailManager = ({optionSelected}) => {
const data = {
  empresa: {
    nombre: "Microsoft",
    razonSocial: "[Razón Social]",
    sector: '[Sector]',
    rfc: '[RFC]',
    email: "contacto@microsoft.com",
    telefono: "12154 135 13513",
    sitioWeb: 'www.microsoft.com'
  },
  registro: {
    fecha: "3 de enero de 2022"
  },
  domicilio: {
    direccion: "[Dirección]",
    colonia: "[Colonia]",
    ciudad: "[ciudad]",
    codigoPostal: "[Codigo Postal]",
    estado: "[Estado]"
  },
  reclutador: {
    nombre: "[Nombre]",
    email: "[Email]",
    telefono: "[Telefono]"
  },
  descripcion: "[descripcion]"
}
    const handleRender = () => {
        if(optionSelected==0){
            return <SolicitudEmpresa
              data={data}
              onClickAceptar={(e) => alert("Aceptar")}
              onClickRechazar={(e) => alert("Rechazar")}
              onClickCerrar={(e) => alert("Cerrar")}
            />
        }
        if(optionSelected==1){
            return <InfoVacante info={{titulo: '', descripcion: '', requisitos: '', competencias: '', tipoContratacion: '', tipoEmpleo: '', informacion: '', estado: '', ciudad: '', nivelIngles: '', rangoSueldo: '', carrera: '', area: '', numeroPersonas: '', prestaciones: '', otrosRequisitos: ''}}/>
        }   
        if(optionSelected==2){

        }
        if(optionSelected==3){

        }
    }
    return (
        <>
            {handleRender()}
        </>
    )
}

export default CardDetailManager