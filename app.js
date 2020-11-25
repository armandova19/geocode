const request = require('postman-request');



const reverseGeoCode= (coordenada, callback) =>{
    
    let urlLatLon = `https://us1.locationiq.com/v1/reverse.php?key=pk.7300e97734988341e540e5a0e22b89de&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;
    request(urlLatLon, function(error, response,body){
        if(error){
            callback('ocurrio algun errro', undefined);
        }else{

            let data=JSON.parse(body);

            callback(undefined, {
                road:data.address.road,
                state: data.address.state,
                country: data.address.country
            })
        }
    })
}


module.exports=reverseGeoCode;
