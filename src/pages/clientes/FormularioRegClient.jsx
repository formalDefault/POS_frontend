import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaTimesCircle } from "react-icons/fa"; 
import { NavLink, } from "react-router-dom";   
  
 
const Campos = (props) => {
    return(
        <div className=" my-4">
            <label className="font-bold text-sm">{props.label}:</label>
            <Field type="text" name={props.name} id={props.name} value={props.value} placeholder={props.placeholder} className="focus:border-sky-700 bg-white w-full border-b-4 border-slate-700 outline-none p-2"/>
            <ErrorMessage name={props.name} component={() => (<div className="text-red-500">{props.err}</div>)}/>
        </div> 
    )
}

const Formulario = () => { 
    
  return(
    <div> 
        <Formik
        //valores del formulario
        initialValues={{
            email: "",
            nombre: "",
            direccion: "",
            telefono: ""
        }}

        //validacion de errores
        validate= {(values) => {
            let errors = {};
            
            if (!values.nombre) 
            {
            errors.nombre = "Ingrese el nombre del cliente";
            }  
            if (!values.telefono) 
            {
            errors.telefono = "Ingrese el telefono del cliente";
            }  
            if (!values.direccion) 
            {
            errors.direccion = "Ingrese la direccion del cliente";
            }  
            if (!values.email) 
            {
            errors.email = "Ingrese un correo electronico";
            }  else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Correo electronico invalido';
            }

            return errors;
        }}

        onSubmit={(valores) => { 
            //logica para registro de clientes
            console.log(valores) 
        }}
        
        >
        {( { errors } ) => (
            <div data-aos="fade-right" className="">
                <div className="bg-white border border-gray-300 m-auto w-4/12 h-full rounded-2xl p-5 shadow-xl " >
                    <div className="flex justify-between ">
                        <div></div>
                        <div className=" text-3xl font-bold text-center">Registro de clientes </div>
                        <div className="cursor-pointer">
                            <NavLink to="/clientes/listaClientes" className="cursor-pointer">
                                <div className="text-2xl text-red-600">
                                    <FaTimesCircle />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <Form name="Inputs" className="py-4 h-auto">
                        <Campos placeholder="Nombre del cliente" label="Nombre" name="nombre" err={errors.nombre} />
                        <Campos placeholder="Telefono del cliente" label="Telefono" name="telefono" err={errors.telefono} />
                        <Campos placeholder="Direccion del cliente" label="Direccion" name="direccion" err={errors.direccion} />
                        <Campos placeholder="Email del cliente" label="Email" name="email" err={errors.email} />

                        <div name="btnGuardar" className="flex justify-between py-2 text-white text-xl mt-8" >
                            <div></div>
                            <button type="submit" className="py-2 px-4 rounded-lg bg-sky-700">Guardar </button>
                        </div>
                    </Form>
                </div>
            </div>
        )}
        </Formik>
    </div>
  )

  };
 

export default Formulario;
