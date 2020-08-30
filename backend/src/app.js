'use strict';
const config = require('./config');
const express = require('express');
const Logger = require('./loaders/logger');
let { registerLogger } = require('./global/singleton');

registerLogger(Logger);


async function startServer() {
  const app = express();
  await require('./loaders')({ expressApp: app });
  const http = require('http').createServer(app);

  require('./websockets')(http);

  http.listen(config.port, (err) => {
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