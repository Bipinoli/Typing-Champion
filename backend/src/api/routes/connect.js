const { Router } = require("express");
const  { generator, reader } = require("../../services/signature");
const signature = require("../../services/signature");
const route = Router();

module.exports = (app) => {
  app.use('/connect', route);

  route.get('/host/:nickname', (req, res) => {
    return res.json({
      signature: generator(req.params.nickname),
    });
  });

  route.get('/join/:signature', (req, res) => {
    res.send(`Joined to the room hosted by ${req.params.signature}`);
  });

  route.get('/read/:signature', (req, res) => {
    return res.json({
      signature: reader(req.params.signature),
    });
  });
}