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

 

    // Cambia el formulario al que se desea
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
       // Activar el multistep con listeners
    //    const nextBtn = document.querySelector(".nextBtn");
    //    const firstCircle = document.querySelector(".active-1");
    //    const secondCircle = document.querySelector(".active-2");
    //    const thirdCircle = document.querySelector(".active-3");
    //    nextBtn.addEventListener("click", function(){
    //         if(page === 0){
    //             firstCircle.style.backgroundColor = "#4B3EB8"
    //         }
    //         if(page === 1){
    //             firstCircle.style.backgroundColor = "#4B3EB8"
    //             secondCircle.style.backgroundColor = "#4B3EB8"

    //         }
    //         if(page === 2){
    //             firstCircle.style.backgroundColor = "#4B3EB8"
    //             secondCircle.style.backgroundColor = "#4B3EB8"
    //             thirdCircle.style.backgroundColor = "#4B3EB8"

    //         }
    //    })

    //    Cambia el texto de los botones dependiendo de la página

    const firstBtnTxt = () =>{
        if(page >=1 && page<=2){
            return "Anterior";
        } else{
            return "";
        }
    }

    const secondBtnTxt =()=>{
        if(page >= 0 && page<=1){
            return "Siguiente";
        } else{
            return "Solicitar Registro";
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
                    <div className="circle active-1"
                    style = {{backgroundColor: page === 0 || page ===1 || page === 2 ? "#4B3EB8" : "#F5F5F5" }}
                    >
                        <span
                    style = {{color: page === 0 || page ===1 || page === 2 ? "#fff" : "#989898" }}
                        >1</span>
                    </div>
                    <div className="check"></div>
                    <h3
                    style = {{color: page === 0 || page ===1 || page === 2 ? "#4B3EB8" : "#989898" }}
                    
                    >Datos de la empresa</h3>
                </div>
                <div className="step">
                    <div className="circle active-2"
                    style = {{backgroundColor: page === 1 || page === 2 ? "#4B3EB8" : "#F5F5F5" }}
                    >
                        <span 
                        style = {{color:  page ===1 || page === 2 ? "#fff" : "#989898" }}
                    >2</span>
                    </div>
                    <div className="check"></div>
                    <h3
                    style = {{color:  page === 1 || page === 2 ? "#4B3EB8" : "#989898" }}
                    >Ubicación</h3>
                </div>
                <div className="step">
                    <div className="circle active-3"
                    style = {{backgroundColor: page === 2 ? "#4B3EB8" : "#F5F5F5" }}
                    >
                        <span
                        style = {{color:  page === 2 ? "#fff" : "#989898" }}
                        >3</span>
                    </div>
                    <div className="check"></div>
                    <h3
                    style = {{color: page === 2 ? "#4B3EB8" : "#989898" }}
                    >Reclutador</h3>
                </div>
            </div>
            {/*DESPLIEGUE*/}
            <div className="container">
                <div className="header">
                    <p>Necesitamos el contacto de quién se encargue en ingresar a la plataforma</p>
                </div>
                <div className="body">
                    {PageDisplay()}
                </div>
                <div className="footer"></div>
                {/* Botón "Anterior" y "Siguiente" para moverse en el MultiStep */}
                <div className="buttons">
                    <button
                        style = {{display: page === 0 ? "none" : "block"}}
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}>{firstBtnTxt()}</button>
                    <button
                        className = "nextBtn"
                        disabled={page == FormTitles.length - 1}
                        onClick={() => {
                            setPage((currPage) => currPage + 1)
                        }}>{secondBtnTxt()}</button>
                </div>
            </div>
        </div>
    )
}

export default Form
