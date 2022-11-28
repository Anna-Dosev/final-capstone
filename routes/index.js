const { router : authRouter} = require('./auth/router');
const { router : resourcesRouter} = require('./resources/router');
// const { router : regRouter} = require('./register/router');

module.exports = { authRouter, resourcesRouter }; //add regRouter here too