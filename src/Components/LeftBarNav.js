import React,{ useState} from 'react'

const LeftBarnav = ({optionSelected,setOptionSelected}) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>¡Bienvenido!</h2>
            <h2 style={styles.title}>BALSOFT</h2>
            <br></br>
            <div style={styles.option} 
                className={optionSelected==0 ? "leftBarOptionSelected" : "leftBarOption" }
                onClick={()=>setOptionSelected(0)}
            >
                <p style={styles.text}>Crear Vacante</p>
            </div>
            <div style={styles.option} 
                className={optionSelected==1 ? "leftBarOptionSelected" : "leftBarOption" }
                onClick={()=>setOptionSelected(1)}
            >
                <p style={styles.text}>Status del Puesto</p>
            </div>
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
    },
    title: {
        color: "#fff",
        fontSize: "22px",
    },
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