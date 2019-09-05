module.exports = (state = [], action) => {
  switch (action.payload) {
    case "CHANGE_RELATED_PRODUCTS":
      return action.payload.products;
    default:
      return state;
  }
};
