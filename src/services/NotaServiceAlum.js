import axios from 'axios'


  const URL = `${process.env.REACT_APP_API}/cursos`


const obtenerNota = async (id) => {
    try {
        let {data} = await axios.get(`${URL}/${id}/notas/${id}`)
        return data
    } catch (error) {
        throw error
    }
}


export{
    obtenerNota,
}