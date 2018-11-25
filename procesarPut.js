
const url = require('url');
const datos = require('./datos.js')


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
    resp.setHeader('content-type', 'text/html');
    console.log("Actualizando elemento de tipo "+type+" y de id "+id);
    let actualizado;
    let query =  url.parse(req.url, true).query;

    datos.forEach((element, i) => {
        if (id == element.id && type == element['@type']){
            element.actualizar(query);
            actualizado = element;
        }
    });
    

    resp.end(actualizado.toHTML());


};

module.exports = procesarPut;