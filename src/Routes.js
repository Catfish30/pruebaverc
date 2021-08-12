import React from 'react'
import { Route } from 'react-router'
import CursosViews from './views/CursosViews'
import CrearCursoView from './views/CrearCursoView'
import EditarCursoView from './views/EditarCursoView'
import NotasView from './views/NotasView'

import LoginView from './views/LoginView'

import CursosViewAlum from './views/CursosViewAlum'
import NotasViewAlum from './views/NotasViewAlum'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={LoginView} />
            <Route path='/admin' exact component={CursosViews} />
            <Route path='/admin/crear' exact component={CrearCursoView} />
            <Route path="/admin/editar/:id" exact component={EditarCursoView} />
            <Route path="/admin/cursos/:id" exact component={NotasView} />
            <Route path="/alumnos" exact component={CursosViewAlum} />
            <Route path="/alumnos/cursos/:id" exact component={NotasViewAlum} />
        </div>
    )
}
