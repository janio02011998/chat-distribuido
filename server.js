// load the things we need
var express = require('express');
var bonjour = require('bonjour')();
var CORS = require('cors');

var http = require('http');

var app = express();

app.use(CORS());
app.use(express.json());

const server = http.createServer(app);
const port = 3000 + Math.floor(Math.random() * (99 - 10) + 10);
var WebSocketServer = require('websocket').server;
var socket = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

var clientsPort = [];
var clients = [];
var messages = [];
// set the view engine to ejs
app.set('view engine', 'ejs');

process.on('SIGINT', function () {
    console.log('fechando...');
    console.log(clientsPort.splice(clientsPort.indexOf(port), 1));
    process.exit(1);

});

// index page
app.get('/', function (req, res) {
    res.render('pages/index', { clientsPort, port });
});

// advertise an HTTP server on port 3000
bonjour.publish({ name: 'My Web Server ' + port, type: 'http', port: port }, () => {
});

// browse for all http services
bonjour.find({ type: 'http' }, function (service) {
    // console.log('Found an HTTP server:', service);
    console.log("Host: " + service.referer.address + " Port: " + service.port);
    clientsPort.push(service.port);
    console.log(clientsPort);
});

socket.on('request', function (request) {
    var connection = request.accept('http', request.origin);
    clients.push(connection);
    console.log('connect ');

    // connection.socket.emit('previousMessage', messages);

    connection.on('message', function (message) {
        clients.forEach(function (client) {
            client.send(message.utf8Data);
        });
    });
});

server.listen(port);

