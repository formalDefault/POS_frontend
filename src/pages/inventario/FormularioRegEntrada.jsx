import React, { useContext, useEffect, useState } from 'react'; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaTimesCircle, FaArrowRight } from "react-icons/fa"; 
import { NavLink, } from "react-router-dom";   
import { ContextStates } from "../../Context";
import Axios from 'axios';    
  
 
const Campos = (props) => {
    return(
        <div className=" my-4">
            <label className="font-bold text-sm">{props.label}:</label>
            <Field name={props.name} id={props.name} placeholder={props.placeholder} className="focus:border-sky-700 bg-white w-full border-b-4 border-slate-700 outline-none p-2"/>
            <ErrorMessage name={props.name} component={() => (<div className="text-red-500">{props.err}</div>)}/>
        </div> 
    )
}

const Formulario = () => { 
  const { Proveedores, setProveedores, API } = useContext(ContextStates);   
  const [stateForm, setStateForm] = useState(true)
  const [titulo, setTitulo] = useState('Agregar nueva entrada de productos')
  useEffect(() => {
    Axios.get(`${API}/api/getProveedores`)
    .then((response) => { 
      setProveedores(response.data)  
    }) 
    .catch((error) => {console.log(error);})
  }, []);
    
  return(
    <div> 
        <Formik
        //valores del formulario
        initialValues={{
            proveedor: "", 
            descripcion: "",
            totalCompra: "",
            producto: "",
            cantidad: ""
        }}

        //validacion de errores
        validate= {(values) => {
            let errors = {}; 
            
            if(!values.proveedor) errors.proveedor = "Seleccione a un proveedor"
            if(!values.totalCompra) errors.totalCompra = "Ingrese el total de la compra"
            if(!values.producto) errors.producto = "Seleccione un producto"
            if(!values.cantidad) errors.cantidad = "Ingrese la cantidad del producto"
            
            return errors;
        }}

        onSubmit={(valores) => { 
            //logica para registrar entradas de productos
            console.log(valores) 
        }}
        >
        {( { errors } ) => (
            <div className="">   
                <div  data-aos="fade-up" className="bg-white border border-gray-300 m-auto w-4/12 h-full rounded-2xl p-5 shadow-xl " >
                    <div className="flex justify-between ">
                        <div></div>
                        <div className=" text-3xl font-bold text-center">{titulo}</div>
                        <div className="cursor-pointer">
                            <NavLink to="/inventario/stock" className="cursor-pointer">
                                <div className="text-2xl text-red-600">
                                    <FaTimesCircle />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <Form name="Inputs" className="py-4 h-auto">
                        {
                            stateForm ? 
                            (
                                <div>
                                    {/* <Campos placeholder="Proveedor" label="Proveedor" name="proveedor" err={errors.proveedor} /> */}
                                    {/* <label className="font-bold text-sm">Proveedor: </label> */}
                                    {/* <Field as="select" name="proveedor" className="bg-white border-b-4 border-slate-700 w-full outline-none cursor-pointer focus:border-sky-700">
                                        {
                                            Proveedores.map(i => {
                                                return(
                                                    <option value={i.nombre} key={i.id}>{i.nombre}</option>
                                                )   
                                            })
                                        }
                                    </Field> */}
                                    <Campos placeholder="Descripcion (opcional)" label="Descripcion" name="descripcion" err={errors.descripcion} /> 
                                    <Campos placeholder="Total" label="Total" name="totalCompra" err={errors.totalCompra} />  
                                    <div  className="flex justify-between py-2 text-white text-xl mt-8" >
                                        <div></div>
                                        <button onClick={() => {setStateForm(current => !current); setTitulo('Detalles de reabastecimiento') } } className="py-4 px-4 rounded-full bg-sky-700"><FaArrowRight /> </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <Campos placeholder="Producto" label="Producto" name="producto" err={errors.producto} />
                                    <Campos placeholder="Cantidad" label="Cantidad" name="cantidad" err={errors.cantidad} />  
                                    <div name="btnGuardar" className="flex justify-between py-2 text-white text-xl mt-8" >
                                        <div></div>
                                        <button type="submit" className="py-2 px-4 rounded-lg bg-sky-700">Guardar </button>
                                    </div>  
                                </div>
                            )
                        } 
                    </Form>
                </div>
            </div>
        )}
        </Formik>
    </div>
  )

  };
 

export default Formulario;
