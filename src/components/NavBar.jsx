import React, { useState, useEffect } from 'react'; 
import { FaUserCircle, FaCashRegister, FaBoxes, FaUsers, FaTruckMoving } from "react-icons/fa";  


const Header = (props) => { 
     
    return(
        <div>
            <div className="bg-slate-800	 w-screen px-10 py-2 flex justify-between ">
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

const BtnsNavBar = (props) => {  
    var styleBtn = "px-4 py-4 text-white text-center cursor-pointer hover:bg-white hover:text-black hover transition duration-300 " ;
    var styleBtnSelect = "px-4 py-4 bg-white text-black text-center cursor-pointer hover:bg-white hover:text-black transition duration-500 ";   
    return (
        <div className="">
            <div className={styleBtn}>
                <props.icon className=" text-5xl m-auto" />
                <h1 className="text-bold my-1">{props.value}</h1>     
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
 
    return (
        <div> 
            <div className="bg-slate-800 h-screen absolute w-28 text-white  ">
                <Header timer={timer} />
                <div className="pt-8 mt-1">
                    <BtnsNavBar value="Caja" icon={FaCashRegister} />    
                    <BtnsNavBar value="Inventario" icon={FaBoxes} />    
                    <BtnsNavBar value="Clientes" icon={FaUsers} />   
                    <BtnsNavBar value="Proveedor" icon={FaTruckMoving} /> 
                </div>
            </div>
        </div>
    );
}

export default Navbar;
