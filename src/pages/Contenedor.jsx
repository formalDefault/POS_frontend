import React, { useContext, useEffect } from 'react'; 
import { NavLink } from "react-router-dom"; 
import { ContextStates } from "../Context";  
import Componentes from '../Componentes'; 

const Contenedor = (props) => { 
    let styleSubBtn = " hover:bg-slate-600 py-2 cursor-pointer px-8 transition duration-300 font-bold "
    let styleBtnSelect = "text-black bg-white py-2 cursor-pointer px-8 transition duration-300 font-bold "
    const { stateModal, Modal } = useContext(ContextStates);  
  
    return (
        <div>  
            { stateModal ? <Componentes.Modal mensaje={Modal.mensaje} pregunta={Modal.pregunta} /> : null}
            <div name="subMenu" className="bg-slate-800	mt-1 text-white flex">
                {
                    props.btns.map(i => <NavLink key={i.link} to={i.link} className={({ isActive }) => "" + (isActive ? styleBtnSelect : styleSubBtn)}>{i.btnText}</NavLink>) 
                }  
            </div>
            <div>
                <div className="text-4xl text-center mb-6 mt-2">
                    <h1>{props.titulo}</h1>
                </div>
                <div className=" m-auto py-2 ">
                    {/* <Stock /> */}
                    {props.element}
                </div>
            </div>   
        </div>
    );
}

export default Contenedor;
