'use strict';
const config = require('./config');
const express = require('express');
const Logger = require('./loaders/logger');
let { registerLogger } = require('./global/singleton');


registerLogger(Logger);


async function startServer() {
  const app = express();
  await require('./loaders')({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

startServer();









// 'use strict';

// const app = require('express')();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);


// app.get("/", (req, res) => {
//     res.send("<div style='width: 90vw; height: 90vh; display: grid; place-items: center; font-weight: 100; font-size: 3rem;'>hello there</center>");
// });

// io.on('connection', (socket) => {
//     console.log("a user connected");

//     socket.on("disconnect", () => {
//         console.log("a user disconnected");
//     })
// });



// const server = http.listen(process.env.PORT || 3000, () => {
//     console.log(`server is running on localhost:${server.address().port}`);
// });