'use strict';

const fs = require('fs');
const path = require('path');
const convert = require('xml-js');

const xml = fs.readFileSync(path.resolve(__dirname, "../server/exchange/offers0_1.xml"));
//console.log(xml);
let result1 = convert.xml2json(xml);
//fs.writeFileSync(path.resolve(__dirname,'../server/exchange/offers0_1.json'), result1);
let obj = JSON.parse(result1);
fs.writeFile(result1, path.resolve(__dirname, "../server/exchange/offers0_1.xml"));

console.log(obj.elements[0].elements[1].elements[6]); // узел складов
console.log(obj.elements[0].elements[1].elements[7]); // узел предложений
console.log(obj.elements[0].elements[1].elements[7].elements[0]); // узел товара
console.log(obj.elements[0].elements[1].elements[7].elements[0].elements[1].elements[0].text); // артикул
console.log(obj.elements[0].elements[1].elements[7].elements[0].elements[2].elements[0].text); // наименование номенклатуры
console.log(obj.elements[0].elements[1].elements[7].elements[0].elements[3].attributes.НаименованиеПолное); // единица измерения
console.log(obj.elements[0].elements[1].elements[7].elements[0].elements[4].elements); // узел цен
console.log(obj.elements[0].elements[1].elements[7].elements[0].elements[4].elements[0].elements[2].elements[0].text); // первая цена


const { CommerceMlImportParser } = require('commerceml-parser');

(async () => {
    parse2();
})();

async function parse2() {
    try {
        
        let parser = new CommerceMlImportParser();


        

        // Define handler for commercial information header
        parser.onCommercialInformation(commercialInformation => {
            console.log('commercialInformation ', JSON.stringify(commercialInformation));



        });

        // Define handler for classifier XML block
        parser.onClassifier(classifier => {
            console.log('classifier ', JSON.stringify(classifier));

        });

        // Define handler for classifier group XML blocks
        parser.onClassifierGroup(classifierGroup => {
            console.log('classifierGroup ', JSON.stringify(classifierGroup));


        });
        
        console.log(parser.rules.catalog.include.product);
        
        parser.onCatalog(async catalog => {
            console.log('catalog ', JSON.stringify(catalog));

          });



        parser.onProduct(product => {
            console.log('product ', JSON.stringify(product));
        });



        await parser.parse(fs.createReadStream(path.resolve(__dirname, "../server/exchange/offers0_1.xml")));



        return parser;

    } catch (err) {
        console.log(err.stack);
    }

}


