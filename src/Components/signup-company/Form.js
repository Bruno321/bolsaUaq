import React , {useState} from "react";
import DatosEmpresa from "./DatosEmpresa";
import Ubicacion from "./Ubicacion"
import Reclutador from "./Reclutador";
const Form = () =>{

    // Secciones del Formulario
    const[page, setPage] = useState(0);

    // Titulos de las secciones del Formulario
    const FormTitles = ["Datos de Empresa", "Ubicación", "Reclutador"]

    const PageDisplay = () =>{
        if (page === 0){
            return <DatosEmpresa />;
        }
        else if (page === 1){
            return <Ubicacion />;
        }
        else {
            return <Reclutador />;
        }
    }

    return (
        <div className = "form">
            <div className = "progress-bar"></div>
            <div className = "form-container">
            {/* Nombre de la sección donde están */}
            <div className = "header">
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className = "body">
                {PageDisplay()}
            </div>
            <div className = "footer"></div>
            {/* Botón "Anterior" y "Siguiente" para moverse en el MultiStep */}
            <button
                disabled = {page == 0}
                onClick = {() => {
                setPage((currPage) => currPage - 1)
            }}>Anterior</button>
            <button  
                disabled = {page == FormTitles.length-1}
                onClick = { () => {
                setPage((currPage) => currPage + 1)
            }}>Siguiente</button>
            </div>
            <div></div>
        </div>
    )
}

export default Form
