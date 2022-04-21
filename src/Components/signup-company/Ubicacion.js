import React from "react";
// Estilos
import "./Ubicacion.css";

function Ubicacion (){
    return(
        <div className = "ubicacion-container">
            <select id = "pais" name = "pais" className = "select-country">
             <option value = "seleccionar-pais">Pais*</option>    
             <option value = "estados-unidos">Estados Unidos</option>    
             <option value = "mexico">México</option>
             <option value = "canadá">Canadá</option>
            </select>
            <input type = "text" placeholder = "Estado*" />
            <input type = "text" placeholder = "Ciudad*" />
            <input type = "text" placeholder = "Código Postal*" />
            <input type = "text" placeholder = "Colonia*" className = "input-large"/>
            <input type = "text" placeholder = "Dirección*" className = "input-large" />
            <input type = "text" placeholder = "No. Exterior*" />
            <input type = "text" placeholder = "No. Interior (opcional)" />
        </div>
    )
}

export default Ubicacion;