const Negotiator = require('negotiator');
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const datos = require('./datos.js')

const tiposDisponibles =
    ['text/html',
        'application/xml',
        'application/json'
    ];


function procesarGet(req, res){
    console.log("Entrando en Get");
    path = url.parse(req.url, true).pathname.split('/');
    console.log(path);
    if (path.length == 2) {
        if (path[1] == 'LocalBusiness') {
            console.log("Entrando en If LocalBusiness");

            showTodos(req, res, "LocalBusiness");

        } else if (path[1] == 'FoodEstablishment') {
            console.log("Entrando en If FoodEstablishment");

            showTodos(req, res, "FoodEstablishment");
        } else {
            var respuesta = '<section> <h3> Info de entidades </h3>'
            respuesta += '<p>Hay dos tipos de entidades: </p>'
            respuesta += '<ul><li>LocalBusiness</li><li>FoodEstablishment</li></ul>'
            respuesta += '<h3> Entidad LocalBusiness </h3>'
            respuesta += '<table><thead><tr><th>Atributos</th><th>Descripcion</th><th>Tipo</th></tr></thead><tbody><tr><td>name</td>'
            respuesta += '<td>Nombre del local</td><td>Texto</td></tr><tr><td>address</td><td>Direccion del local</td><td>Texto</td>'
            respuesta += '</tr><tr><td>description</td><td>Descripcion del local</td><td>Texto</td></tr><tr><td>telephone</td><td>Telefono del local</td>'
            respuesta += '<td>Texto</td></tr><tr><td>url</td><td>Url de la web del local</td><td>Texto</td></tr><tr><td>openingHours</td><td>Horas a las que esta abierto el local</td>'
            respuesta += '<td>Array de Textos</td></tr></tbody></table>'
            respuesta += '<h3> Entidad FoodEstablishment </h3>'
            respuesta += '<table><thead><tr><th>Atributos</th><th>Descripcion</th><th>Tipo</th></tr></thead><tbody><tr><td>name</td><td>Nombre del local</td>'
            respuesta += '<td>Texto</td></tr><tr><td>address</td><td>Direccion del local</td><td>Texto</td></tr><tr><td>description</td><td>Descripcion del local</td>'
            respuesta += '<td>Texto</td></tr><tr><td>telephone</td><td>Telefono del local</td><td>Texto</td></tr><tr><td>url</td><td>Url de la web del local</td>'
            respuesta += '<td>Texto</td></tr><tr><td>openingHours</td><td>Horas a las que esta abierto el local</td><td>Array de Textos</td></tr><tr>'
            respuesta += '<td>acceptsReservations</td><td>Si acepta reservas</td><td>Booleano</td></tr><tr><td>servesCuisine</td><td>Tipos de cocina que sirve</td>'
            respuesta += '<td>Array de Textos</td></tr></tbody></table>'
            respuesta += '</section>'
            res.end(respuesta);
        }
    } else if (path.length == 3) {
            console.log("Entrando en If de ids");

            showId(req, res, path[2], path[1]);
    }
};


function showTodos(req, resp, type) {
    const negotiator = new Negotiator(req);
    const mediaType = negotiator.mediaType(tiposDisponibles);
    resp.writeHead(200, {
        'Content-Type': mediaType,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    switch (mediaType) {
        case 'application/xml':
            console.log("XML...")
            respuesta = '';
            datos.forEach((element, i) => {
                if (type == element['@type'])
                    respuesta += element.toXML();
            });
            resp.write(respuesta);

            resp.end();
            break;
        case 'application/json':
            console.log("JSON...")
            respuesta = '';
            datos.forEach((element, i) => {
                if (type == element['@type'])
                    respuesta += element.toJson();
            });
            resp.write(respuesta);

            resp.end();
            break;
        case 'text/html':
            respuesta = '';
            datos.forEach((element, i) => {
                if (type == element['@type'])
                    respuesta += element.toHTML();
            });
            resp.write(respuesta);

            resp.end();
            break;
        default:
            respuesta = '';
            datos.forEach((element, i) => {
                if (type == element['@type'])
                    respuesta += element.toHTML();
            });
            resp.write(respuesta);

            resp.end();
    }
};

function showId(req, resp, id, type) {
    const negotiator = new Negotiator(req);
    const mediaType = negotiator.mediaType(tiposDisponibles);
    resp.writeHead(200, {
        'Content-Type': mediaType,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    switch (mediaType) {
        case 'application/xml':
            console.log("XML...")
            respuesta = '';
            datos.forEach((element, i) => {
                if (id == element.id && type == element['@type'])
                    respuesta += element.toXML();
            });
            resp.write(respuesta);

            resp.end();
            break;
        case 'application/json':
            console.log("JSON...")
            respuesta = '';
            datos.forEach((element, i) => {
                if (id == element.id && type == element['@type'])
                    respuesta += element.toJson();
            });
            resp.write(respuesta);

            resp.end();
            break;
        case 'text/html':
            respuesta = '';
            datos.forEach((element, i) => {
                if (id == element.id && type == element['@type'])
                    respuesta += element.toHTML();
            });
            resp.write(respuesta);

            resp.end();
            break;
        default:
            respuesta = '';
            datos.forEach((element, i) => {
                if (id == element.id && type == element['@type'])
                    respuesta += element.toHTML();
            });
            resp.write(respuesta);

            resp.end();
    }
};

module.exports = procesarGet;