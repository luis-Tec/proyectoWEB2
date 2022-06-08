import React from 'react'
import Header from './Header'
import './HomeReact.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const HomeReact = () => {
  return (
    <React.Fragment>
        <Header></Header>
        <div>
            <div id="img_principal">
                <p>WE LOVE SURFFIN'</p>
                <span>We offer many culture services</span>
            </div>
            <div id="carrusel-container">
                <h2>Welcome to our surffin' fanpage</h2>
                <p>You can meet lots of famous surffers around the world here.</p>
                <div id="contenido">
                    <img src="assets/images/surf.jpg" alt='' />
                    <h3>Gallery</h3>
                    <p>
                        Al contrario del pensamiento popular,
                        el texto de Lorem Ipsum no es simplemente texto aleatorio.
                        Tiene sus raices en una pieza clásica de la literatura del Latin,
                        que data del año 45 antes de Cristo.
                    </p>
                    <button><Link to="/gallery">View Gallery</Link></button>
                </div>
                <div id="contenido">
                    <img src="assets/images/surf.jpg" alt='' />
                    <h3>Discussion</h3>
                    <p>
                        Al contrario del pensamiento popular,
                        el texto de Lorem Ipsum no es simplemente texto aleatorio.
                        Tiene sus raices en una pieza clásica de la literatura del Latin,
                        que data del año 45 antes de Cristo.
                    </p>
                     <button><Link to="/surff">View Discussion</Link></button>
                </div>
                <div id="contenido">
                    <img src="assets/images/surf.jpg" />
                    <h3>Forum</h3>
                    <p>
                        Al contrario del pensamiento popular,
                        el texto de Lorem Ipsum no es simplemente texto aleatorio.
                        Tiene sus raices en una pieza clásica de la literatura del Latin,
                        que data del año 45 antes de Cristo.
                    </p>
                    <button>Join Forum</button>                 
                </div>
            </div>
            <div id="img_secundaria">
                <div id="contenido_bnw">
                    <input type="email" name="email" placeholder="  name@email.com" />
                    <textarea placeholder={"  Your message..."}></textarea>
                    <button type="button" className="btn btn-danger">Submit</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </React.Fragment>
  )
}

export default HomeReact