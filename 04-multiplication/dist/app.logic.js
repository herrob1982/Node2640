"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let outmessage = '';
const base = 5;
const headerMessage = `
===============================
 tabla del ${base}
===============================\n
`;
for (let i = 1; i <= 10; i++) {
    outmessage += `${base} x ${i} = ${base * i}\n`;
}
const outputPath = `ouputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, headerMessage + outmessage);
console.log(headerMessage + outmessage);
//# sourceMappingURL=app.logic.js.map