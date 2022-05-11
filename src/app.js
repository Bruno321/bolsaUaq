import React,{useContext} from 'react';
import {Router, Redirect} from '@reach/router'

// Pages-Empresa
import LandingPage from './Pages/empresa/LandingPage';
import LoginEmpresa from './Pages/empresa/LoginEmpresa';
import RegistroEmpresa from './Pages/empresa/RegistroEmpresa';
import MainPageEmpresa from './Pages/empresa/MainPageEmpresa';
import CrearVacante from '../src/Components/CrearVacante';

// Pages-Vinculacion
import LoginVinculacion from './Pages/vinculacion/LoginVinculacion';
import MainPageVinculacion from './Pages/vinculacion/MainPageVinculacion';

// Pages
import NotFound from './Pages/NotFound';

// Context
import {Context} from './Context/LoginContext';
import CambioContraseña from './Pages/CambioContraseña';

//Pruebas de Componentes / Pantallas
// import RegistroEmpresa from "./Pages/empresa/RegistroEmpresa";

export const App = () => {
    // Para saber si el usuario esta logeado o no
    const {isAuth} = useContext(Context)
    // Para saber que tipo de usuario es
    const {userType} = useContext(Context)

    return(
        <div>
            <Router>
                {/* No hay ninguna sesion */}
                {isAuth===null && userType===null ? 
                    <>
                        <NotFound default/>
                        <LandingPage path='/'/>
                        <CambioContraseña path='/cambio'/>
                        <LoginEmpresa path='/login'/>
                        <RegistroEmpresa path='/register'/>
                        <LoginVinculacion path='/vinculacion/login'/>
                        <Redirect from='/vinculacion' to='/vinculacion/login' noThrow />
                    </>
                : null}

                {/*Inicio sesion alguien de vinculacion*/}
                {isAuth==='true' && userType==='true' ? 
                    <>
                        <NotFound default/>
                        <LandingPage path='/'/>
                        <CambioContraseña path='/cambio'/>
                        <LoginEmpresa path='/login'/>
                        <RegistroEmpresa path='/register'/>
                        <MainPageVinculacion path='/vinculacion'/>
                        <Redirect from='/vinculacion/login' to='/vinculacion' noThrow />
                    </>
                : null}

                {/*Inicio sesion alguna empresa*/}
                {isAuth==='true' && userType==='false' ? 
                    <>
                        <NotFound default/>
                        <MainPageEmpresa path='/'/>
                        <CambioContraseña path='/cambio'/>
                        <RegistroEmpresa path='/register'/>
                        <LoginVinculacion path='/vinculacion/login'/>
                        <Redirect from='/login' to='/' noThrow />
                        <Redirect from='/vinculacion' to='/vinculacion/login' noThrow />

                    </>
                : null}

            </Router>
        </div>
    )
    
}

