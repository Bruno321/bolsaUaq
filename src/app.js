import React,{useContext} from 'react';
import {Router, Redirect} from '@reach/router'

// Pages-Empresa
import LandingPage from './Pages/empresa/LandingPage';
import LoginEmpresa from './Pages/empresa/LoginEmpresa';
import RegistroEmpresa from './Pages/empresa/RegistroEmpresa';
import MainPageEmpresa from './Pages/empresa/MainPageEmpresa';

// Pages-Vinculacion
import LoginVinculacion from './Pages/vinculacion/LoginVinculacion';
import ValidarEmpresa from './Pages/vinculacion/ValidarEmpresa';

// Context
import {Context} from './Context/LoginContext'

export const App = () => {
    // Para saber si el usuario esta logeado o no
    const {isAuth} = useContext(Context)
    // Para saber que tipo de usuario es
    const {userType} = useContext(Context)
    console.log(isAuth)
    return(
        <div>
            <Router>
                {/* Si no esta logeado el path de login sera '/login' */}
                {!isAuth && <LoginEmpresa path='/login'/>}

                {/* Si no esta logeado '/' lleva a Landing Page */}
                {!isAuth && <LandingPage path='/'/>}

                {/* Si no esta logeado el path de '/' sera '/login' asi protegemos la vista  */}
                {!isAuth && <Redirect from='/' to='/login' noThrow />}

                {/* Si esta logeado el path de '/login' sera '/' para impedir re logeo sin cerrar sesion */}
                {isAuth && <Redirect from='/login' to='/' noThrow />}

                {/* Si  esta logeado '/' lleva a MainPage */}
                {isAuth && <MainPageEmpresa path='/'/>}

                <RegistroEmpresa path='/register'/>
            </Router>
        </div>
    )
    
}