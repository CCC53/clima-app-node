const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//Yargs tiene esta opcion para solo recibir parametros sin necesidad de un comando en espcecial
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
//lugar.getLugarLatLng(argv.direccion).then(console.log);

//clima.getClima(19.430000, -99.139999).then(console.log)
//    .catch(console.log);

const getInfo = async(direccion) => {
    try {
        let dir = await lugar.getLugarLatLng(direccion);
        let clma = await clima.getClima(dir.lat, dir.lon);
        return `El clima de ${dir.dir} es de ${clma}`;
    } catch (error) {
        return `No se pudo determinar el clima para ${direccion}`;
    }
}

getInfo(argv.direccion).then(console.log)
    .catch(console.log);