const fs = require('fs');
const LocalBusiness = require('./LocalBusiness.js');
const FoodEstablishment = require('./FoodEstablishment.js');


let datos = [];

fs.readFile('Objetos.json', 'utf8', (err, data) => {
    if (err) throw err;
    vector = JSON.parse(data);
    //console.log(vector); // do whatever you want here

    vector.forEach((element,i) => {
        // console.log(`Elemento numero $(i)`);
        // console.log(element);
        // console.log(typeof element);
        // console.log(element['@type']);

        let nuevo ;
        switch (element['@type']) {
            case 'LocalBusiness':
                 nuevo = new LocalBusiness(element);
                break;
            case 'FoodEstablishment':
                nuevo = new FoodEstablishment(element);
                break;
            default:
                break;
        }
        nuevo.id = i;
        datos.push(nuevo);

        // console.log( nuevo.toText());
        // console.log( nuevo.toJson());
        // console.log( nuevo.toXML());
        // console.log( nuevo.toHTML());

    });

});

module.exports = datos;
