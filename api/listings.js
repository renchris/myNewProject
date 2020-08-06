import client from "./client";

const endpoint = "/photos";

const getListings = () => client.get(endpoint);

export default {
  getListings,
};
