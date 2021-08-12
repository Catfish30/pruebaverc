import React from 'react'
import {useRef} from 'react'


export default function FormCurso({value,actualizarInput,manejarSubmit,manejarImagen}) {

    const inputFile = useRef()


    return (
        <div className="row justify-content-center">
            <div className="col-4">
                <form onSubmit={(e) => {manejarSubmit(e)}}>
                    <div className="mb-3">
                        <label className="form-label">
                            Nombre Curso
                        </label>
                        <input type="text" className="form-control" name="curso_nombre" value={value.curso_nombre} onChange={(e) => {actualizarInput(e)}}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Nombre Docente
                        </label>
                        <input type="text" className="form-control" name="curso_docente" value={value.curso_docente} onChange={(e) => {actualizarInput(e)}}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Imagen Curso
                        </label>
                        <input type="file" className="form-control" ref={inputFile} onChange={(e) => {manejarImagen(e)}} >
                        </input>
                    </div>

                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
