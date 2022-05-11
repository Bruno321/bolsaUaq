import React,{ useState,useContext } from "react";
import {RegisterContext} from "../../Context/RegisterContext";

function Reclutador (){

    const {form,setForm} = useContext(RegisterContext)

    return(
        <div className = "reclutador-container">
            <input type = "text" placeholder="Nombre(s)*" value={form.nombreContacto} onChange={(e)=>setForm({...form,nombreContacto:e.target.value})}/>
            <input type = "text" placeholder="Apellidos*" value={form.apellido} onChange={(e)=>setForm({...form,apellido:e.target.value})}/>
            <input type = "text" placeholder="Teléfono*" value={form.telefonoContacto} onChange={(e)=>setForm({...form,telefonoContacto:e.target.value})}/>
        </div>
    )
}

export default Reclutador;