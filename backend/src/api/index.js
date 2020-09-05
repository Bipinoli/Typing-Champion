const { Router } = require('express');
const user = require('./routes/user');
const connect = require('./routes/connect');

// guaranteed to get dependencies
module.exports = () => {
	const app = Router();
	user(app);
	connect(app);

	return app;
}