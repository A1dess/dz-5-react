
import axios from "axios";

const endpoind = axios.create({
  baseURL: 'http://localhost:5000',
});

const getPosts = () => endpoind.get("/posts");
const getDetPosts = (payload) => endpoind.get("/posts/" + payload);
const api = {
  getPosts,
  getDetPosts,
};

export default api;