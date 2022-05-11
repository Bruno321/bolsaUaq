import React,{useState,useContext} from "react";
import logo from "../Assets/img/fifUaq_Logo.png";
import profileUser from "../Assets/img/profile-user.png"
import {Context} from "../Context/LoginContext"; 

const HeaderVinculacion = ({optionSelected,setOptionSelected}) =>{

    const [showMenu,setShowMenu] = useState(false)
    const {cerrarSesion} = useContext(Context)

    return(
        <>
        <header style = {styles.headerContainer}>
            <img src = {logo} alt = "Logo de la Facultad de Informática" style={{padding: "10px",marginLeft:"20px"}}/>
            <ul style = {styles.ulOrder}> 
                <li style={styles.title}>Panel de administrador</li>
                
            </ul>
            {/* <img src = {profileUser} alt = "Foto de Usuario" style = {styles.imgProfileUser} onClick={()=>setShowMenu(true)}/> */}
            <ul style = {{...styles.ulOrder,marginRight:"20px"}} className="CerrarSesion"> 
                <li style={styles.title} onClick={cerrarSesion}>Cerrar sesión</li>
                
            </ul>
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
    justifyContent: "space-between",
    // alignItems: "center",
},
ulOrder:{
    // marginLeft: "15px",
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