const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUlr = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '42c2962f0fmsh7cd40460e32b51ap1bf4c0jsn8165b434972e' }
    });
    const resp = await instance.get();
    if (resp.data.Results === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        dir,
        lat,
        lon
    }
}


module.exports = {
    getLugarLatLng
}