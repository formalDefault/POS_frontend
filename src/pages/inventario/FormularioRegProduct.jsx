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
            codigo: "",
            nombre: "",
            descricion: "",
            costo: "",
            retail: "",
            mayoreo: "",
            categoria: "",
        }}

        //validacion de errores
        validate= {(values) => {
            let errors = {};
            
            if (!values.codigo) errors.nombre = "Ingrese el codigo del producto"; 
            if (!values.retail) errors.retail = "Ingrese el precio del producto";  

            return errors;
        }}

        onSubmit={(valores) => { 
            //logica para registro de productos 
            console.log(valores) 
        }}
        
        >
        {( { errors } ) => (
            <div data-aos="fade-right" className="">
                <div className="bg-white border border-gray-300 m-auto w-4/12 h-full rounded-2xl p-5 shadow-xl " >
                    <div className="flex justify-between ">
                        <div></div>
                        <div className=" text-3xl font-bold text-center">Registro de Productos </div>
                        <div className="cursor-pointer">
                            <NavLink to="/inventario/stock" className="cursor-pointer">
                                <div className="text-2xl text-red-600">
                                    <FaTimesCircle />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <Form name="Inputs" className="py-4 h-auto">
                        <Campos placeholder="Codigo del producto" label="Codigo" name="Codigo" err={errors.Codigo} />
                        <Campos placeholder="Nombre del producto" label="Nombre" name="Nombre" err={errors.Nombre} />
                        <Campos placeholder="Descripcion del producto" label="Descripcion" name="Descripcion" err={errors.Descripcion} />
                        <Campos placeholder="Costo del producto" label="Costo" name="Costo" err={errors.Costo} />
                        <Campos placeholder="Precio menudeo del producto" label="Precio de menudeo" name="precioMenudeo" err={errors.precioMenudeo} /> 
                        <Campos placeholder="Precio mayoreo del producto" label="Precio de mayoreo" name="precioMayoreo" err={errors.precioMayoreo} /> 

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
