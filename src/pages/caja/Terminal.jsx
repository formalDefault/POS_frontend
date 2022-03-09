import React, { useState, useContext } from 'react'; 
import { FaSearch } from "react-icons/fa"; 
import Componentes from '../../Componentes';
import { ContextStates } from '../../Context' 

const TableProductsRow = (props) => {
    return(
        <div data-aos="fade-up" name="Rows" >
             <div className=" border-b border-gray-200 shadow-md p-2 my-4 flex justify-between cursor-pointer hover:shadow-xl transition duration-600">
                 <div className="text-left pl-2 w-9/12"><h1>{props.Producto}</h1></div>
                 <div className="text-center w-11/12"><h1>{props.Descripcion}</h1></div>
                 <div className="text-center w-10/12"><h1>{props.Precio}</h1></div>
                 <div className="text-right pr-4 w-9/12"><h1>{props.Cantidad}</h1></div>
             </div>
         </div> 
    )
}

const Terminal = () => { 
    const [clientes, setClient] = useState(false);
    const { stateModal, setStateModal } = useContext(ContextStates);    
    
    const showClients = () => {
        setClient(current => !current);
        setStateModal(true)
    }

    return (
        <div> 
            <div className="text-4xl text-center mb-6 mt-2">
                <h1>Terminal de ventas</h1>
            </div>
            <div className="px-8 w-10/12 m-auto py-2 flex justify-between">
                <div className="w-6/12">
                    <div className="mb-4 w-8/12 m-auto">
                        <FaSearch className="text-xl m-1 text-black" />
                        <div className="bg-slate-800 w-full m-auto h-1 rounded-2xl"></div>
                    </div>
                    <div name="tabla_productos" className="border-2 shadow-xl w-full rounded-2xl h-96 xl:h-150 p-8"> 
                        {/* header */}
                        <div name="cabezera_productos" className="border-b sticky z-10 flex justify-between font-bold px-4">
                            <h1>Producto</h1>
                            <h1>Categoria</h1>
                            <h1>Precio</h1>
                            <h1>Cantidad</h1>
                        </div>
                        <div className="overflow-auto overflow-x-hidden h-full "> 
                            {/* rows */}
                            <TableProductsRow Producto="Coca cola" Descripcion="Refresco" Precio="10$" Cantidad="1" />
                            <TableProductsRow Producto="Pepsi" Descripcion="Refresco" Precio="100$" Cantidad="50" />
                        </div>    
                    </div>
                    
                </div>
                <div className="w-5/12">
                    <div data-aos="zoom-in" className="shadow-xl border-2 w-full rounded-2xl h-52 xl:h-80 p-8 "> 
                     {/* Total */}
                        <div className="text-5xl font-bold text-center">
                            <h1>Total</h1>
                        </div>
                        <div className="text-2xl mt-8 font-bold text-center">
                            <h1>$0.00</h1>
                        </div>
                        <div className="absolute bottom-2 xl:bottom-5 w-11/12 ">
                            {
                                clientes ?
                                    (
                                        <div>
                                            <div onClick={showClients} className="bg-orange-600 w-10/12 p-2 m-auto text-center font-bold text-white rounded-xl hover:shadow-xl transition duration-300 cursor-pointer ">Hacer venta por menudeo</div>
                                            <Componentes.Modal mensaje="asd" pregunta="asd" /> 
                                        </div> 
                                    )
                                :
                                    (<div onClick={showClients} className="bg-sky-900 w-10/12 p-2 m-auto text-center font-bold text-white rounded-xl hover:shadow-xl transition duration-300 cursor-pointer ">Hacer venta por mayoreo</div>)
                            } 
                        </div>
                    </div>
                        {
                            clientes ?
                                (<div data-aos="zoom-in-down" className="shadow-xl border-2 w-full rounded-2xl h-52 xl:h-80 p-8 my-4 xl:my-12">
                                    <div className="">
                                        <h1 className="text-5xl font-bold text-center">Cliente</h1>
                                        <div className="text-lg text-black mt-12 m-auto w-7/12" >
                                            <h1 className="text-center">Nombre del cliente:</h1>
                                            <div className="bg-slate-800 w-full h-1 rounded-full mt-8"></div>
                                            <div className="flex">
                                                <h1 className="text-sm mt-2">¿No aparece el cliente?, </h1>
                                                <h1 className="text-sm mt-2 text-blue-600 cursor-pointer"> Registrar nuevo cliente</h1>
                                            </div> 
                                        </div> 
                                    </div>
                                </div> )
                            : (null)
                        }
                        
                      
                </div>
                <div className="text-white absolute bottom-5 w-9/12 flex justify-between">
                    <div class="bg-orange-500 rounded-xl p-2 cursor-pointer hover:rounded-3xl ">
                        Quitar producto
                    </div>
                    <div class="bg-red-500 rounded-xl p-2 cursor-pointer hover:rounded-3xl ">
                        Cancelar venta
                    </div>
                    <div class="bg-green-500 rounded-xl py-2 px-5 cursor-pointer hover:rounded-3xl ">
                        Cobrar
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
