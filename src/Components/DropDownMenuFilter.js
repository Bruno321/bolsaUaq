import React from 'react'
import Select from "react-select";


const options = [
    { label: "Vacantes Aceptadas", value: "vacantesA"},
    { label: "Vacantes Pendientes", value: "VacantesP"},
    { label: "Vacantes Rechazadas", value: "VacantesR"}
];

const DropDownMenuFilter = () => {
    return (
        <div style={styles.styledSelect} >
            <Select 
                styles={customStyles} 
                options={options}
                placeholder="Seguimiento Vacantes"
                isSearchable={false}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary: 'none',
                    },
                  })}
            />
        </div>
    )
}


const styles = {
    styledSelect: {
        width: '21%',
        height: '40px',
        marginLeft: '77%',
        //overflow: '-moz-hidden-unscrollable',
        border: 'none',
        display: 'inline-block',
        position: 'relative',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '170%',
    },
}

const customStyles = {
    container: (provided) => ({
        ...provided,
        marginTop: '-4%',
    }),
    menuList: (provided) => ({
        ...provided,
        marginTop: '-4.3%',
        paddingBottom: '-.5%'
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'white'
        
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white'
        
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: '#005183',
        border: '1000px',
        cursor:"pointer"
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        width: '15%',
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        display: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#ffffff' : '#000000',
      backgroundColor: state.isSelected ? '#48456b' : '#EEEEEE',
      padding: 20,
      "&:hover":{
        color: state.isSelected ? '#ffffff' : '#black',
        backgroundColor: state.isSelected ? '#48456b' : '#cdcdcd',
        cursor:"pointer"
      },
      textAlign: 'center',
      fontFamily: 'Roboto',

    }),
  }

export default DropDownMenuFilter