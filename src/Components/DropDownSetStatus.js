import React from 'react'
import Select from "react-select";
import Swal from 'sweetalert2';
import axios from 'axios';

const options = [
    { label: "Disponible", value: 0},
    { label: "Ocupada", value: 1}
];


const DropDownSetStatus = ({vacanteId,filterOption,setFilterOption}) => {
    const token = window.localStorage.getItem('token')
    const handleSetStatus = (e) => {
        setFilterOption(e.value)
        console.log(e)
        Swal.fire({
            title: '¿Está seguro?',
            text: `Esto marcará la vacante como ${filterOption == 0 ? options[1].label : options[0].label}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cambiar disponibilidad',
            cancelButtonText: 'Cancelar',
            width: '50%',
			padding: '5rem 10rem',
			background: '#fff',
			customClass: {
				htmlContainer: 'htmlContainer-class',
				title: 'title-class',
				confirmButton: 'confirmButton-class',
				cancelButton: 'cancelButton-class',
				icon: 'icon-class'
			}
          }).then((result) => {
              if (result.isConfirmed) {
                axios.patch('http://localhost:3000/api/empresa/vacantes',{data:{vacanteId:vacanteId,isDisponible:e.value}},{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
                .then((response)=>{
                    console.log(response)
                    Swal.fire({
                        icon: 'success',
                        title: 'Vacante editada',
                        text: 'Disponibilidad cambiada exitosamente.',
                        width: '50%',
                        padding: '5rem 10rem',
                        background: '#fff',
                        customClass: {
                            htmlContainer: 'htmlContainer-class',
                            title: 'title-class',
                            confirmButton: 'confirmButton-class',
                            icon: 'icon-class'
                        }
                      }).then((result) => {
                        if(result.isConfirmed){
                            location.reload()
                        }
                      });
                }).catch((e)=>{
                    console.log("error",e)
                })
            }else{
                if(e.value==0){
                    setFilterOption(1)
                }else{
                    setFilterOption(0)

                }
            }
          })
    }

    const handleColor = () => {
        if(filterOption===0){
			return '#27AE60'
		}
		// Rechazada: roja
		if(filterOption===1){
			return '#C0392B'
		}
    }
    const customStyles = {
        container: (provided) => ({
            ...provided,
            // marginTop: '-4%',
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
            backgroundColor: handleColor(),
            border: '1000px',
            cursor:"pointer"
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            // width: '15%',
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
    return (
        <div style={styles.styledSelect} >
            <Select 
                value={filterOption}
                onChange={(e)=>handleSetStatus(e)}
                styles={customStyles} 
                options={options}
                placeholder={options[filterOption].label}
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
        width: '18%',
        height: '40px',
        border: 'none',
        display: 'inline-block',
        position: 'relative',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '170%',
    },
}



export default DropDownSetStatus