import React from 'react';

class Gallery extends React.Component {
    render() {
        return (
            <React.Fragment>
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
                <hr/>
            </React.Fragment>
        )
    }
}

export default Gallery;