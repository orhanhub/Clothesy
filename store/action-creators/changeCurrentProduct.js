const axios = require("../../helpers/axiosApi.js");

module.exports = id => {
  return dispatch => {
    axios.get(`/products/${id}`).then(({ data }) => dispatch(data));
  };
};
