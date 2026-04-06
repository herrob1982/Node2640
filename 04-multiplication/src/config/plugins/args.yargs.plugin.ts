import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const argv = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    description: 'Base de la tabla de multiplicar',
    demandOption: true
})
.options('l', {
    alias: 'limite',
    type: 'number',
    description: 'Límite de la tabla de multiplicar',
    default: 10
})
.options('s', {
    alias: 'show',
    type: 'boolean',
    default: false,     
    description: 'Mostrar la tabla en consola'
})
.options('f', {
    alias: 'fileName',
    type: 'string',
    default: 'multiplication-table',     
    description: 'nombre del archivo a generar'
})
.options('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',     
    description: 'Directorio de destino para el archivo generado    '
})
.check((argv, options) => {
    //throw new Error('Error en los argumentos');
    //console.log({argv, options});

    if (argv.b < 1) throw "La base debe ser un número mayor a 0";
    

    return true;

})
.parseSync()

