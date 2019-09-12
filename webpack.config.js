const webpack = require("webpack");
const path = require("path");

const config = [
  {
    entry: "./client/src/index.jsx",
    output: {
      path: path.resolve(__dirname, "./client/public/dist"),
      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.svg$/,
          use: "file-loader"
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                mimetype: "image/png"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
      historyApiFallback: true
    }
  },
  {
    entry: "./server/ssr-src/Reviews-SSR.jsx",
    output: {
      path: path.resolve(__dirname, "./server/dist"),
      filename: "ReviewsBundle.js",
      libraryTarget: "commonjs-module"
    },
    target: "node",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.svg$/,
          use: "file-loader"
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                mimetype: "image/png"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    }
  }
];

module.exports = config;
