import React,{ createContext, useState } from "react";

export const DetailContext = createContext()
const Provider = ({children})=> {

    const [data,setData] = useState({})
    const [form,setForm] = useState({})
  
    const value = {
        data,
        setData:(data)=>{
            setData(data)
        },
    }

    return (
        <DetailContext.Provider value={value}>
            {children}
        </DetailContext.Provider>
    )
}

export default {
    Provider,
    Consumer: DetailContext.Consumer
}