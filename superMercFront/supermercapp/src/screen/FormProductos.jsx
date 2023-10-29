import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  createProductos,
  deleteProductos,
  updateProductos,
  getProducto,
} from "../api/productos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function FormProductos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onsubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProductos(params.id, data);
      toast.success("Producto actualizado correctamente.", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    } else {
      await createProductos(data);
      toast.success("Producto creado correctamente.", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
        },
      });
    }
    navigate("/"); //No importa si esta creando o editando, siempre manda al listado.
  });

  useEffect(() => {
    async function loadProducto() {
      if (params.id) {
        const {
          data: { nombre, precio, descripcion },
        } = await getProducto(params.id);
        setValue("nombre", nombre);
        setValue("precio", precio);
        setValue("descripcion", descripcion);
      }
    }
    loadProducto();
  }, []);
  return (
    <div className="max-x-xl mx-auto">
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.nombre && <span>El campo nombre es requerido</span>}
        <input
          type="number"
          placeholder="Precio del producto"
          {...register("precio", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.precio && <span>El campo precio es requerido</span>}
        <textarea
          cols="30"
          rows="3"
          placeholder="Descripcion del producto"
          {...register("descripcion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></textarea>
        {errors.descripcion && <span>El campo descripcion es requerido</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w48 mt-3"
            onClick={async () => {
              const aceptado = window.confirm(
                "Estas seguro que quieres eliminar?"
              );
              if (aceptado === true) {
                await deleteProductos(params.id);
                toast.success("Producto eliminado correctamente.", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "white",
                  },
                });
                navigate("/productos-list");
              }
            }}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
