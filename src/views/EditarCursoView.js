import React, { useEffect } from 'react'
import { useState,UseEffect } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerCursoPorId,editarCurso,subirArchivo } from '../services/cursosService'
import FormCurso from '../components/FormCurso'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router'

let imagen

export default function EditarCursoView() {

    const [value,setValue] = useState({
        curso_nombre:'',
        curso_docente:''
    })

    const {id} = useParams()

    const history = useHistory()

    const getCurso = async () => {
        try {
            const cursoObtenido = await obtenerCursoPorId(id)
            setValue({...cursoObtenido})
        } catch (error) {
            console.error(error)
        }
    }

    const actualizarInput = (e) => {
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()

        if(typeof imagen !== undefined){
            const urlArchivo = await subirArchivo(imagen)
            await editarCurso({...value,curso_imagen:urlArchivo},id)
        }else{
            await editarCurso(value,id)
        }
            await Swal.fire({
                icon:'success',
                title:'Curso Actualizado',
                showConfirmButton:false,
                timer:2500
            })
            history.push('/admin')
     

    }

    useEffect(() =>{
        getCurso()
    },[])    


    const manejarImagen = (e) => {
        e.preventDefault()
        imagen = e.target.files[0]
    }



    return (
        <div className="container p-4" style={{minHeight:'74vh'}}>
            <div className="row justify-content-center">
                <div>
                <h1 className="py-3 text-center" >Editar Curso</h1>
                    <FormCurso value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit} manejarImagen={manejarImagen} />
                </div>
            </div>
        </div>
    )
}
