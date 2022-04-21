import React, {useContext,useState} from 'react';
import {Context} from '../../Context/LoginContext'
import LeftBarnav from '../../Components/LeftBarNav';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import CrearVacante from '../../Components/CrearVacante';
import StatusPuesto from '../../Components/StatusPuesto';
import InfoVacante from '../../Components/InfoVacante';
import SolicitudEmpresa from '../../Components/SolicitudEmpresa';

const MainPageEmpresa = () => {
    const {cerrarSesion} = useContext(Context)
    const [option,setOption] = useState(0)
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
    return (
        <div>
            <Header/>
            <div style={styles.bodyContainer}>
                <LeftBarnav setOptionProp={setOption} optionProp={option} />
                {/* Dependiendo de la opcion es lo que renderiza */}
                <div style={styles.vacanteContainer}>
                    
                { option===0 ? <CrearVacante/> : null}
                { option===1 ? <StatusPuesto/> : null}

                </div>
            </div>
            <Footer/>
            <InfoVacante  info={{titulo: '', descripcion: '', requisitos: '', competencias: '', tipoContratacion: '', tipoEmpleo: '', informacion: '', estado: '', ciudad: '', nivelIngles: '', rangoSueldo: '', carrera: '', area: '', numeroPersonas: '', prestaciones: '', otrosRequisitos: ''}}/>
            <SolicitudEmpresa data={data}
                onClickAceptar={(e) => alert("Aceptar")}
                onClickRechazar={(e) => alert("Rechazar")}
                onClickCerrar={(e) => alert("Cerrar")} />
            Main Page empresa
            <button onClick={cerrarSesion}>Cerrar sesion</button>
        </div>
    )

}

export default MainPageEmpresa

const styles = {
    bodyContainer:{
        display:'flex',
        // width: '100%'
    },
    vacanteContainer:{
        width: '87%',
        padding:'5px',
        height:'100%',
        display: 'flex',

    }
}