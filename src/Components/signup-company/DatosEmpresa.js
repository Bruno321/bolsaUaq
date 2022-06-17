import React,{ useState,useContext, useEffect } from "react";
import {RegisterContext} from "../../Context/RegisterContext";

function DatosEmpresa(props) {
    
    useEffect(() => {
        if(props.validar == 'si'){
            const formEmpresa = {
                nombreEmpresa: form.nombreEmpresa, 
                usuario: form.usuario,
                email: form.email,
                telefonoEmpresa: form.telefonoEmpresa,
                logo: form.logo,
                rfc: form.rfc,
                razonSocial: form.razonSocial,
                sector: form.sector,
                descripcion: form.descripcion,
                sitioWeb: form.sitioWeb,
                giro: form.giro
            }
            for (const property in formEmpresa) {
                if(formEmpresa[property] == ''){
                    document.getElementById(`${property}`).style['border-color'] = 'red';
                }
            }
        }
    });
    
    const {form,setForm} = useContext(RegisterContext)

    const cambiarBorde = (id) => {
        document.getElementById(`${id}`).style['border-color'] = 'black';
    }

    return (
        <div className="datos-empresa-container">
            <input type="text" placeholder="Nombre de la empresa*" value={form.nombreEmpresa} onChange={(e)=>{setForm({...form,nombreEmpresa:e.target.value}); cambiarBorde(e.target.id)}} id="nombreEmpresa"/>
            <input type="text" placeholder="Usuario*" value={form.usuario} onChange={(e)=>{setForm({...form,usuario:e.target.value}); cambiarBorde(e.target.id)}} id="usuario"/>
            <input type="text" placeholder="Correo electrónico*" value={form.email} onChange={(e)=>{setForm({...form,email:e.target.value}); cambiarBorde(e.target.id)}} id="email"/>
            <input type="text" placeholder="Teléfono*" value={form.telefonoEmpresa} onChange={(e)=>{setForm({...form,telefonoEmpresa:e.target.value}); cambiarBorde(e.target.id)}} id="telefonoEmpresa"/>
            <input type="file" className="custom-fi" onChange={(e)=>{setForm({...form,logo:e.target.value}); cambiarBorde(e.target.id)}} id="logo"/>
            <input type = "text" placeholder="RFC de la empresa*" value={form.rfc} onChange={(e)=>{setForm({...form,rfc:e.target.value}); cambiarBorde(e.target.id)}} id="rfc"/>
            <input type = "text" placeholder="Razón social*" value={form.razonSocial} onChange={(e)=>{setForm({...form,razonSocial:e.target.value}); cambiarBorde(e.target.id)}} id="razonSocial"/>
            <input type = "text" placeholder="Sector*" value={form.sector} onChange={(e)=>{setForm({...form,sector:e.target.value});cambiarBorde(e.target.id)}} id="sector"/>
            <input type = "text" placeholder="Descripción breve*" value={form.descripcion} onChange={(e)=>{setForm({...form,descripcion:e.target.value}); cambiarBorde(e.target.id)}} id="descripcion"/>
            <input type = "text" placeholder="Página web*" value={form.sitioWeb} onChange={(e)=>{setForm({...form,sitioWeb:e.target.value}); cambiarBorde(e.target.id)}} id="sitioWeb"/>
            <input type = "text" placeholder="Giro*" value={form.giro} onChange={(e)=>{setForm({...form,giro:e.target.value}); cambiarBorde(e.target.id)}} id="giro"/>
        </div>
    )
}

export default DatosEmpresa;