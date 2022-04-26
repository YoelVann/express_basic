const express = require('express');

// App de express
const app = express();
const port = 3000;

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello world');
});

// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('¡Bienvenidos a launchx!');
});

// regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Explorer", msg: "Hello!" };

    res.send(explorer);
});

// Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/joel
// req.params = { "explorerName": "joel" }¿
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});

// se inicializa la appp
app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});