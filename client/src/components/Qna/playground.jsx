//this is how helper function helps me to pull things from the api:

const axios = require("../../../../helpers/axiosApi");

const handleGetAnswers = () => {
  axios
    .request(`/qa/1/answers`)
    // .request(`/qa/${props.currentProduct.id}/answers`)
    .then(({ data }) => console.log(data))
    .catch(console.error);
};

handleGetAnswers();
