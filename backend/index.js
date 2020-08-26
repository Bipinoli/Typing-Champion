'use strict';

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get("/", (req, res) => {
    res.send("hello there");
});

io.on('connection', (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log("a user disconnected");
    })
});



const server = http.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on localhost:${server.address().port}`);
});