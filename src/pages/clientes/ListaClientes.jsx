import React, {useEffect, useContext} from 'react';  
import { FaSearch, FaPlus, FaShoppingCart } from "react-icons/fa"; 
import { ContextStates } from "../../Context";
import { NavLink } from "react-router-dom";  
import Axios from 'axios';    

const TableProductsRow = (props) => {
    return(
        <div name="Rows" >
             <NavLink to={props.urlDetails} className=" border-b border-gray-200 shadow-md p-2 my-4 grid grid-cols-4 cursor-pointer hover:shadow-xl transition duration-600">
                 <div className="text-center"><h1>{props.nombre}</h1></div>
                 <div className="text-center"><h1>{props.tel}</h1></div>
                 <div className="text-center"><h1>{props.direccion}</h1></div>
                 <div className="text-center"><h1>{props.email}</h1></div>
             </NavLink>
         </div> 
    )
}

const Stock = () => {
    
    const { listaClientes, API, setListaClientes } = useContext(ContextStates);   

    useEffect(() => {
        Axios.get(`${API}/api/getClients`)
        .then((response) => { 
            setListaClientes(response.data) 
        }) 
        .catch((error) => {console.log(error);})
      }, []);


    return (
        <div>
            <div data-aos="fade-up" name="tabla_productos" className="border-2 shadow-xl w-10/12 m-auto rounded-2xl h-96 xl:h-150 p-8"> 
                {/* headerTable */}
                <div className="mb-4 w-4/12 m-auto">
                    <FaSearch className="text-xl m-1 text-black" />
                    <div className="bg-slate-800 w-full m-auto h-1 rounded-2xl"></div>
                </div>
                <div name="cabezera_productos" className="border-b sticky z-10 grid grid-cols-4 font-bold px-4">
                    <div className="text-center">Nombre</div>
                    <div className="text-center">Telefono</div>
                    <div className="text-center">Direccion</div>
                    <div className="text-center">Email</div> 
                </div>
                <div className=" overflow-auto overflow-x-hidden h-140 "> 
                    {/* rows */}
                    {
                        listaClientes.map(element => 
                        {
                            var URL = `detalles?id=${element.id}`
                            return (
                                <TableProductsRow urlDetails={URL} key={element.id} nombre={element.nombre} tel={element.telefono} direccion={element.direccion} email={element.email} />
                            ) 
                        })
                    }
                </div>     
            </div> 
            <div name="botones" className="">
                <NavLink to="/clientes/regCliente" className="z-50 fixed bottom-12 right-14 bg-emerald-500 text-white rounded-full px-3 py-3 cursor-pointer "> 
                     <FaPlus className="text-2xl m-auto " />  
                </NavLink>   
            </div>
        </div> 
    );
}

export default Stock;
