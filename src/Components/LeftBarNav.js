import React,{ useState} from 'react'
import './LeftBarNav.css'
import LeftBarNavOption from './LeftBarNavOption'

const LeftBarnav = ({title,data,optionSelected,setOptionSelected,setDetailSelected}) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>¡Bienvenido!</h2>
            <h2 style={styles.title}>{title}</h2>
            <br></br>
            {data.map((e,i)=>{
                return (
                    <LeftBarNavOption title={e} position={i} optionSelected={optionSelected} setOptionSelected={setOptionSelected} setDetailSelected={setDetailSelected} />
                )
            })}

        </div>
    )
}

export default LeftBarnav

const styles = {
    container:{
        width: '18%',
        backgroundColor: '#2B246B',
        textAlign:'center',
        textAlign:'center',
        // asd
        // height: "100%",
    },
    title: {
        color: "#fff",
        fontSize: "22px",
    },

   
}