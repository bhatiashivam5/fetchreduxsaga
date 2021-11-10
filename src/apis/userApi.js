import axios from "axios";

export const loadUserApi = async () =>
await axios.get(`https://jsonplaceholder.typicode.com/posts/`);