const procesarGet = require('./procesarGet.js');
const procesarPost = require('./procesarPost.js');
const procesarDelete = require('./procesarDelete.js');
const procesarPut = require('./procesarPut.js');
const http = require('http');



const tiposDisponibles =
    ['text/html',
        'application/xml',
        'application/json'
    ];


http.createServer(procesarRequest).listen(3000);
let path;

function procesarRequest(req, res) {
    switch (req.method) {
        case 'POST':
            procesarPost(req, res);
            break;
        case 'GET':
            procesarGet(req, res);
            break;
        case 'DELETE':
            procesarDelete(req, res);
            break;
        case 'PUT':
            procesarPut(req, res);
            break;
        default:
            console.log("Método no soportado" + req.method);
    }
};

