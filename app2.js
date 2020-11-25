
let reverseGeoCode=require('./app');
let statusClima=require('./clima');

let coordenada ={
    lat:19.262187, 
    lon:-103.744636
};

reverseGeoCode(coordenada, (error,dataResponse)=>{
    if(error){
        console.log('ocurrio un error');
    }else{

        console.log(dataResponse.state);
        statusClima(dataResponse.state,(error,dataResponse)=>{
            if(error){
                console.log('error');
            }else{
                console.log("temperatura:", dataResponse.temperature, dataResponse.clima);
                
            }
        })


    }
})