var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var serverOpts = {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
  headers: {"Access-Control-Allow-Origin": "*"}
};

// Primary app
new WebpackDevServer(webpack(config), serverOpts)
  .listen(3666, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3666');
  });
