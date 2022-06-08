import React from 'react'
import Header from './Header'
import './GalleryReact.css'
import Footer from './Footer'
const GalleryReact = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <div className='cuerpo'>
                <h2>Gallery</h2>
                <p>Here you can find images and videos about surfing.</p>
                <hr />
                <div id="multimedia">
                    <div className="slider">
                        <ul>
                            <li><img src="assets/images/gallery-imgs/surf1.jpg" alt="" /></li>
                            <li><img src="assets/images/gallery-imgs/surf2.jpg" alt="" /></li>
                            <li><img src="assets/images/gallery-imgs/surf3.jpg" alt="" /></li>
                            <li><img src="assets/images/gallery-imgs/surf4.jpg" alt="" /></li>
                            <li><img src="assets/images/gallery-imgs/surf5.jpg" alt="" /></li>
                        </ul>
                    </div>
                    <div className="video-player">
                        <video id="videoP" preload="true" autoPlay="autoplay" controls muted>
                            <source src="assets/images/gallery-imgs/video1.mp4" type="video/mp4" />
                        </video>
                        <script src="assets/js/reproductor.js"></script>
                    </div>
                </div>
            </div>
            <hr/>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default GalleryReact