import React from 'react'

import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { obtenerNota, editarNota } from "../services/NotaService";
import ModalNotas from '../components/ModalNotas';



export default function NotasView() {

    const [notas,setNota] = useState([])    

    const {id} = useParams()

    const getNotas = async () => {
        try {
            const notasObtenidas = await obtenerNota(id)
            setNota(notasObtenidas)
            
        } catch (error) {
            console.log(error)
        }   

    }

    useEffect( () => {
        getNotas()
    },[])



    // ----------------------------------

    const [value, setValue] = useState({
        nota_1:0,
        nota_2:0,
        nota_3:0,
        nota_4:0,
    })

     
    const getNota = async () => {
        try {
            const notaObtenida = await obtenerNota(id)
            setValue({...notaObtenida})
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        getNota()
    },[])


    const actualizarInput = (e) => {
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
        
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {

            await editarNota(value,id)
            await getNotas()
        
        } catch (error) {
            console.error(error)
        }
    }

    const promedio = () => {
        let nota1 = parseInt(notas.nota_1)
        let nota2 = parseInt(notas.nota_2)
        let nota3 = parseInt(notas.nota_3)
        let nota4 = parseInt(notas.nota_4)
        const promedio1 = (nota1 + nota2 + nota3 +nota4)/4
        return promedio1
    }

// --------------------------------



    return (
        <div className='container p-4' style={{minHeight:'74vh'}}>
           <h2 className="text-center">Notas</h2>
           <div className="row justify-content-center" >
            <div className="col-5" >
                <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Nota 1 </td>
                                <td> {notas.nota_1} </td>
                            </tr>
                            <tr>  
                                <td> Nota 2 </td>
                                <td> {notas.nota_2} </td>
                            </tr>
                            <tr>
                                <td> Nota 3 </td>
                                <td> {notas.nota_3} </td>
                            </tr>
                            <tr>
                                <td> Nota 4 </td>
                                <td> {notas.nota_4} </td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 className="py-3">Promedio: {promedio()}</h5>
                    
            </div>
            
            </div>
            <div className="row justify-content-center ">
                
                <div className="col-3">
                    <Link className="btn btn-primary ms-5" to={`/admin`}>
                        Regresar
                    </Link>
                </div>

                <div className="col-3">
                    <ModalNotas value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit}  />
                </div>

            </div>
 
        </div>
    )
}

