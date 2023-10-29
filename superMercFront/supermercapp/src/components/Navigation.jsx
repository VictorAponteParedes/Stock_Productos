import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/productos-list">
        <h2 className="font-bold text-3xl mb-4">Productos app</h2>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to="/productos-create">Crear producto</Link>
      </button>
    </div>
  );
}
