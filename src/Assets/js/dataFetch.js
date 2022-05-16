// The function gets a number that defines the route of the fetch and returns the data
import axios from "axios"
// 0 y 3: Obtener todas las empresas
// 1 y 2: Obtener todas las vacantes
//4: Obtener mis vacantes
//Status: 0-aceptada,1-rechazada,2-pendiente
const dataFetch = (optionSelected,setLoading) => {

    const token = window.localStorage.getItem('token')
    var array = []
    setLoading(false)
    if(optionSelected==0 || optionSelected==3){
         axios.get('http://localhost:3000/empresa',{headers:{"Access-Control-Allow-Origin":null,'Authorization': `Bearer ${token}`}, mode: 'cors'})
            .then((response)=>{
                // console.log(response.data.message)
                // array.push(response.data.message)
                array = response.data.message
                console.log("entre")
                return array
                // console.log(array)
            }).catch((e)=>{
                console.log("error",e)
            })
    }
    if(optionSelected==1 || optionSelected==2){
        return []
      
    }
    if(optionSelected==4){
        return []  
    }
}

export default dataFetch