import React, { useEffect } from 'react';
import './styles/style.css' 
import component from './Componentes' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from 'aos';
import ContextStates from "./Context";    
import "aos/dist/aos.css"; 

const App = () => {
   useEffect(() => {
    Aos.init({ duration: 650 });  
    
  }, []);  
   
  return (
    <div className=""> 
      <ContextStates> 
        <Router> 
          <component.Navbar /> 
          <div className="w-screen h-screen text-black pl-28 py-14">
              <Routes> 
                  <Route path="/" element={<component.Container titulo="Terminal de ventas" btns={[{link: "/", btnText: "Carrito"},{link: "/caja/cortes", btnText: "Corte y arqueo de caja"},{link: "/caja/presupuestos", btnText: "Presupuestos"}]} element={<component.Terminal />} />} />
                  <Route exact path="/inventario/stock" element={<component.Container titulo="Inventario de producto" btns={[{link: "/inventario/stock", btnText: "Inventario"},{link: "/inventario/entradas", btnText: "Detalles de entradas"},{link: "/inventarios/salidas", btnText: "Detalles de salidas"}]} element={<component.Stock />} />} />
                  <Route exact path="/clientes/listaClientes" element={<component.Container titulo="Lista de clientes" btns={[{link: "/clientes/listaClientes", btnText: "Lista de clientes"},{link: "/inventario/regCliente", btnText: "Registrar nuevo cliente"}]} element={<component.Clientes />} />} />
              </Routes>
          </div> 
        </Router>  
      </ContextStates> 
    </div>
  );
}

export default App;
