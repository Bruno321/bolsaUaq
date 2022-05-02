import React from "react";
import logo from "../Assets/img/fifUaq_Logo.png";
import profileUser from "../Assets/img/profile-user.png"

const HeaderVinculacion = ({optionSelected,setOptionSelected}) =>{
    return(
        <>
        <header style = {styles.headerContainer}>
            <img src = {logo} alt = "Logo de la Facultad de Informática" style={{padding: "10px"}}/>
            <ul style = {styles.ulOrder}> 
                <li style={styles.title}>Panel de administrador</li>
                
            </ul>
            <img src = {profileUser} alt = "Foto de Usuario" style = {styles.imgProfileUser}/>
        </header>
        </>
    )
}
export default HeaderVinculacion;

const styles = {
headerContainer: {
    width: "100%",
    height: "10vh",
    backgroundColor: "#2B246B",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
},
ulOrder:{
    marginLeft: "15px",
    width: "60vw",
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
    cursor: "pointer",
    fontSize: "2rem",
}
}