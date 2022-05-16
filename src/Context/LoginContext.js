import React,{ createContext, useState } from "react";

export const Context = createContext()
const Provider = ({children})=> {
    // La variable que controla el login
    const [isAuth,setIsAuth] = useState(()=>{
        return window.localStorage.getItem('isAuth')
    })
    // La variable para saber el tipo de usuario, true=admin, false=empresa
    const [userType,setUserType] = useState(()=>{
        return window.localStorage.getItem('userType')
    })

    // Lo que este dentro de value podra ser accedido dentro de toda la app
    const value = {
        userType,
        isAuth,
        // Iniciar sesion
        iniciarSesion:(token)=>{
            console.log("iniciaste sesion")
            setIsAuth(true)
            window.localStorage.setItem('isAuth',true)
            window.localStorage.setItem('token',token)
            location.reload();
        },
        // Cerrar sesion
        cerrarSesion:()=>{
            console.log("cerraste sesion")
            setIsAuth(false)
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('isAuth')
            window.localStorage.removeItem('userType')
            location.reload();

        },
        // Setear que tipo de usuario sera
        setUserTypeFunc:(type)=>{
            setUserType(type)
            console.log("El usuario es de tipo admin")
            window.localStorage.setItem('userType',type)
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