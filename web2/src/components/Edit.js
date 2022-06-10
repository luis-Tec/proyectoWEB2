import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../fb'

const Edit = () => {

  const [cantidad, setCantidad] = useState();
  const [contacto, setContacto] = useState();
  const [precio, setPrecio] = useState();
  const [titulo, setTitulo] = useState();
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault();
    const articulo = doc(db, "bienes", id);
    const data = { cantidad: cantidad, contacto: contacto, precio: precio, titulo: titulo, location: location };
    await updateDoc(articulo, data);
    navigate('/showItems');
  };

  const getProductById = async (id) => {
    const articulo = await getDoc(doc(db, "bienes", id))
    if (articulo.exists()) {
      setTitulo(articulo.data().titulo);
      setPrecio(articulo.data().precio);
      setContacto(articulo.data().contacto);
      setCantidad(articulo.data().cantidad);
      setLocation(articulo.data().location);
    } else {
      console.log('El artículo');
    }
  };

  useEffect(() => {
    getProductById(id)
  }, []);

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <h1>Editar Artículo</h1>
            <form onSubmit={update}>
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
              <button type="submit" className='btn btn-primary'> Modificar Artículo </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit