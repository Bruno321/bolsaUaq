import React from 'react'

const DropDownMenuFilter = () => {
    return (
        <div style={styles.styledSelect}>
                <select style={styles.select}>
                    <option style={styles.option} selected disabled>Seguimiento Vacantes</option>
                    <option style={styles.option} value="vacantesA">Vacantes Aceptadas</option>
                    <option style={styles.option} value="VacantesP">Vacantes Pendientes</option>
                    <option style={styles.option} value="VacantesR">Vacantes Rechazadas</option>
            </select>
        </div>
    )
}


const styles = {
    header: {
        fontFamily: 'Roboto',
        fontSize: '300%',
        marginTop: '5%',
        marginLeft: '5%'
    },
    container: {
        width: '80%',
        height: '613px', //Estos margenes se quitan a la hora de implementar el componente/
        marginLeft: '17%',
        marginTop: '3.3%',
        marginBottom: '3.5%',
        border: '2px solid #000000'
    },
    styledSelect: {
        width: '18%',
        height: '40px',
        marginLeft: '77%',
        overflow: 'hidden',
        overflow: '-moz-hidden-unscrollable',
        background: "url('https://vivesmart.com/wp-content/uploads/2019/03/white-down-arrow-png-2.png') no-repeat 98%/10% #005183",
        border: 'none',
        display: 'inline-block',
        position: 'relative',
    },
    select: {
        background: 'transparent',
        color: 'white',
        width: '100%',
        height: '100%',
        webkitAppearance: 'none',
        textAlign: 'center', 
        fontFamily: 'Roboto',
        fontSize: '170%',

        "&:focus":{
        borderColor: 'none',
        boxShadow: 'none',
        color: 'none', 
        outline: 'none',
        }
    },
    option:{
        color: 'rgb(0, 0, 0)',
        backgroundColor:'#EEEEEE',
        fontFamily: 'Roboto'
    },
    vacantes:{
        width: '90%',
        height: '454px', 
        marginTop: '2%',
        marginRight: '5%',
        marginLeft: '5%',
    }
}

export default DropDownMenuFilter