const axios = require("../../helpers/axiosApi.js");

module.exports = id => {
  return dispatch => {
    axios
      .get(`/reviews/${id}/meta`)
      .then(({ data }) => {
        dispatch({
          type: "CHANGE_REVIEWS_META",
          payload: { reviewsMeta: data }
        });
      })
      .catch(console.error);
  };
};
