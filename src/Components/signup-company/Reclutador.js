import React,{ useState,useContext, useEffect } from "react";
import {RegisterContext} from "../../Context/RegisterContext";

function Reclutador (props){

    const {form,setForm} = useContext(RegisterContext)

    useEffect(() => {
        if(props.validar == 'si'){
            const formReclutador = {
                nombreReclutador: form.nombreReclutador, 
                apellido: form.apellido,
                telefonoReclutador: form.telefonoReclutador,
                emailReclutador: form.emailReclutador
            }

            for (const property in formReclutador) {
                if(formReclutador[property] == ''){
                    document.getElementById(`${property}`).style['border-color'] = 'red';
                }
            }
        }
    })

    const cambiarBorde = (id) => {
        document.getElementById(`${id}`).style['border-color'] = 'black';
    }


    return(
        <div className = "reclutador-container">
            <input type = "text" placeholder="Nombre(s)*" value={form.nombreReclutador} onChange={(e)=>{setForm({...form,nombreReclutador:e.target.value}); cambiarBorde(e.target.id)}} id="nombreReclutador"/>
            <input type = "text" placeholder="Apellidos*" value={form.apellido} onChange={(e)=>{setForm({...form,apellido:e.target.value}); cambiarBorde(e.target.id)}} id="apellido" required/>
            <input type = "text" placeholder="Teléfono*" value={form.telefonoReclutador} onChange={(e)=>{setForm({...form,telefonoReclutador:e.target.value}); cambiarBorde(e.target.id)}} id="telefonoReclutador" />
            <input type = "email" placeholder="Correo electrónico del reclutador**" value={form.emailReclutador} onChange={(e)=>{setForm({...form,emailReclutador:e.target.value});cambiarBorde(e.target.id)}} id="emailReclutador" required/>
        </div>
    )
}

export default Reclutador;