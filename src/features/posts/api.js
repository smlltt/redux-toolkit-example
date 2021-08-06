const axios = require("axios");

export const fetchPosts = ({ limit }) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?&_limit=${limit}`
  );
};
