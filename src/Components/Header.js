import React,{useContext} from "react";
import {DataToShowContext} from '../Context/DataToShowContext'
import {Context} from "../Context/LoginContext"; 

import logo from "../Assets/img/fifUaq_Logo.png";
import profileUser from "../Assets/img/profile-user.png"
import "./Header.css"


const Header = () =>{

    const {cerrarSesion} = useContext(Context)
    const {optionSelected,setOptionSelected} = useContext(DataToShowContext)
    
    return(
        <>
        <header style = {styles.headerContainer}>
            <img src = {logo} alt = "Logo de la Facultad de Informática" style={{padding: "10px",marginLeft:"20px"}}/>
            <ul style = {{...styles.ulOrder,marginRight:"60%"}}> 
                <li  className={optionSelected==0 ? "headerTextSelected" : "headerText" } 
                    onClick={()=>setOptionSelected(0)}>Publicar una vacante</li>
                <li  className={optionSelected==4 ? "headerTextSelected" : "headerText" }
                    onClick={()=>setOptionSelected(4)}>Mis Vacantes</li>
            </ul>
            {/* <img src = {profileUser} alt = "Foto de Usuario" style = {styles.imgProfileUser}/> */}
            <ul style = {{...styles.ulOrder,marginRight:"20px"}}  className="CerrarSesion"> 
                <li style={styles.title} onClick={cerrarSesion}>Cerrar sesión</li>
            </ul>
        </header>
        </>
    )
}
export default Header;

const styles = {
headerContainer: {
    width: "100%",
    height: "10vh",
    backgroundColor: "#2B246B",
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
},
ulOrder:{
    marginLeft: "15px",
    // width: "60vw",
    display: "flex",
    // backgroundColor: "#ebc",
    justifyContent: "flex-start",
    alignItems: "center",
    listStyleType: "none"
},
imgProfileUser: {
    padding: "15px"
},
title:{
    color:"white",
    fontSize: "2rem",
}
}