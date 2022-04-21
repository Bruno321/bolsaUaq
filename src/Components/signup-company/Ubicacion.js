import React from "react";

function Ubicacion (){
    return(
        <div className = "ubicacion-container">
            <select id = "pais" name = "pais" className = "select-country">
             <option value = "estados-unidos">Estados Unidos</option>    
             <option value = "mexico">México</option>
             <option value = "canadá">Canadá</option>
            </select>
            <input type = "text" placeholder = "Estado*" />
            <input type = "text" placeholder = "Ciudad*" />
            <input type = "text" placeholder = "Código Postal*" />
            <input type = "text" placeholder = "Colonia*" />
            <input type = "text" placeholder = "Dirección*" />
            <input type = "text" placeholder = "No. Exterior*" />
            <input type = "text" placeholder = "No. Interior (opcional)" />
        </div>
    )
}

export default Ubicacion;