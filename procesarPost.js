const url = require('url');
const qs = require('querystring');
const datos = require('./datos.js');

const LocalBusiness = require('./LocalBusiness.js');
const FoodEstablishment = require('./FoodEstablishment.js');


function procesarPost(req, res) {
    console.log("Entrando en post");
    let body = '';
    req.on('data', data => {
        body += data;
        if (body.length > 1e6) req.connection.destroy();
    });
    var path = url.parse(req.url, true).pathname.split('/');

    req.on('end', () => {
        let contenido = qs.parse(body);
        let query = JSON.parse(Object.keys(contenido)[0]);
        let nuevo = null;
        let maxId = 0;
        datos.forEach(element => {
            if (element.id > maxId) {
                maxId = element.id;
            }
        });
        maxId = maxId + 1;


        if (path.length == 2) {
            if (path[1] == 'LocalBusiness') {
                nuevo = new LocalBusiness(query);
                nuevo.id = maxId;
                datos.push(nuevo);
            } else if (path[1] == 'FoodEstablishment') {
                console.log("Entrando en POST FoodEstablishment");
                nuevo = new FoodEstablishment(query);
                nuevo.id = maxId;
                datos.push(nuevo);
            } else {
                console.log("Entrando en Error Entidad no conocida");
                res.end("Error Entidad no conocida");
            }
        } else {

            console.log("Entrando en Error Secuencia no conocida");
            res.end("Error Secuencia no conocida");

        }
        res.end("El nuevo objeto ha sido añadido");
    });

};


module.exports = procesarPost;