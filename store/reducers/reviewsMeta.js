module.exports = (state = {}, action) => {
  switch (action.payload) {
    case "CHANGE_REVIEWS_META":
      return action.payload.reviewsMeta;
    default:
      return state;
  }
};
