import React from "react";
//Estilos
import './form.css';

function DatosEmpresa() {
    return (
        <div className="datos-empresa-container">
            <a>Los campos con "*" son obligatorios</a>
            <input type="text" placeholder="Nombre de la empresa*" />
            <input type="text" placeholder="Usuario*" />
            <input type="text" placeholder="Correo electrónico*" />
            <input type="text" placeholder="Teléfono*" />
            <button>Escoger logo*</button>
            <input type = "text" placeholder="RFC de la empresa*"/>
            <input type = "text" placeholder="Razón social*"/>
            <input type = "text" placeholder="Sector*"/>
            <input type = "text" placeholder="Descripción breve*"/>
            <input type = "text" placeholder="Página web*"/>
        </div>
    )
}

export default DatosEmpresa;