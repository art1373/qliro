import axios from "axios";

const instance = axios.create({
  baseURL: "https://614580af38339400175fc5e5.mockapi.io/api/v1",
  headers: {},
});

export default instance;
