import React,{ useState,useContext } from "react";
import {RegisterContext} from "../../Context/RegisterContext";

function DatosEmpresa() {

    const {form,setForm} = useContext(RegisterContext)

    return (
        <div className="datos-empresa-container">
            <a>Los campos con "*" son obligatorios</a>
            <input type="text" placeholder="Nombre de la empresa*" value={form.nombreEmpresa} onChange={(e)=>setForm({...form,nombreEmpresa:e.target.value})}/>
            <input type="text" placeholder="Usuario*" value={form.usuario} onChange={(e)=>setForm({...form,usuario:e.target.value})}/>
            <input type="text" placeholder="Correo electrónico*" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
            <input type="text" placeholder="Teléfono*" value={form.telefonoEmpresa} onChange={(e)=>setForm({...form,telefonoEmpresa:e.target.value})}/>
            <button>Escoger logo*</button>
            <input type = "text" placeholder="RFC de la empresa*" value={form.rfc} onChange={(e)=>setForm({...form,rfc:e.target.value})}/>
            <input type = "text" placeholder="Razón social*" value={form.razonSocial} onChange={(e)=>setForm({...form,razonSocial:e.target.value})}/>
            <input type = "text" placeholder="Sector*" value={form.sector} onChange={(e)=>setForm({...form,sector:e.target.value})}/>
            <input type = "text" placeholder="Descripción breve*" value={form.descripcion} onChange={(e)=>setForm({...form,descripcion:e.target.value})}/>
            <input type = "text" placeholder="Página web*" value={form.sitioWeb} onChange={(e)=>setForm({...form,sitioWeb:e.target.value})}/>
            <input type = "text" placeholder="Giro*" value={form.giro} onChange={(e)=>setForm({...form,giro:e.target.value})}/>
        </div>
    )
}

export default DatosEmpresa;