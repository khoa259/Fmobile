import axios from "axios";

const instance = axios.create({
  baseURL: "https://mockapi.io/projects/62af03383bbf46a3521a3aa1",
});

export const path = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export default instance;
