const proxy = require('./proxy');

const development = {
  assetsPublicPath: '',
  URL: '',
};

const production = {
  assetsPublicPath: '',
  URL: '',
};

const common = {
  port: 8001,
  proxy,
};
const env = process.env.NODE_ENV || 'development';

const collections = {
  development: Object.assign({}, development, common),
  production: Object.assign({}, production, common),
};


module.exports = collections[env];
