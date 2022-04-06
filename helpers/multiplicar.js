const fs = require('fs')
const colors = require('colors');

const creaArchivo = async(multipliacion = 1, listar = false, hasta = 10)=>{

    try {
        
       let salida, consola = ''

       for (let i = 1; i <= hasta; i++) {
            salida += `${multipliacion} x ${i} = ${ multipliacion * i }\n`;
            consola += `${multipliacion} ${'x'.yellow} ${i} ${'='.yellow} ${ multipliacion * i }\n`;
        }
        if(listar){ 

            console.log('================'.brightMagenta)
            console.log(`  Tabla del: ${multipliacion} `.rainbow)
            console.log('================'.brightMagenta)
            console.log(consola)
        };    
    
        fs.writeFileSync(`./salida/tabla-${multipliacion}.txt`, salida);
    
        return `tabla-${multipliacion}.txt`
        
    }catch(err) {
        throw err;
    }



}


module.exports = {
    creaArchivo : creaArchivo
}