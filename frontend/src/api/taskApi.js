import axios from "axios";

const API = axios.create({
  baseURL: "https://taskcreate-backend.onrender.com/api/tasks",
});

export const getTasks = (params) => API.get("/", { params });
export const createTask = (data) => API.post("/", data);
export const updateTaskStatus = (id, status) =>
  API.put(`/${id}`, { status });
export const deleteTask = (id) => API.delete(`/${id}`);
