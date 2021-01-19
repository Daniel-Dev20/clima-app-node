
const pais = require('./services/services');
const argv = require('yargs').options({
   direccion: {
    alias: 'd',
    description: 'Obtener clima de cualquier ciudad'
    //demand: true
   }
   
}).argv;

 pais.getCiudadInfo(argv.direccion).then(console.log()).catch(err => console.log(err));


