const {creaArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');

console.clear()

creaArchivo(argv.m, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))