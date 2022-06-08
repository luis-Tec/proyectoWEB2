import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='general_foot'>
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

            <hr className="espaciador" />
            <div id="div_footer4">
                <a href="http://www.facebook.com">
                    <img src="assets/images/facebook-f-brands.svg" alt=''/>
                </a>
                <a href="http://www.twitter.com">
                    <img src="assets/images/twitter-brands.svg" alt=''/>
                </a>
                <a href="https://accounts.google.com">
                    <img src="assets/images/google-plus-g-brands.svg" alt='' />
                </a>
                <a href="https://instagram.com">
                    <img src="assets/images/instagram-brands.svg" alt='' />
                </a>
            </div>
            <div id="div_footer4">Surf. 2015<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div id="div_footer4">
                <p>Copyright &copy; Surf.club</p>
            </div>
        </footer>
    )
}

export default Footer