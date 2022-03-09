import React, { useEffect } from 'react';
import './styles/style.css' 
import component from './Componentes' 
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
        <component.Navbar />  
        <div className="w-screen h-screen text-black pl-28 py-14">
        <component.ContenedorCaja />
        </div>
      </ContextStates> 
    </div>
  );
}

export default App;
