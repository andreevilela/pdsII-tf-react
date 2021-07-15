import axios from "axios";

//const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4QGdtYWlsLmNvbSIsImlhdCI6MTYyNjM1Njg1NywiZXhwIjoxNjI2MzU3MTU3fQ.JK5LNgAaFksqIKXzwVd71gfDAdu2mHjxJPEVSecT44aTfphh5Bcq64kpam2rapzTnel4wsbAgNR96oi_eN7XaQ";

const httpClient = axios.create({
  baseURL: "https://projeto-integrador-4.herokuapp.com",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
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

export const getAllUsers = () => {
  return httpClient.get("/users");
};

export const getUser = id => {
  return httpClient.get(`/users/${id}`);
};

export const postUser = data => {
  return httpClient.post("/users", data);
};

export const putUser = (id, data) => {
  return httpClient.put(`/users/${id}`, data);
};

export const deleteUser = id => {
  return httpClient.delete(`/users/${id}`);
};


export const getAllProduct = () => {
  return httpClient.get("/products");
};

export const getP = id => {
  return httpClient.get(`/products/${id}`);
};

export const createP = data => {
  return httpClient.post("/products", data);
};

export const updateP = (id, data) => {
  return httpClient.put(`/products/${id}`, data);
};

export const removeP = id => {
  return httpClient.delete(`/products/${id}`);
};