import React,{ useState} from 'react'

const LeftBarnav = () => {
    const [hover,setHover] = useState(false)
    const [hover2,setHover2] = useState(false)
    console.log(hover)
    return (
        <div style={styles.container}>
            <h2 style={{...styles.title,marginTop:'50px'}}>¡Bienvenido!</h2>
            <h2 style={styles.title}>BALSOFT</h2>
            <br></br>
            <div style={ hover ?  styles.optionHover : styles.option} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <p style={styles.text}>Crear Vacante</p>
            </div>
            <div style={ hover2 ?  styles.optionHover : styles.option} onMouseOver={()=>setHover2(true)} onMouseLeave={()=>setHover2(false)}>
                <p style={styles.text}>Status del Puesto</p>
            </div>
        </div>
    )
}

export default LeftBarnav

const styles = {
    container:{
        width: '13%',
        backgroundColor: '#2B246B',
        textAlign:'center',
        textAlign:'center'
    },
    title: {
        color: "#fff",
        fontSize: "22px",
        margin: "15px",
    },
    option:{
        height:'100px',
        display:'flex',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        cursor: "pointer"

    },
    optionHover:{
        height:'100px',
        display:'flex',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        cursor: "pointer",
        backgroundColor:'#C0C0C0',
        opacity:'90%'
    },
    text:{
        color: "#fff",
        fontSize: "22px",
        margin: "15px",
        cursor: "pointer"
    }
   
}