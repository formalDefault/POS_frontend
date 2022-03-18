import React, {useContext, useEffect} from 'react'; 
import { FaSearch, FaPlus, FaShoppingCart } from "react-icons/fa"; 
import { GoSettings } from "react-icons/go"; 
import { NavLink } from "react-router-dom"; 
import { ContextStates } from "../../Context";
import Axios from 'axios';    


const TableProductsRow = (props) => {
    return(
        <NavLink to={props.urlDetails} name="Rows" >
             <div className=" border-b border-gray-300 px-2 py-4  grid grid-cols-7 cursor-pointer hover:shadow-xl transition duration-600">
                 <div className="text-center"><h1>{props.Codigo}</h1></div>
                 <div className="text-center"><h1>{props.Producto}</h1></div>
                 <div className="text-center"><h1>{props.Descripcion}</h1></div>
                 <div className="text-center"><h1>{props.Precio}</h1></div>
                 <div className="text-center"><h1>{props.PrecioMayoreo}</h1></div>
                 <div className="text-center"><h1>{props.Categoria}</h1></div>
                 <div className="text-center"><h1>{props.Cantidad}</h1></div>
             </div>
         </NavLink> 
    )
}

const Stock = () => {
    const { productosStock, setProductosStock, API } = useContext(ContextStates);   
    
    useEffect(() => {
        Axios.get(`${API}/api/getStock`)
        .then((response) => { 
          setProductosStock(response.data)  
        }) 
        .catch((error) => {console.log(error);})
      }, []);

    return (
        <div>
            <div data-aos="fade-up" name="tabla_productos" className="border-2 shadow-xl w-10/12 m-auto rounded-2xl h-96 xl:h-150 p-8"> 
                {/* headerTable */}
                <div className="flex justify-between">
                    <div></div>
                    <div className="mb-4 w-4/12 ">
                        <FaSearch className="text-xl m-1 text-black" />
                        <div className="bg-slate-800 w-full m-auto h-1 rounded-2xl"></div>
                    </div> 
                    <div>
                        <div className="text-center text-black bg-white border-2 p-2 rounded-xl cursor-pointer hover:shadow-xl transition duration-600">
                            <GoSettings className="text-2xl "/>
                        </div> 
                    </div>
                </div> 
                <div name="Tabla">
                    <div name="cabezera_productos" className="border-b sticky z-10 grid grid-cols-7 font-bold px-4">
                        <div className="text-center">Codigo</div>
                        <div className="text-center">Producto</div>
                        <div className="text-center">Descripcion</div>
                        <div className="text-center">Precio menudeo</div>
                        <div className="text-center">Precio mayoreo</div> 
                        <div className="text-center">Categoria</div> 
                        <div className="text-center">Cantidad</div>
                    </div>
                    <div className=" overflow-auto overflow-x-hidden h-140 "> 
                        {/* rows */}
                        { 
                            productosStock.map(element => {
                                var URL = `detalles?id=${element.id}`
                                return( 
                                    <TableProductsRow 
                                        urlDetails={URL} 
                                        key={element.id} 
                                        Categoria={element.categoria} 
                                        Codigo={element.codigo} 
                                        Producto={element.producto} 
                                        Descripcion={element.descricion} 
                                        Precio={element.retail} 
                                        PrecioMayoreo={element.mayoreo} 
                                        Cantidad={element.Existencias} 
                                    /> 
                                )
                            })
                        }  
                    </div>   
                </div>  
            </div>
            <div name="botones" className="">
                <NavLink to="/inventario/regProduct" className="z-50 fixed bottom-12 right-14 bg-emerald-500 text-white rounded-full px-3 py-3 cursor-pointer "> 
                    <FaPlus className="text-2xl m-auto " />  
                </NavLink>  
                <NavLink to="/inventario/regEntrada" className="z-50 fixed bottom-12 right-32 bg-amber-500 text-white rounded-full px-3 py-3 cursor-pointer "> 
                    <FaShoppingCart className="text-2xl m-auto " />  
                </NavLink>  
            </div>
        </div> 
    );
}

export default Stock;
