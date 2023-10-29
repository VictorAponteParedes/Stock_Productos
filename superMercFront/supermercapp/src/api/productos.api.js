import axios from "axios";

const productoApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/productos/",
});

export const getAllProductos = () => productoApi.get("/");

export const getProducto = (id) => productoApi.get(`/${id}/`);

export const createProductos = (productos) => productoApi.post("/", productos);

export const deleteProductos = (id) => productoApi.delete(`/${id}/`);

export const updateProductos = (id, productos) =>
  productoApi.put(`/${id}/`, productos);
