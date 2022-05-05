import React,{ createContext, useState } from "react";

export const Context = createContext()
const Provider = ({children})=> {
    // A number 0,1,2,3
    /*
    Manage the number that dictates what detail component is going to be rendered
    */
    const [option,setOption] = useState(0)
  
    const value = {
        option,
        changueOption:(option)=>{
            setOption(option)
        },
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