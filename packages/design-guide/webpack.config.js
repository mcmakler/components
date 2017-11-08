/*eslint-disable */
switch (process.env.WEBPACK_CONFIG_MODE) {
  case 'CLIENT_BUILD':
    module.exports = require('./webpack/production.config');
    break;

  default:
    module.exports = require('./webpack/dev.config');
}

