const { Router, Request, Response } = require('express');
const middlewares = require('../middlewares');


const route = Router();

module.exports = (app) => {
  app.use('/users', route);

  route.get('/me', middlewares.middlewareTest, (req, res) => {
    return res.json({'message': 'hello there wasssup 😻'}).status(200);
  });

  route.get('/host/', (req, res) => {
    return res.json({'message': '🚒 🚒 🚒 🚒 🚒 🚒 🚒'})
  });

}