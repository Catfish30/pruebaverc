import React from 'react'

import { useState, useEffect } from "react";
import { Card, Row,Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

import { obtenerCursos } from "../services/CursoServiceAlum";



export default function CursosViewAlum() {

    const [cursos,setCurso] = useState([])    

    const getCursos = async () => {
        try {
            const cursosObtenidos = await obtenerCursos()
            setCurso(cursosObtenidos)
            
        } catch (error) {
            console.log(error)
        }   

    }

    useEffect(() => {
        getCursos()
    },[])
    

    return (
        <div className="container" style={{minHeight:'74vh'}}>
            
            <h2 className="py-2">Cursos Matriculados</h2>
            <Row xs={1} md={3} className="g-4" align="center">
            {cursos.map((curso,i) => (
                <Col key={i}>
                    <Card style={{ width: '14rem' }} >
                        <Card.Img variant="top" src={curso.curso_imagen} />
                        <Card.Body>
                            <Card.Title>{curso.curso_nombre}</Card.Title>
                            <Card.Text>
                            Docente: {curso.curso_docente}
                            </Card.Text>
                            <Link className="btn btn-primary btn-sm " to={`/alumnos/cursos/${curso.curso_id}`} >Ingresar</Link>
                        </Card.Body>
                        </Card>
                </Col>
                ))}
            </Row>

        </div>
    )
}

