import { useNavigate } from "react-router-dom";

export function ProductoCard({ item }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/productos/${item.id}`);
      }}>
      <h1 className="font-bold uppercase">Nombre: {item.nombre}</h1>
      <div className="text-slate-400">Precio: {item.precio} Gs.</div>
      <div className="text-slate-400">Descripcion: {item.descripcion}</div>
    </div>
  );
}
