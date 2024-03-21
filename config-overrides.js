const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    os: false,
    http: false,
    https: false,
    fs: false,
    path: false,
    stream: false,
    assert: false,
    crypto: false,
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
