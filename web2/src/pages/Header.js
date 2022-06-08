import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { app_db } from '../fb'
const Header = () => {
  const closeSesion= () => {
      app_db.auth().signOut();

  }
  return (
    <div>
        <div className="nav-container">
            <nav className="navbar">
                <div className="pag-name">
                    <h1 className='tituloh1'>SURF<span className='span-hijo'>F</span></h1>
                </div>
                <div id='div-nav'>
                    <button className='boton_nav'><Link className='link'  to={'/'}>Home</Link></button>
                    <button className='boton_nav'><Link className='link'  to={'/surff'}>Surff</Link></button>
                    <button className='boton_nav'><Link className='link'  to={'/gallery'}>Gallery</Link></button>
                    <button className='boton_nav'><Link className='link'  to={'/'}>Join</Link></button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={closeSesion}>Log Out</button>

                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header