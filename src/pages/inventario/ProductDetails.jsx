import React, { useContext, useState } from 'react';
import { FaTrashAlt, FaSave, FaPencilAlt, FaTimesCircle } from "react-icons/fa"; 
import { NavLink, useLocation } from "react-router-dom";  
import { ContextStates } from "../../Context";
  
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Productdetails = () => { 
    let query = useQuery();
    const { productosStock } = useContext(ContextStates);  
    const [ Edit, setEdit ] = useState(false)
    const producto = () =>  productosStock.filter(producto => producto.id == query.get('id'))  
    var detalles = producto()

    const Campos = (props) => {
        return (
            <div className=" my-4">
                <label className="font-bold text-sm">{props.placeholder}:</label>
                <input type="text" disabled={!Edit} value={props.value} className="bg-white w-full border-b-4 border-slate-700 outline-none p-2"/>
            </div>
        )
    }

    return (
        <div>
            <div data-aos="fade-right" className="">
                {
                    detalles.map(detalle => {
                        return(
                            <div key={detalle.id} className="bg-white border border-gray-300 m-auto w-4/12 h-full rounded-2xl p-5 shadow-xl ">
                                
                                <div className="flex justify-between ">
                                    <div></div>
                                    <div className=" text-3xl font-bold text-center">
                                        {detalle.producto}
                                    </div>
                                    <NavLink to="/inventario/stock" className="cursor-pointer">
                                        <div className="text-2xl text-red-600">
                                            <FaTimesCircle />
                                        </div>
                                    </NavLink>
                                </div>
                                <div name="Campos de detalle" className="py-4 h-auto">
                                    <Campos placeholder="Nombre del producto" value={detalle.producto} />
                                    <Campos placeholder="Descripcion del producto" value={detalle.descricion} />
                                    <Campos placeholder="Codigo del producto" value={detalle.codigo} /> 
                                    <div className="grid grid-cols-2 gap-x-12">
                                        <Campos placeholder="Categoria del producto"value={detalle.categoria} />
                                        <Campos placeholder="Costo de compra del producto" value={detalle.costo} />
                                    </div>  
                                    <h1 className="font-bold text-xl text-center">Precios</h1>
                                    <hr/>
                                    <div className="grid grid-cols-2 gap-x-12">
                                        <Campos placeholder="Precio menudeo del producto" value={detalle.retail}  />
                                        <Campos placeholder="Precio mayoreo del producto" value={detalle.mayoreo} />
                                    </div>
                                </div>
                                {
                                    Edit ? 
                                    (
                                        <div onClick={() => setEdit(current => !current)} name="botones_para_editar" className="flex justify-between py-2 text-white text-3xl mt-8">
                                            <button className="p-2 rounded-xl bg-red-500"><FaTrashAlt /></button>
                                            <button className="px-4 rounded-xl bg-red-500 text-2xl">Cancelar</button>
                                            <button className="p-2 rounded-xl bg-sky-500"><FaSave /></button>
                                        </div>
                                    ) :
                                    (
                                        <div onClick={() => setEdit(current => !current)} name="btn_editar" className="flex justify-between py-2 text-white text-3xl mt-8">
                                            <button className="p-2 rounded-xl m-auto bg-sky-700"><FaPencilAlt /></button> 
                                        </div>
                                    )
                                } 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Productdetails;
