import React,{ createContext, useState } from "react";

export const Context = createContext()
const Provider = ({children})=> {
    // La variable que controla el login
    const [isAuth,setIsAuth] = useState(false)
    // La variable para saber el tipo de usuario, true=admin, false=empresa
    const [userType,setUserType] = useState(false)

    // Lo que este dentro de value podra ser accedido dentro de toda la app
    const value = {
        userType,
        isAuth,
        // Iniciar sesion
        iniciarSesion:()=>{
            console.log("iniciaste sesion como: ", userType)
            setIsAuth(true)
        },
        // Cerrar sesion
        cerrarSesion:()=>{
            console.log("cerraste sesion")
            setIsAuth(false)
        },
        // Setear que tipo de usuario sera
        setUserTypeFunc:(type)=>{
            setUserType(type)
            console.log("El usuario sera de tipo: ",userType)
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

// Exportamos el provider y el consumer
export default {
    Provider,
    Consumer: Context.Consumer
}