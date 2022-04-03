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

// Pages
import NotFound from './Pages/NotFound';

// Context
import {Context} from './Context/LoginContext'

//Pruebas de Componentes / Pantallas
// import CrearVacante from "./Components/CrearVacante"

export const App = () => {
    // Para saber si el usuario esta logeado o no
    const {isAuth} = useContext(Context)
    // Para saber que tipo de usuario es
    const {userType} = useContext(Context)
    console.log(isAuth)
    console.log(userType)
    console.log(isAuth==='true' && userType==='true')
    return(
        <div>
            <Router>
                {/* No hay ninguna sesion */}
                {isAuth===null && userType===null ? 
                    <>
                        <NotFound default/>
                        <LandingPage path='/'/>
                        {/* Dedicado para probar componentes / pantallas (recuerda comentar
                        lo de arriba y descomentarlo antes de hacerle Push [obviamente debes de comentar lo de abajo]) */}
                        {/* <CrearVacante path='/'/> */}
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
                        <LoginEmpresa path='/login'/>
                        <RegistroEmpresa path='/register'/>
                        <ValidarEmpresa path='/vinculacion'/>
                        <Redirect from='/vinculacion/login' to='/vinculacion' noThrow />
                    </>
                : null}

                {/*Inicio sesion alguna empresa*/}
                {isAuth==='true' && userType==='false' ? 
                    <>
                        <NotFound default/>
                        <MainPageEmpresa path='/'/>
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

//  {/* ------Empresas------ */}
//                 {/* Si no esta logeado el path de login sera '/login' */}
//                 {!isAuth && <LoginEmpresa path='/login'/>}

//                 {/* Si no esta logeado '/' lleva a Landing Page */}
//                 {!isAuth && <LandingPage path='/'/>}

//                 {/* Si no esta logeado el path de '/' sera '/login' asi protegemos la vista  */}
//                 {!isAuth && <Redirect from='/' to='/login' noThrow />}

//                 {/* Si esta logeado el path de '/login' sera '/' para impedir re logeo sin cerrar sesion */}
//                 {isAuth && <Redirect from='/login' to='/' noThrow />}

//                 {/* Si  esta logeado '/' lleva a MainPage */}
//                 {isAuth && <MainPageEmpresa path='/'/>}

//                 {/* ------Vinculacion------ */}
//                 {/* Si no esta logeado el path de login de vinculacion sera 'vinculacion/login' */}
//                 {!isAuth && <LoginVinculacion path='/vinculacion/login'/>}

//                 {/* Si no esta logeado el path de '/vinculacion' sera '/login' asi protegemos la vista  */}
//                 {!isAuth  && <Redirect from='/vinculacion' to='/vinculacion/login' noThrow />}

//                 {/* Si  esta logeado '/vinculacion' lleva a ValidarEmpresa */}
//                 {isAuth && userType && <ValidarEmpresa path='/vinculacion'/>}

//                 {/* Si esta logeado el path de 'vinculacion/login' sera '/vinculacion' 
//                 para impedir re logeo sin cerrar sesion */}
//                 {isAuth && userType && <Redirect from='/vinculacion/login' to='/vinculacion' noThrow />}

                
//                 <RegistroEmpresa path='/register'/>