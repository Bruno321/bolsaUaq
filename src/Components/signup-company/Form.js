import React, { useState } from "react";
import DatosEmpresa from "./DatosEmpresa";
import Ubicacion from "./Ubicacion"
import Reclutador from "./Reclutador";
//Estilos
import './form.css';

const Form = () => {

    // Secciones del Formulario
    const [page, setPage] = useState(0);

    // Titulos de las secciones del Formulario
    const FormTitles = ["Datos de la empresa", "Ubicación", "Reclutador"]

    // Activar el multistep con listeners
    const nextBtn = document.querySelector(".nextBtn")

    const PageDisplay = () => {
        if (page === 0) {
            return <DatosEmpresa />;
        }
        else if (page === 1) {
            return <Ubicacion />;
        }
        else {
            return <Reclutador />;
        }
    }

    return (
        <div className="form">
            {/*PROGRESS BAR*/}
            <div className="progress-bar">
                <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}></div>
            </div>
            {/*MULTI STEP*/}
            <div className="multistep">
                <div className="step">
                    <div className="circle">
                        <span>1</span>
                    </div>
                    <div className="check"></div>
                    <h3>Datos de la empresa</h3>
                </div>
                <div className="step">
                    <div className="circle">
                        <span>2</span>
                    </div>
                    <div className="check"></div>
                    <h3>Ubicación</h3>
                </div>
                <div className="step">
                    <div className="circle">
                        <span>3</span>
                    </div>
                    <div className="check"></div>
                    <h3>Reclutador</h3>
                </div>
            </div>
            {/*DESPLIEGUE*/}
            <div className="container">
                <div className="header">
                    <p>Necesitamos el contacto de quién se encarge en ingresar a la plataforma</p>
                </div>
                <div className="body">
                    {PageDisplay()}
                </div>
                <div className="footer"></div>
                {/* Botón "Anterior" y "Siguiente" para moverse en el MultiStep */}
                <div className="buttons">
                    <button
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}>Anterior</button>
                    <button
                        disabled={page == FormTitles.length - 1}
                        onClick={() => {
                            setPage((currPage) => currPage + 1)
                        }}>Siguiente</button>
                </div>
            </div>
        </div>
    )
}

export default Form
