import React,{ useState,useContext } from "react";
import {RegisterContext} from "../../Context/RegisterContext";

function Reclutador (){

    const {form,setForm} = useContext(RegisterContext)

    return(
        <div className = "reclutador-container">
            <input type = "text" placeholder="Nombre(s)*" value={form.nombreReclutador} onChange={(e)=>setForm({...form,nombreReclutador:e.target.value})}/>
            <input type = "text" placeholder="Apellidos*" value={form.apellido} onChange={(e)=>setForm({...form,apellido:e.target.value})}/>
            <input type = "text" placeholder="Teléfono*" value={form.telefonoReclutador} onChange={(e)=>setForm({...form,telefonoReclutador:e.target.value})}/>
            <input type = "text" placeholder="Correo electrónico del reclutador**" value={form.emailReclutador} onChange={(e)=>setForm({...form,emailReclutador:e.target.value})}/>
        </div>
    )
}

export default Reclutador;