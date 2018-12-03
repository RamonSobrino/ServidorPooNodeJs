
const url = require('url');
const datos = require('./datos.js')


function procesarDelete(req, res) {
    console.log("Entrando en Delete");
    path = url.parse(req.url, true).pathname.split('/');
    console.log(path);
    if (path.length == 3) {
        console.log("Entrando en If de ids");
        deleteId(req, res, path[2], path[1]);
    } else {
        console.log("Error no hay suficiente info para borrar")
        res.writeHead(404, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        res.end("Error no hay suficiente info para borrar");
    }
};


function deleteId(req, resp, id, type) {
    resp.setHeader('content-type', 'text/html');
    console.log("Borrando elemento de tipo " + type + " y de id " + id);
    let borrado;
    datos.forEach((element, i) => {
        if (id == element.id && type == element['@type']) {
            datos.splice(i, 1);
            borrado = element;
            resp.writeHead(200, {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            });
            resp.end('Entidad borrada');
        } else {

        }
    });
    console.log(borrado);
    if (borrado == undefined) {
        resp.writeHead(404, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        resp.end('Elemento no encontrado');
    }

};

module.exports = procesarDelete;