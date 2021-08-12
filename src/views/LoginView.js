import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginView() {
    return (
        <div className='container p-4' style={{minHeight:'70vh'}}>
            <h1 className="text-center mb-5">Login</h1>
            <div className="row justify-content-center justify-content-sm-center">
                <div className="col col-md-3 col-sm-2 ms-5">
                    <Link className='btn btn-dark' to="/alumnos">
                        Alumnos
                    </Link>
                </div>
                <div className="col col-md-2 col-sm-3 ">
                    <Link className='btn btn-dark' to='admin'>
                        Administrador
                    </Link>
                </div>
            </div>
        </div>
    )
}
