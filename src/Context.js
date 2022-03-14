import React, { useState } from 'react'
export const ContextStates = React.createContext();

function Estados(props) {
    const [stateModal, setStateModal] = useState(false); 
    const [opcSelectModal, setOpcSelectModal] = useState(false); 
    const [seccion, setSeccion] = useState('caja'); 
    const [Modal, setModal] = useState({mensaje: '', pregunta: ''}); 
    const [API, setAPI] = useState('http://localhost:9000')

    //inventario 
    const [productosStock, setProductosStock] = useState([]); 

    //clientes
    const [showTermilaClientes, setShowTermilaClientes] = useState(false); 
    const [listaClientes, setListaClientes] = useState([]); 

    //Terminal 
    const [terminalProducts, setTerminalProducts] = useState([]); 
    const [cantidadesProducto, setCantidadesProducto] = useState([])
    const [terminalRowSelect, setTerminalRowSelect] = useState(0)
     
    return (
        <ContextStates.Provider value={
            {
                stateModal, setStateModal,
                showTermilaClientes, setShowTermilaClientes,
                Modal, setModal,
                opcSelectModal, setOpcSelectModal,
                productosStock, setProductosStock,
                seccion, setSeccion,
                API,
                listaClientes, setListaClientes,
                terminalProducts, setTerminalProducts,
                cantidadesProducto, setCantidadesProducto,
                terminalRowSelect, setTerminalRowSelect
            }}>
            {props.children}
        </ContextStates.Provider>
    )
}

export default Estados;