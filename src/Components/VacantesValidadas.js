import React, { useState } from 'react';

const vacantesV = (props) => {

    return(
        <div id="container">
            <p id="header">Vacantes validadas:</p>
            <div id="styled-select">
                <select>
                    <option selected disabled>Seguimiento Vacantes</option>
                    <option value="vacantesA">Vacantes Aceptadas</option>
                    <option value="VacantesP">Vacantes Pendientes</option>
                    <option value="VacantesR">Vacantes Rechazadas</option>
                </select>
            </div>
            <div id="vacantes">
                { props.children }
            </div>
        </div> 
    );
}

export default vacantesV;