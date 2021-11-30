import axios from "axios";

// Porta que está rodando a API...
const PORT = 3333;
const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export default api;
