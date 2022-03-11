import React, { useState, useEffect, useContext } from 'react'; 
import { FaUserCircle, FaCashRegister, FaUserTie, FaSignOutAlt, FaBoxes, FaUsers, FaTruckMoving } from "react-icons/fa";   
import { NavLink } from "react-router-dom"; 
import { ContextStates } from "../Context";  
 

const Header = (props) => { 
     
    return(
        <div>
            <div className="bg-slate-800 w-screen px-10 py-2 flex justify-between ">
                <div className="flex justify-between"> 
                    <FaUserCircle className="text-4xl cursor-pointer" />
                    <h1 className="p-2">Alejandro Hurtado Lara</h1>
                </div>
                <div className="text-xl font-bold py-2">
                    TCS México
                </div>
                <div className="text-xl py-2">
                    {props.timer}
                </div>
            </div>
        </div> 
    )
}
   
const Navbar = () => { 
    const [timer, setTimer] = useState();
    useEffect(() => {
        const timer = setInterval(() => {
            let hora = new Date().toLocaleTimeString();  
            setTimer(hora);
        }, 1000);
        return () => clearInterval(timer);
      }, []);

    var styleBtn = "px-4 py-4 text-white bg-slate-800 text-center cursor-pointer hover:bg-slate-600 hover transition duration-300 block" ;
    var styleBtnLogout = "px-4 py-2text-white bg-slate-800 text-center cursor-pointer hover:bg-slate-600 hover transition duration-300 absolute bottom-0 block" ;
    var styleBtnSelect = " px-4 py-4 bg-white text-black text-center cursor-pointer hover:bg-white hover:text-black transition duration-500 block";  
    const { seccion, setSeccion } = useContext(ContextStates);    
 

    return (
        <div> 
            <div className="bg-slate-800 h-screen absolute w-28 text-white  ">
                <Header timer={timer} />
                <div className="pt-8 mt-1">   
                    <NavLink onClick={() => setSeccion('caja')} to="/" className={seccion == 'caja' ? styleBtnSelect : styleBtn} >
                        <FaCashRegister className=" text-5xl m-auto" />
                        <h1 className="text-bold my-1">Caja</h1> 
                    </NavLink> 
                    <NavLink onClick={() => setSeccion('inventario')} to="/inventario/stock" className={seccion == 'inventario' ? styleBtnSelect : styleBtn} >
                        <FaBoxes className=" text-5xl m-auto" />
                        <h1 className="text-bold my-1">Inventario</h1>     
                    </NavLink> 
                    <NavLink onClick={() => setSeccion('clientes')} to="/clientes/listaClientes" className={seccion == 'clientes' ? styleBtnSelect : styleBtn}>
                        <FaUsers className=" text-5xl m-auto" />
                        <h1 className="text-bold my-1">Clientes</h1>     
                    </NavLink> 
                    <NavLink onClick={() => setSeccion('proveedor')} to="/proveedor" className={seccion == 'proveedor' ? styleBtnSelect : styleBtn}>
                        <FaTruckMoving className=" text-5xl m-auto" />
                        <h1 className="text-bold my-1">Proveedor</h1>     
                    </NavLink> 
                    <NavLink onClick={() => setSeccion('personal')} to="/personal" className={seccion == 'personal' ? styleBtnSelect : styleBtn}>
                        <FaUserTie className=" text-5xl m-auto" />
                        <h1 className="text-bold my-1">Personal</h1>     
                    </NavLink> 
                    <NavLink onClick={() => setSeccion('logout')} to="/logout" className={ styleBtnLogout }>
                        <FaSignOutAlt className=" text-5xl m-auto" />
                        <h1 className="text-bold my-1">Cerrar sesion</h1>     
                    </NavLink> 
                </div>
            </div>
        </div>
    );
}

export default Navbar;
