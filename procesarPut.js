
const url = require('url');
const datos = require('./datos.js')
const qs = require('querystring');


function procesarPut(req, res) {
    console.log("Entrando en Delete");
    path = url.parse(req.url, true).pathname.split('/');
    console.log(path);
    if (path.length == 3) {
        console.log("Entrando en If de ids");
        deleteId(req, res, path[2], path[1]);
    } else {
        console.log("Error no hay suficiente info para borrar")
        res.end("Error no hay suficiente info para borrar");
    }
};


function deleteId(req, resp, id, type) {
    console.log("Actualizando elemento de tipo " + type + " y de id " + id);
    let actualizado;
    let body = '';
    req.on('data', data => {
        body += data;
        if (body.length > 1e6) req.connection.destroy();
    });
    req.on('end', () => {
        let contenido = qs.parse(body);
        let query = JSON.parse(Object.keys(contenido)[0]);

        datos.forEach((element, i) => {
            if (id == element.id && type == element['@type']) {
                element.actualizar(query);
                actualizado = element;
                resp.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                  });
                resp.end('Entidad actualizada');
            }
        });
        if (actualizado == undefined) {
            resp.writeHead(404, {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            });
            resp.end('Food Establishment no encontrado');
        }
    });



};

module.exports = procesarPut;