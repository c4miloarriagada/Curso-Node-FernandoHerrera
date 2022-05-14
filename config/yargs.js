const { describe } = require('yargs');


const argv = require('yargs')
                .option('m',{
                    alias: 'multiplicacion',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la Base de la Multiplicacion'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'esta opcion sirve para saber hasta donde quieres la multiplicacion'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la Tabla en la consola'

                })
                .check((argv, options)=>{
                    if(isNaN(argv.m)){
                        throw 'La base debe ser un numero entero'
                    }
                    return true;
                })
                .argv;


module.exports = argv;