import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'

export default function FooterPage() {
    return (
        
        <div className="mt-3" style={{backgroundColor:'#F9FAFB',position:'',left:'0px',bottom:'0px',width:'100%',padding:'2%'}}>
        <div className='container' >
            <div className="row justify-content-md-center ">
                <div className="col-md-auto">
                    <h6>Direccion Contacto Convenios</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <p>© Photo, Inc. 2019. We love our users!</p>
                </div>
                <div className="col-md-6" align="center">
                    <Image src={logo} rounded style={{height:'80px'}} />
                </div>
                <div className="col-md-3" align="end">
                    <h4>Redes Sociales</h4>
                </div>
            </div>
        </div>
        </div>
        
    )
}
