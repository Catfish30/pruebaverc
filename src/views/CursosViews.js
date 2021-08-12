import React from 'react'
import { useState,useEffect } from 'react'
import { obtenerCursos, eliminarCurso} from '../services/cursosService'
import { Row,Col,Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function CursosViews() {

    const [cursos,setCursos] = useState([])

    const getCursos = async () => {
        try {
            let cursosObtenidos = await obtenerCursos()
            setCursos(cursosObtenidos)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() =>{
        getCursos()
    },[])

   
    const deleteCurso = async (e) => {
        let idObtenido = e.target.id
        try {
            await Swal.fire({
                icon:'warning',
                title:'¿Esta seguro de eliminar el Curso?',
                showConfirmButton:true,
                confirmButtonText:'Si, Eliminar',
                showCancelButton:true,
                cancelButtonText:'No,Cancelar'
            }).then( async (result)=>{
                if(result.isConfirmed){
                    await Swal.fire(
                        'Eliminado!',
                        'El curso fue eliminado.',
                        'success'
                      )
                    await eliminarCurso(idObtenido)
                    getCursos()
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    
    return (

        <div className="container" style={{minHeight:'74vh'}}>
            
            <h2 className="py-2">Cursos de la Institucion</h2>

            <Link className="btn btn-dark btn-md ms-5 my-3 " to='/admin/crear'> Nuevo Curso </Link>

            <Row xs={1} md={3} className="g-4" align="center">
            {cursos.map((curso,i) => (
                <Col key={i}>
                    <Card style={{ width: '14rem' }} >
                        <Card.Img variant="top" style={{height:"180px", objectFit:'cover'}} src={curso.curso_imagen} />
                        <Card.Body style={{minHeight:"210px"}}>
                            <Card.Title>{curso.curso_nombre}</Card.Title>
                            <Card.Text>
                            Docente: {curso.curso_docente}
                            </Card.Text>
                            <div className="row justify-content-center px-2">
                                <div className="col-12">
                                    <Link className="btn btn-primary btn-sm " to={`/admin/cursos/${curso.curso_id}`} >Ingresar</Link>
                                    <Link className="btn btn-warning btn-sm mx-2" to={`/admin/editar/${curso.curso_id}`}> Editar </Link>
                                    <button className="btn btn-danger btn-sm mx-1 my-2" id={`${curso.curso_id}`} onClick={(e) => {deleteCurso(e)}} > Eliminar </button>
                                </div>
                            </div>
                        </Card.Body>
                        </Card>
                </Col>
            ))}
            </Row>

        </div>
    )
}
