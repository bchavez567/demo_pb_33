const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

app.get('/mensaje', (req, res) => {
    res.send('Hola a todos desde Heroku!')
});

const server = app.listen(PORT,'0.0.0.0' ,()=> {
    console.log(`Server is run and port => ` , PORT);
});

server.on('error', (err) => {
    console.log(`Error en el servidor => ${err}`)
});