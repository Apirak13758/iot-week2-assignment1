import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_SECRET}`;

export default axios;