import axios from "axios";

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4QGdtYWlsLmNvbSIsImlhdCI6MTYyNTg4NTE5NCwiZXhwIjoxNjI1ODg1NDk0fQ.SdWOba0h_HZl81QItV08fMT03Kde-nKvHQ4obVuKrw8c5Ygu9-VhSMSuyuJh5jboDv_3IYGRXnG3oidzz0RzJQ"

const httpClient = axios.create({
  baseURL: "https://projeto-integrador-4.herokuapp.com",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}`
  }
})

export const getAll = () => {
  return httpClient.get("/categories");
};

export const get = id => {
  return httpClient.get(`/categories/${id}`);
};

export const create = data => {
  return httpClient.post("/categories", data);
};

export const update = (id, data) => {
  return httpClient.put(`/categories/${id}`, data);
};

export const remove = id => {
  return httpClient.delete(`/categories/${id}`);
};