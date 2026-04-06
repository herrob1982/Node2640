
// import process = require("node:process");
// console.log(process.argv);

//import console from "node:console";

//const [ tsnode, app, ...args] = process.argv;
//const yarg = require('./config/plugins/args.yargs.plugin');

 //import { argv } from './config/plugins/args.yargs.plugin';

 //const ccc = require('./config/plugins/args.yargs.plugin');

// console.log(argv.b);
//import yargs from 'yargs';
import { Server } from 'node:http';
import { argv } from './config/plugins/args.yargs.plugin.ts';
import { ServerApp } from './presentation/server-app.ts';


(async() => {
    await main();
    console.log('Process finished');
})();

//funciones anonimas autoejecutables
async function main() {
    
    // console.log('Hello world');
    // console.log('Argumentos: ', argv);
    // const base = argv.base;
    // console.log('Base: ', base);

    const { b:base, l:limit, s:showTable, f:fileName, d:fileDestination } = argv;
    ServerApp.run({
        base,
        limit,
        showTable,
        fileName,
        fileDestination
    });

}
