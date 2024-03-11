import axios from "axios";

const config = {
  baseURL: "http://localhost:5172/api",
};

const instance = axios.create(config);

export default instance;
