const request = require('postman-request');



const statusClima= (estado, callback) =>{
    
    let urlapiclima = `http://api.weatherstack.com/current?access_key=6db0808634b576da318471ab73e32a41&query=${estado}`;
    request(urlapiclima, function(error, response,body){
        if(error){
            callback('ocurrio algun errro', undefined);
        }else{

            let data=JSON.parse(body);

            callback(undefined, {
                temperature: data.current.temperature,
                clima: data.current.weather_descriptions
            })
        }
    })
}


module.exports=statusClima;