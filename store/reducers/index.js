const { combineReducers } = require("redux");
const currentProduct = require("./currentProduct.js");

module.exports = combineReducers({ currentProduct });
