import axios from "axios";

export default axios.create({
  baseURL: "http://87.103.240.130/",
  timeout: 5000,
});
