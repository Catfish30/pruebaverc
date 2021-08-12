import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router'
import { crearCurso,subirArchivo } from '../services/cursosService'
import FormCurso from '../components/FormCurso'
import Swal from 'sweetalert2'

let imagen;

export default function CrearCursoView() {

    const [value,setValue] = useState({
        curso_nombre:'',
        curso_docente:''
    })

    const history = useHistory()

    const actualizarInput = (e) => {
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            const urlArchivo = await subirArchivo(imagen)
            await crearCurso({...value,curso_imagen: urlArchivo})    
            await Swal.fire({
                icon:'success',
                title:'Curso Creado',
                showConfirmButton:false,
                timer:2500
            })
            history.push('/admin')
        } catch (error) {
            console.error(error)
        }
    }

    const manejarImagen = (e) => {
        e.preventDefault()
        imagen = e.target.files[0]
    }



    return (
        <div className="container p-4" style={{minHeight:'74vh'}}>
            <div className="row justify-content-center">
                <div>
                <h1 className="py-3 text-center" >Crear Curso</h1>
                    <FormCurso value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit} manejarImagen={manejarImagen} />
                </div>
            </div>
        </div>
    )
}
