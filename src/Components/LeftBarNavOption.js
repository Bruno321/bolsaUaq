import React from 'react'
import './LeftBarNav.css'

const LeftBarNavOption = ({title,position,optionSelected,setOptionSelected}) => {
    return (
        <div style={styles.option} 
            className={optionSelected==position ? "leftBarOptionSelected" : "leftBarOption" }
            onClick={()=>setOptionSelected(position)}
        >
            <p style={styles.text}>{title}</p>
        </div>
    )
}

const styles = {
 fontSize: "22px",
    option:{
        height:'100px',
        display:'flex',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        cursor: "pointer"

    },
    text:{
        color: "#fff",
        fontSize: "22px",
        margin: "15px",
        cursor: "pointer"
    }
   
}

export default LeftBarNavOption