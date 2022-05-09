import React,{ createContext, useState } from "react";

export const DataToShowContext = createContext()
const Provider = ({children})=> {

    const [optionSelected,setOptionSelected] = useState(0)
    const [detailSelected,setDetailSelected] = useState(false)

  
    const value = {
        optionSelected,
        setOptionSelected:(data)=>{
            setOptionSelected(data)
        },
        detailSelected,
        setDetailSelected:(data)=>{
            setDetailSelected(data)
        },
    }

    return (
        <DataToShowContext.Provider value={value}>
            {children}
        </DataToShowContext.Provider>
    )
}

export default {
    Provider,
    Consumer: DataToShowContext.Consumer
}