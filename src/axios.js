import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-84d0e.cloudfunctions.net/api",
  // "http://localhost:5001/clone-84d0e/us-central1/api",
});

export default instance;
