
import fs from 'fs';
import { argv } from './config/plugins/args.yargs.plugin.ts';

//npx ts-node src/app.logic --base 33 --limit 15 --show true

(async() => {
    await main();
    console.log('Process finished');
})();

//funciones anonimas autoejecutables
async function main() {
    
    const base = argv.base;
    const limite = argv.limit;
    const show = argv.show;
  
    console.log('Base: ', base);
    console.log('Limite: ', limite);
    console.log('Mostrar: ', show);


    let outmessage = '';

    const headerMessage= `
    ===============================
    tabla del ${base}
    ===============================\n
    `;

    for (let i = 1; i <= limite; i++) {
        outmessage += `${base} x ${i} = ${base * i}\n`;
    }


    const outputPath = `ouputs`;
    fs.mkdirSync(outputPath, { recursive: true });

    fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, headerMessage + outmessage);
    
    if (show) console.log(headerMessage + outmessage);


}

