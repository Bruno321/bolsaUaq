// The function gets a number that defines the route of the fetch and returns the data
const dataFetch = (optionSelected) => {
    if(optionSelected==0){
        // return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        return [
            {
                title: "Balsoft",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec fermentum tortor, et ultrices justo. In iaculis mi in sem cursus malesuada. Sed sodales blandit turpis a sagittis. Sed lobortis nec neque nec viverra. Nam tempus aliquam vestibulum. Praesent maximus consectetur est ac lobortis..",
                place:"Queretaro",
                rfc:"A13ASF5165",
                giro:"Tecnologia",
            },
            {
                title: "AMAZON",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec fermentum tortor, et ultrices justo. In iaculis mi in sem cursus malesuada. Sed sodales blandit turpis a sagittis. Sed lobortis nec neque nec viverra. Nam tempus aliquam vestibulum. Praesent maximus consectetur est ac lobortis..",
                place:"Guanajuato",
                rfc:"A13ASF5165",
                giro:"Tecnologia",
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