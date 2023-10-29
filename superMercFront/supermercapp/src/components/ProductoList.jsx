import { useEffect, useState } from "react";
import { getAllProductos } from "../api/productos.api";
import { ProductoCard } from "./ProductoCard";

export function ProductoList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function loadProductos() {
      const response = await getAllProductos();
      setProductos(response.data);
    }
    loadProductos();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {productos.map((item, index) => (
        <ProductoCard item={item} key={index} />
      ))}
    </div>
  );
}
