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

// se inicializa la appp
app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});