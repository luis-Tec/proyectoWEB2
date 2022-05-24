import React from 'react';
import { Link } from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div class="nav-container">
                        <nav class="navbar">
                            <div class="pag-name">
                                <h1>SURF<span>F</span></h1>
                            </div>
                            <div id='div-nav'>
                                <a href=""> Home </a>
                                <a href="./surff.html"> Surff </a>
                                <a href="./gallery.html"> Gallery </a>
                                <a href=""> Join </a>
                            </div>
                        </nav>
                    </div>
                </header>
                <body>
                    <div id="img_principal">
                        <p>WE LOVE SURFFIN'</p>
                        <span>We offer many culture services</span>
                    </div>

                    <div id="carrusel-container">

                        <h2>Welcome to our surffin' fanpage</h2>
                        <p>You can meet lots of famous surffers around the world here.</p>

                        <div id="contenido">
                            <img src="assets/images/surf.jpg" />
                            <h3>Gallery</h3>
                            <p>
                                Al contrario del pensamiento popular,
                                el texto de Lorem Ipsum no es simplemente texto aleatorio.
                                Tiene sus raices en una pieza clásica de la literatura del Latin,
                                que data del año 45 antes de Cristo.
                            </p>

                            <button>
                                <Link to="/gallery">View Gallery</Link>
                            </button>

                        </div>

                        <div id="contenido">
                            <img src="assets/images/surf.jpg" />
                            <h3>Discussion</h3>
                            <p>
                                Al contrario del pensamiento popular,
                                el texto de Lorem Ipsum no es simplemente texto aleatorio.
                                Tiene sus raices en una pieza clásica de la literatura del Latin,
                                que data del año 45 antes de Cristo.
                            </p>

                            <button>
                                <Link to="/surff">View Discussion</Link>
                            </button>

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
                            <a href="">
                                <button>Join Forum</button>
                            </a>
                        </div>
                    </div>
                    <div id="img_secundaria">
                        <div id="contenido_bnw">
                            <input type="email" name="email" placeholder="  name@email.com" />
                            <textarea>Your message...</textarea>
                            <button type="button" class="btn btn-danger">Submit</button>

                        </div>

                    </div>
                </body>

                <footer>
                    <div id="div_footer1">
                        <div id="div_footer2">
                            <h5>Surf.club</h5>
                            <p>795 Folsom Ave, Suite 600<br />
                                San Francisco, CA 94107<br />
                                P:(123) &#60;456-&#62; 7890
                            </p>
                        </div>
                        <div id="div_footer3">
                            <h3>Surff.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus viverra, tortor sit amet pellentesque sagittis,
                                neque nulla tincidunt quam, sed varius est elit eu lacus.
                                Phasellus nec neque nec nisi bibendum convallis ac vitae mauris.
                            </p>
                        </div>
                    </div>

                    <hr class="solid" />
                    <div id="div_footer4">
                        <a href="http://www.facebook.com">
                            <img src="assets/images/facebook-f-brands.svg" />
                        </a>
                        <a href="http://www.twitter.com">
                            <img src="assets/images/twitter-brands.svg" />
                        </a>
                        <a href="https://accounts.google.com">
                            <img src="assets/images/google-plus-g-brands.svg" />
                        </a>
                        <a href="https://instagram.com">
                            <img src="assets/images/instagram-brands.svg" />
                        </a>
                    </div>
                    <div id="div_footer4">Surf. 2015<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div id="div_footer4">
                        <p>Copyright &copy; Surf.club</p>
                    </div>
                </footer>

            </React.Fragment>
        )
    }
}

export default Home;