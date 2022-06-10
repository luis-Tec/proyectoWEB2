import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../fb'

const Create = () => {
  const [cantidad, setCantidad] = useState();
  const [contacto, setContacto] = useState();
  const [precio, setPrecio] = useState();
  const [titulo, setTitulo] = useState();
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  const bienes = collection(db, 'bienes');

  const store = async (e) => {
    e.preventDefault();
    await addDoc(bienes, { cantidad: cantidad, contacto: contacto, precio: precio, titulo: titulo, location: location });
    navigate('/showItems');
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <h1>Crear Artículo</h1>
          <form onSubmit={store}>
            <div className='mb-3'>
              <label className='form-label'>Nombre del artículo</label>
              <input
                onChange={(e) => setTitulo(e.target.value)}
                type="text"
                value={titulo}
                className="form-control"
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Precio del artículo</label>
              <input
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                value={precio}
                className="form-control"
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Contacto para el artículo</label>
              <input
                onChange={(e) => setContacto(e.target.value)}
                type="number"
                value={contacto}
                className="form-control"
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Cantidad del artículo agregado</label>
              <input
                onChange={(e) => setCantidad(e.target.value)}
                type="number"
                value={cantidad}
                className="form-control"
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Ubicación del artículo agregado</label>
              <input
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                value={location}
                className="form-control"
              />
            </div>
            <button type="submit" className='btn btn-primary'> Crear Artículo</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create