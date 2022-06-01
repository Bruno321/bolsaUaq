import React, {useContext} from 'react';
// Context
import {Context} from '../../Context/LoginContext';
import {DataToShowContext} from '../../Context/DataToShowContext';
// Components
import HeaderVinculacion from '../../Components/HeaderVinculacion';
import LeftBarNav from '../../Components/LeftBarNav';
import InfoToDisplay from '../../Components/InfoToDisplay';
// Styles
import './MainPageVinculacion.css';

const MainPageVinculacion = () => {
    const {cerrarSesion} = useContext(Context)
    const {optionSelected} = useContext(DataToShowContext)
    const titles = [
        "Validación de empresas",
        "Validación de vacantes",
        "Ver vacantes",
        "Ver empresas"
    ]
    const leftBarNavTitles = [
        {name:"Validar Empresas",value:0},
        {name:"Validar Vacantes",value:1},
        {name:"Ver Vacantes",value:2},
        {name:"Ver Empresas",value:3},
    ]

    return (
        <div className='container'>
            <HeaderVinculacion />
            <div className='bodyContainer'>
                <LeftBarNav title={"ADMIN"} data={leftBarNavTitles}/>
                <InfoToDisplay title={titles[optionSelected]} />
            </div>
        </div>
    )
}

export default MainPageVinculacion