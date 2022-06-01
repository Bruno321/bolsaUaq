import React, { useState,useContext } from "react";
import DatosEmpresa from "./DatosEmpresa";
import Ubicacion from "./Ubicacion"
import Reclutador from "./Reclutador";
import {RegisterContext} from "../../Context/RegisterContext";
import axios from "axios";
import Swal from 'sweetalert2'

//Estilos
import './form.css';

const Form = () => {

    // Secciones del Formulario
    const [page, setPage] = useState(0);
    const [validar, setValidar] = useState('no');

    // Titulos de las secciones del Formulario
    const FormTitles = ["Datos de la empresa", "Ubicación", "Reclutador"]
    const {form,setForm} = useContext(RegisterContext)
 

    // Cambia el formulario al que se desea
    const PageDisplay = () => {
        if (page === 0) {
            return <DatosEmpresa validar={validar}/>;
        }
        else if (page === 1) {
            return <Ubicacion validar={validar}/>;
        }
        else {
            return <Reclutador validar={validar}/>;
        }
    }

    const validarPages = (numPage) => {
        if(numPage === 0){
            return true;
        }
    }

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


    const handleClick = () => {
        if(page>1){
            // console.log('formulario final', form);
            if(validarCampos()){
                axios.post('http://localhost:3000/empresa',{form},{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors',})
                    .then((response)=>{
                    Swal.fire(
                        {
                            icon: 'success',
                            title: 'Solicitud enviada correctamente',
                            text: 'En caso de que su solicitud sea aprobada, sus datos de acceso se le enviarán por correo electrónico.',
                            width: '50%',
                            padding: '5rem 10rem',
                            background: '#fff',
                            customClass: {
                                htmlContainer: 'htmlContainer-class',
                                title: 'title-class',
                                confirmButton: 'confirmButton-class',
                                icon: 'icon-class'
                            }
                          }
                    )
                }).catch((e)=>{
                    console.log(e)
                })
            }else{
                setValidar('si');
                Swal.fire({
                    icon: 'error',
                    title: 'Faltan campos por llenar',
                    text: 'Favor de llenar los campos faltantes',
                    width: '45%',
                    padding: '5rem 10rem',
                    background: '#fff',
                    customClass: {
                        htmlContainer: 'htmlContainer-class',
                        title: 'title-class',
                        confirmButton: 'confirmButton-class',
                        icon: 'icon-class'
                    }
                });
            }
            // axios.post('http://localhost:3000/empresa',{form},{headers:{"Access-Control-Allow-Origin":null}, mode: 'cors',})
            // .then((response)=>{
            //     Swal.fire(
            //         'Solicitud enviada correctamente',
            //         'Este atento a su correo electronico',
            //         'success'
            //       )
            // }).catch((e)=>{
            //     console.log(e)
            // })
        }else{
            console.log(form)
            setPage((currPage) => currPage + 1)
        }
    }

    const validarCampos = () => {
        let numeroCamposCompletos = 0;
        const copyForm = {...form};
        //Se eliminan del objeto los atributos que no son obligatorios
        delete copyForm.logo;
        delete copyForm.numInterior;
        for (const property in copyForm) {
        if(form[property] != ''){
            numeroCamposCompletos += 1;
        }else{
            // document.getElementById(`${property}`).style['border-color'] = 'red';
        }
        }
        return numeroCamposCompletos == Object.keys(copyForm).length;
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
                    >Ubicación de la empresa</h3>
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
                    >Datos del Reclutador</h3>
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
                        className="btnHover"
                        style = {{display: page === 0 ? "none" : "block"}}
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}>{firstBtnTxt()}</button>
                    <button
                        className = "nextBtn btnHover"
                        // disabled={page == FormTitles.length - 1}
                        onClick={() => {
                            handleClick()
                        }}>{secondBtnTxt()}</button>
                </div>
            </div>
        </div>
    )
}

export default Form
