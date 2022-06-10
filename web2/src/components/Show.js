import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../fb'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Show = () => {

  const [bienes, setBienes] = useState([])

  const binesCollection = collection(db, "bienes")

  const getBienes = async () => {
    const data = await getDocs(binesCollection)
    setBienes(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
  }

  const deleteBienes = async (id) => {
    const bienesDoc = doc(db, "bienes", id)
    await deleteDoc(bienesDoc)
    getBienes()
  }

  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Eliminará el producto?',
      text: "No se revertirá una vez borrado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBienes(id)
        Swal.fire(
          'Borrado!',
          'El elemento ha sido borrado.',
          'Éxito'
        )
      }
    })
  }

  useEffect(() => {
    getBienes()
  }, [])

  return (
    <>
      <Header></Header>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-grid gap-2'>
              <Link to={'/create'} className='btn btn-secondary mt-2 mb-2'>Create</Link>
            </div>
            <table className='table table-dark table-hover'>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Ubicacion</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Contacto</th>
                </tr>
              </thead>
              <tbody>
                {bienes.map((b) => (
                  <tr key={b.id}>
                    <td>{b.titulo}</td>
                    <td>{b.ubicacion}</td>
                    <td>{b.cantidad}</td>
                    <td>{b.precio}</td>
                    <td>{b.contacto}</td>
                    <td>
                      <Link to={`/edit/${b.id}`} className='btn btn-light'><i className="fa-solid fa-pen-to-square"></i></Link>
                      <button onClick={() => { confirmDelete(b.id) }} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Show