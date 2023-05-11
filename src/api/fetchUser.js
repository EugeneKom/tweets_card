import axios from "axios";

const BASE_URL = new URL(
  "https://6458c2d48badff578efa0261.mockapi.io/api/v1/users"
);

export function getTweets(page = 1) {
  return axios
    .get(`${BASE_URL}/?&page=${page}&limit=3`)
    .then((response) => {
      return response;
    })
    .then(({ data }) => {
      return data;
    })
    .catch(console.error);
}

export function addFollower(id, followers) {
  return axios
    .put(`${BASE_URL}/${id}`, { followers })
    .then(({ data }) => {
      return data;
    })
    .catch(console.error);
}
