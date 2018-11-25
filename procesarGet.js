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
            res.end("Info de las entidades");
        }
    } else if (path.length == 3) {
            console.log("Entrando en If de ids");

            showId(req, res, path[2], path[1]);
    }
};


function showTodos(req, resp, type) {
    const negotiator = new Negotiator(req);
    const mediaType = negotiator.mediaType(tiposDisponibles);
    switch (mediaType) {
        case 'application/xml':
            resp.setHeader('content-type', mediaType);
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
            resp.setHeader('content-type', mediaType);
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
            resp.setHeader('content-type', mediaType);
            respuesta = '';
            datos.forEach((element, i) => {
                if (type == element['@type'])
                    respuesta += element.toHTML();
            });
            resp.write(respuesta);

            resp.end();
            break;
        default:
            resp.setHeader('content-type', 'text/html');
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
    switch (mediaType) {
        case 'application/xml':
            resp.setHeader('content-type', mediaType);
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
            resp.setHeader('content-type', mediaType);
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
            resp.setHeader('content-type', mediaType);
            respuesta = '';
            datos.forEach((element, i) => {
                if (id == element.id && type == element['@type'])
                    respuesta += element.toHTML();
            });
            resp.write(respuesta);

            resp.end();
            break;
        default:
            resp.setHeader('content-type', 'text/html');
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