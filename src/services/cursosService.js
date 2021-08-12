
import axios from 'axios'
import { storage } from '../config/Firebase'

const URL = `${process.env.REACT_APP_API}/cursos`

const obtenerCursos = async () => {

    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }

}

const crearCurso = async (nuevoCurso) => {
    try {
        const headers = {
            "content-Type":"application/json"
        }
        let {data} = await axios.post(URL,nuevoCurso,{headers})
        return data
    } catch (error) {
        throw error
    }
}

const obtenerCursoPorId = async (id) => {
    try {
        let { data } = await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

const editarCurso = async (cursoEditado,id) => {
    try {
        const headers = {
            "content-Type":"application/json"
        }
        let { data } = await axios.put(`${URL}/${id}`,cursoEditado,{headers})
        return data
    } catch (error) {
        throw error
    }
}

const eliminarCurso = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`)
    } catch (error) {
        throw error
    }
}

const subirArchivo = (imagen) => {
    return new Promise((resolve,reject) => {
        let refStorage = storage.ref(`cursoFotos/${imagen.name}`)
        let tareaSubir = refStorage.put(imagen)

        tareaSubir.on("state_changed",
        () => {},
        (error) => {reject(error)},
        () => {
            tareaSubir.snapshot.ref.getDownloadURL()
            .then((urlImagen) => {
                resolve(urlImagen)
            })
        }
        )
    })
}


export{
    obtenerCursos,
    crearCurso,
    obtenerCursoPorId,
    editarCurso,
    eliminarCurso,
    subirArchivo,
}