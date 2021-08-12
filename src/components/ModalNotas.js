import React from 'react'
import { useState } from 'react';
import {Button,Modal} from 'react-bootstrap'

export default function ModalNotas({value,actualizarInput,manejarSubmit}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div>
             <Button variant="warning ms-5 " onClick={handleShow} >
                Actualizar Notas
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                <Modal.Title >Actualizar Notas</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <form onSubmit={(e) => {manejarSubmit(e)}}>
                        <div className="row justify-content-around my-1">
                            <div className="col-2">
                                <label className="form-label">Nota 1</label>
                            </div>
                            <div className="col-2">
                                <input type="number" className="form-control" name="nota_1" value={value.nota_1}  onChange={(e) => {actualizarInput(e)}}></input>
                            </div>
                        </div>

                        <div className="row justify-content-around my-1">
                            <div className="col-2">
                                <label className="form-label">Nota 2</label>
                            </div>
                            <div className="col-2">
                                <input type="number" className="form-control" name="nota_2" value={value.nota_2} onChange={(e) => {actualizarInput(e)}}></input>
                            </div>
                        </div>

                        <div className="row justify-content-around my-1">
                            <div className="col-2">
                                <label className="form-label">Nota 3</label>
                            </div>
                            <div className="col-2">
                                <input type="number" className="form-control" name="nota_3" value={value.nota_3} onChange={(e) => {actualizarInput(e)}}></input>
                            </div>
                        </div>

                        <div className="row justify-content-around my-1">
                            <div className="col-2">
                                <label className="form-label">Nota 4</label>
                            </div>
                            <div className="col-2">
                                <input type="number" className="form-control" name="nota_4" value={value.nota_4} onChange={(e) => {actualizarInput(e)}}></input>
                            </div>
                        </div>
                        <Modal.Footer>

                            <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                            </Button>

                            <button className="btn btn-primary" onClick={handleClose} type="submit">
                            Guardar Cambios
                            </button>
                            
                        </Modal.Footer>
                    </form>

                </Modal.Body>
                
                
            </Modal>
        </div>
    )
}
