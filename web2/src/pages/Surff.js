import React from 'react';

class Surff extends React.Component {
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
                    <div class="row row-cols-1 row-cols-md-2 g-4 m-2 border p-2">
                        <div class="col">
                            <div class="card">
                                <img src="assets/images/service-imgs/equipoSurf.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Surfear</h5>
                                    <p class="card-text">Le proveemos el equipo necesario para su aventura playera en alguna de
                                        nuestras areas especializadas.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="assets/images/service-imgs/tour.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Tour costero</h5>
                                    <p class="card-text">Conozca bellas playas con los fabulosos tours que tenemos alrededor de
                                        las playas más hermosas del pais.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="assets/images/service-imgs/voley-playa.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Deportes</h5>
                                    <p class="card-text">Ofrecemos la oportunidad de practicar diversos deportes en la arena como el
                                        volleyball, futbol, motocross y más.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="assets/images/service-imgs/delfines.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Delfines</h5>
                                    <p class="card-text">Se le ofrece ir en un catamarán a un área donde pueden ser encontrados delfines
                                        y es posible interactuar con ellos.</p>
                                </div>
                            </div>
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

export default Surff;