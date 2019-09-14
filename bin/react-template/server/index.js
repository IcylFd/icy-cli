const http = require('http');
const url = require('url');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxy = require('express-http-proxy');
const SunMockMiddleware = require('sun-mock-middleware');

const app = express();
const router = express.Router();

const config = require('../config');

const ROOT_PATH = path.resolve(__dirname, '../');
const host = process.argv[2] || 'localhost';
app.use(require('morgan')('short'));

app.use('/public', express.static(`${ROOT_PATH}/public`));
app.use('/dll', express.static(`${ROOT_PATH}/dll`));
const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../build-script/webpack.dev');
const compiler = webpack(webpackConfig);

// Step 2: Attach the dev middleware to the compiler & the server
app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

// // Step 3: Attach the hot middleware to the compiler & the server
app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr',
}));

app.use('/favicon.ico', (req, res) => {
  res.send('f');
});

if (host !== 'localhost') { // proxy
  const { host: hostConfig } = config.proxy;
  const cfg = hostConfig[host];
  const { name, port = '' } = cfg;

  app.use(proxy(`${name}:${port}`, {
    proxyReqPathResolver(req) {
      const pathname = url.parse(req.url).path;
      return pathname;
    },
  }));
} else { // local mock
  router.use('/mock', SunMockMiddleware({
    pathMap: {},
    mockDir: `${ROOT_PATH}/mock`,
  }));
}

// Do anything you like with the rest of your express application.


app.use(router);

const server = http.createServer(app);
server.listen(process.env.PORT || config.port || 1234, () => {
  console.log('Listening on %j', server.address());
});

