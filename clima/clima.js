const axios = require('axios');

const getClima = async(lat, lon) => {
    const info = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=98660a96349795a96874169dbb399412&units=metric`);
    return info.data.main.temp;
}



module.exports = {
    getClima
}