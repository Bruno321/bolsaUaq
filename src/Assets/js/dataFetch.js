// The function gets a number that defines the route of the fetch and returns the data


const dataFetch = (optionSelected) => {
    if(optionSelected==0){
        // return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        return [
            {
                title: "Balsoft",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec fermentum tortor, et ultrices justo. In iaculis mi in sem cursus malesuada. Sed sodales blandit turpis a sagittis. Sed lobortis nec neque nec viverra. Nam tempus aliquam vestibulum. Praesent maximus consectetur est ac lobortis..",
                city:"Queretaro",
                rfc:"A13ASF5165",
                giro:"Tecnologia",
                razonSocial: "BALSOFT SA DE CV",
                email:"balsoft@nbalsot.com",
                telefono:"1231412",
                sitioWeb:"www.balsoft.com",
                fechaRegistro: "15/15/3000", 
                direccion:"CORREGIDORA",
                colonia: "La que corrige",
                ciudad:"Queretaro",
                codigoPostal:"1438",
                estado:"Queretaro", 
                nombreReclutador:"Alan",
                emailReclutador:"alan@balsoft.com",
                telefonoReclutador:"49813181441",
                id:0,
            },
            {
                title: "Microsoft",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec fermentum tortor, et ultrices justo. In iaculis mi in sem cursus malesuada. Sed sodales blandit turpis a sagittis. Sed lobortis nec neque nec viverra. Nam tempus aliquam vestibulum. Praesent maximus consectetur est ac lobortis..",
                city:"Queretaro",
                rfc:"A13ASF5165",
                giro:"Tecnologia",
                razonSocial: "Microsoft SA DE CV",
                email:"Microsoft@Microsoft.com",
                telefono:"1231412",
                sitioWeb:"www.balsoft.com",
                fechaRegistro: "15/15/3000", 
                direccion:"CORREGIDORA",
                colonia: "La que corrige",
                ciudad:"Queretaro",
                codigoPostal:"1438",
                estado:"Queretaro", 
                nombreReclutador:"josu",
                emailReclutador:"josu@Microsoft.com",
                telefonoReclutador:"49813181441",
                id:1,
            },
            
        ]
      
    }
    if(optionSelected==1){
        return [1,2,3,4,5,6]
      
    }
    if(optionSelected==2){
        return [1,2,3,4,5,6]
      
    }
    if(optionSelected==3){
        return [1,2,3,4,5,6]  
    }
}

export default dataFetch