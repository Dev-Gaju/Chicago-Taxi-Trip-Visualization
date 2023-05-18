// webpack.config.js
module.exports = {
  webpack: {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          esModule: false,
        },
      },
    ],
    module: {
      loaders: [{ test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }],
    },
  },
};
