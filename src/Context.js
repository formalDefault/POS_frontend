import React, { useState } from 'react'
export const ContextStates = React.createContext();

function Estados(props) {
    const [stateModal, setStateModal] = useState(true); 
    const [stateClientes, setStateClientes] = useState(true); 
     
    return (
        <ContextStates.Provider value={
            {
                stateModal, setStateModal,
                stateClientes, setStateClientes
            }}>
            {props.children}
        </ContextStates.Provider>
    )
}

export default Estados;