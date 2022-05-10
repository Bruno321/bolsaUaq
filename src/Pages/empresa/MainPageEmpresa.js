import React, {useContext,useState} from 'react';
import {Context} from '../../Context/LoginContext'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MainPageComponent from '../../Components/MainPageComponent';
import ConsolaEmpresa from '../../Components/ConsolaEmpresa';

const MainPageEmpresa = () => {
    const {cerrarSesion} = useContext(Context);
    const [pageToRender,setPageToRender] = useState(1) 

    const handleRender = () => {
        if(pageToRender==0){
            return <MainPageComponent/>
        }
        if(pageToRender==1){
            return <ConsolaEmpresa/>
        }
    }

    return (
        <div >
            <Header/>
            <div style={styles.contentContainer} >
                {handleRender()}
            </div>
            <Footer/>
        </div>
    )

}

export default MainPageEmpresa

const styles = {
    contentContainer: {
        width: '100%',
        height: '100%'
    }
}