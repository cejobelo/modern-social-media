const express = require('express');
const app = express();

const {createServer} = require('http');
const server = createServer(app);

const cors = require('cors');
app.use(cors({
    origin: ['http://127.0.0.1:3000', process.env.REACT_APP_URL],
}));

const { Server } = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: ['http://127.0.0.1:3000', process.env.REACT_APP_URL],
    },
});
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 2121;
const path = require('path');
const fs = require('fs');

fs.realpath(`${__dirname}/../build`, (err, resolvedPath) => {
    if (err) console.log(err);

    app.use(express.static(resolvedPath));

    server.listen(port, () => {
        console.log(`Listenning ${port}!`);
    });

    // Controllers
    io.on('connection', (socket) => {
        console.log('a user connected');

        for (const SocketController of require('./controllers'))
        {
            new SocketController(socket);
        }
    });

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(resolvedPath, 'index.html'));
    });
});