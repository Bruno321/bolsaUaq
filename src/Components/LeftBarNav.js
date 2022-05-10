import React from 'react'

import './LeftBarNav.css'

import LeftBarNavOption from './LeftBarNavOption'

const LeftBarnav = ({title,data}) => {

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>¡Bienvenido!</h2>
            <h2 style={styles.title}>{title}</h2>
            <br></br>
            {data.map((e,i)=>{
                if(title==='ADMIN'){
                    return (
                        <LeftBarNavOption title={e} position={i} />
                    )
                }else{
                    return (
                        <LeftBarNavOption title={e} position={i+3} />
                    )
                }
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