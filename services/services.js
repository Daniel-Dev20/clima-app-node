const axios = require('axios');

const getCiudadInfo = async (direccion) => {
    let pais =  encodeURI(direccion);

let apiKey = 'f8c90b1bfc43f56616034cf49ac3de81';



const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=${apiKey}&units=metric`);

const data = {
    pais:response.data.sys.country,
    ciudad:response.data.name,
    temp_max:response.data.main.temp_max,
    temp_min:response.data.main.temp_min,
    humedad:response.data.main.humidity,
    latitud:response.data.coord.lat,
    longitud:response.data.coord.lon,
    codigo: response.data.cod
}

console.log(data);
 

}

module.exports = {
    getCiudadInfo
}