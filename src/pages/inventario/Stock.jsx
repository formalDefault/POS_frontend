import React, {useContext, useEffect} from 'react'; 
import { FaSearch } from "react-icons/fa"; 
import { ContextStates } from "../../Context";
import Axios from 'axios';    

const TableProductsRow = (props) => {
    return(
        <div name="Rows" >
             <div className=" border-b border-gray-200 shadow-md p-2 my-4 grid grid-cols-6 cursor-pointer hover:shadow-xl transition duration-600">
                 <div className="text-center"><h1>{props.Codigo}</h1></div>
                 <div className="text-center"><h1>{props.Producto}</h1></div>
                 <div className="text-center"><h1>{props.Descripcion}</h1></div>
                 <div className="text-center"><h1>{props.Precio}</h1></div>
                 <div className="text-center"><h1>{props.PrecioMayoreo}</h1></div>
                 <div className="text-center"><h1>{props.Cantidad}</h1></div>
             </div>
         </div> 
    )
}

const Stock = () => {
    const { productosStock, setProductosStock, API } = useContext(ContextStates);  
      
    useEffect(() => {
        Axios.get(`${API}/api/getProducts`)
        .then((response) => { 
          setProductosStock(response.data) 
        }) 
        .catch((error) => {console.log(error);})
      }, []);

    return (
        <div data-aos="fade-up" name="tabla_productos" className="border-2 shadow-xl w-10/12 m-auto rounded-2xl h-96 xl:h-150 p-8"> 
            {/* headerTable */}
            <div className="mb-4 w-4/12 m-auto">
                <FaSearch className="text-xl m-1 text-black" />
                <div className="bg-slate-800 w-full m-auto h-1 rounded-2xl"></div>
            </div>
            <div name="cabezera_productos" className="border-b sticky z-10 grid grid-cols-6 font-bold px-4">
                <div className="text-center">Codigo</div>
                <div className="text-center">Producto</div>
                <div className="text-center">Descripcion</div>
                <div className="text-center">Precio menudeo</div>
                <div className="text-center">Precio mayoreo</div> 
                <div className="text-center">Cantidad</div>
            </div>
            <div className=" overflow-auto overflow-x-hidden h-140 "> 
                {/* rows */}
                {
                    productosStock.map(element => <TableProductsRow key={element.id} Codigo={element.codigo} Producto={element.nombre} Descripcion={element.descricion} Precio={element.retail} PrecioMayoreo={element.mayoreo} Cantidad="1" />)
                } 
            </div>    
        </div> 
    );
}

export default Stock;
