import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/project-672e1/us-central1/api",
  baseURL: "https://api-h3x7dgb5hq-uc.a.run.app/",
});

export { axiosInstance };
