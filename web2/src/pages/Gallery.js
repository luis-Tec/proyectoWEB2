import React from 'react';

class Gallery extends React.Component {
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
                    <h2>Gallery</h2>
                    <p>Here you can find images and videos about surfing.</p>
                    <hr />

                    <div id="multimedia">
                        <div class="slider">
                            <ul>
                                <li><img src="assets/images/gallery-imgs/surf1.jpg" alt="" /></li>
                                <li><img src="assets/images/gallery-imgs/surf2.jpg" alt="" /></li>
                                <li><img src="assets/images/gallery-imgs/surf3.jpg" alt="" /></li>
                                <li><img src="assets/images/gallery-imgs/surf4.jpg" alt="" /></li>
                                <li><img src="assets/images/gallery-imgs/surf5.jpg" alt="" /></li>
                            </ul>
                        </div>

                        <div class="video-player">
                            <video id="videoP" preload="true" autoplay="autoplay" controls muted>
                                <source src="assets/images/gallery-imgs/video1.mp4" type="video/mp4" />
                            </video>
                            <script src="assets/js/reproductor.js"></script>
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
                <hr />
            </React.Fragment>
        )
    }
}

export default Gallery;