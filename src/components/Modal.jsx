import React, {useContext} from 'react';
import { RiCloseCircleFill } from "react-icons/ri"; 
import { ContextStates } from '../Context'

const Modal = (props) => { 
    const { stateModal, setStateModal } = useContext(ContextStates);    
    const { setOpcSelectModal } = useContext(ContextStates);    

    const closeModal = () => setStateModal(current => !current)
    const aceptar = () => 
    {
        setOpcSelectModal(current => !current)
        setStateModal(current => !current)
    }
    const cancelar = () => 
    {   
        setStateModal(current => !current)
    }

    return (
        <div>
            {
                stateModal ? 
                    <div className="fixed z-50 w-full h-full flex justify-content">
                        <div data-aos="fade-down" className="ml-150 mt-52 bg-white w-4/12 h-72 rounded-2xl p-4 border-2 shadow-xl ">
                            <div className="w-full flex justify-between py-2"> 
                                <div className="">
                                    <h1>{props.mensaje}</h1>
                                </div>
                                <RiCloseCircleFill onClick={closeModal} className="text-red-600 cursor-pointer text-3xl"/> 
                            </div>
                            <div className="h-72">
                                <div className="text-center font-bold text-3xl mt-5">
                                    <h1>{props.pregunta}</h1>
                                </div>
                                <div name="botones" className=" text-2xl w-11/12 absolute bottom-10 flex justify-between pl-12 pr-6">
                                    <div onClick={aceptar} className="bg-green-600 text-white px-4 py-1 rounded-lg cursor-pointer hover:shadow-xl transition duration-500 ">
                                        <h1>Aceptar</h1>
                                    </div>
                                    <div onClick={cancelar} className="bg-red-600 text-white px-4 py-1 rounded-lg cursor-pointer hover:shadow-xl transition duration-500 ">
                                        <h1>Cancelar</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                : null
            }
        </div>
    );
}

export default Modal;
