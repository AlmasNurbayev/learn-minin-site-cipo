import * as fs from 'fs/promises';
//import fs from 'fs';
//import {readFile} from 'fs';
import path from 'path';
import convert from 'xml-js';

async function parse(name: string) {
      let data = await fs.readFile(path.resolve(__dirname, name));
      let result1 = convert.xml2json(String(data));
      fs.writeFile(result1, path.resolve(__dirname, "../server/exchange/offers0_1.xml"));
    //console.log(xml);
    
    //fs.writeFileSync(path.resolve(__dirname,'../server/exchange/offers0_1.json'), result1);
    //let obj = JSON.parse(result1);
};

await parse("../server/exchange/offers0_1.xml");

