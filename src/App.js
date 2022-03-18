import React, { useEffect } from 'react';
import './styles/style.css' 
import component from './Componentes' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from 'aos';
import ContextStates from "./Context";    
import "aos/dist/aos.css"; 
import Terminal from './pages/caja/Terminal';
 

const App = () => { 
   useEffect(() => {
    Aos.init({ duration: 600 });  
    
  }, []);  
   
  return (
    <div className=""> 
      <ContextStates> 
        <Router> 
          <component.Navbar /> 
          <div className="w-screen h-screen text-black pl-28 py-14">
              <Routes> 
                  <Route 
                    path="/" 
                    element={<component.Container 
                    titulo="Terminal de ventas" 
                    btns={[
                      {link: "/", btnText: "Carrito"},
                      {link: "/caja/cortes", btnText: "Corte y arqueo de caja"},
                      {link: "/caja/presupuestos", btnText: "Presupuestos"}]
                    } 
                    element={<Terminal />} />} 
                  />
                  <Route 
                    exact 
                    path="/inventario/stock" 
                    element={<component.Container 
                      titulo="Inventario de producto" 
                      btns={[
                        {link: "/inventario/stock", btnText: "Inventario"},
                        {link: "/inventario/entradas", btnText: "Detalles de entradas"},
                        {link: "/inventarios/salidas", btnText: "Detalles de salidas"}
                      ]} 
                      element={<component.Stock />} />
                    } 
                  />
                  <Route 
                    exact 
                    path="/inventario/stock/detalles/*" 
                    element={<component.Container 
                      titulo="Inventario de producto" 
                      btns={[
                        {link: "/inventario/stock", btnText: "Inventario"},
                        {link: "/inventario/entradas", btnText: "Detalles de entradas"},
                        {link: "/inventarios/salidas", btnText: "Detalles de salidas"}
                      ]} 
                      element={<component.ProductDetails />} />
                    } 
                  />
                  <Route 
                    exact 
                    path="/inventario/regProduct" 
                    element={<component.Container 
                      titulo="" 
                      btns={[
                        {link: "/inventario/stock", btnText: "Inventario"},
                        {link: "/inventario/entradas", btnText: "Detalles de entradas"},
                        {link: "/inventarios/salidas", btnText: "Detalles de salidas"}
                      ]} 
                      element={<component.FormularioRegProduct />} />
                    } 
                  />
                  <Route 
                    exact 
                    path="/inventario/regEntrada" 
                    element={<component.Container 
                      titulo="" 
                      btns={[
                        {link: "/inventario/stock", btnText: "Inventario"},
                        {link: "/inventario/entradas", btnText: "Detalles de entradas"},
                        {link: "/inventarios/salidas", btnText: "Detalles de salidas"}
                      ]} 
                      element={<component.FormularioRegEntrada />} />
                    } 
                  />
                  <Route 
                    exact 
                    path="/clientes/listaClientes" 
                    element={
                      <component.Container 
                        titulo="Lista de clientes" 
                        btns={[
                          {link: "/clientes/listaClientes", btnText: "Lista de clientes"}  
                        ]} 
                        element={<component.Clientes />} 
                      />
                    } 
                  />
                  <Route 
                    exact 
                    path="/clientes/regCliente" 
                    element={
                      <component.Container 
                        titulo="" 
                        btns={[
                          {link: "/clientes/listaClientes", btnText: "Lista de clientes"} 
                        ]} 
                        element={<component.FormularioRegClient />} 
                      />
                    } 
                  />
                  <Route 
                    exact 
                    path="/clientes/listaClientes/detalles/*" 
                    element={
                      <component.Container 
                        titulo="Lista de clientes" 
                        btns={[
                          {link: "/clientes/listaClientes", btnText: "Lista de clientes"},
                          {link: "/clientes/regCliente", btnText: "Registrar nuevo cliente"}
                        ]} 
                        element={<component.ClientDetails />} 
                      />
                    } 
                  />
              </Routes>
          </div> 
        </Router>  
      </ContextStates> 
    </div>
  );
}

export default App;
