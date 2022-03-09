import React from 'react'; 
import Terminal from './Terminal';
import ContextStates from "../../Context";   

const contenedor = () => {
    let styleSubBtn = " hover:bg-white hover:text-black py-2 cursor-pointer px-8 transition duration-300 font-bold "
    return (
        <div> 
        <ContextStates>
            <div name="subMenu" className="bg-slate-800	 text-white flex">
                <div className={styleSubBtn}>Carrito</div>
                <div className={styleSubBtn}>Corte y arqueo de caja</div>
                <div className={styleSubBtn}>Presupuesos</div>
                <div className={styleSubBtn}>Gastos</div>
            </div>
             <Terminal /> 
        </ContextStates> 
        </div>
    );
}

export default contenedor;
