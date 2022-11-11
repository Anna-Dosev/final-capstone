const { router : authRouter} = require('./auth/router');
const { router : resourcesRouter} = require('./resources/router');

module.exports = { authRouter, resourcesRouter };