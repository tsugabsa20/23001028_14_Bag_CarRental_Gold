import "./style.css"
import facebook from "../../assets/fi_facebook.png"
import instagram from "../../assets/fi_instagram.png"
import twitter from "../../assets/fi_twitter.png"
import mail from "../../assets/fi_mail.png"
import twitch from "../../assets/fi_twitch.png"
import rectangle from "../../assets/Rectangle 74.png"
function Footer () {
    return (
        <div class="container-bg-7">
        <div class="footer">
            <div class="contact">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div class="header-footer">
                <a href="#OurServices">Our Services</a>
                <a href="#WhyUs">Why Us</a>
                <a href="#Testimony">Testimonial</a>
                <a href="#FAQ">FAQ</a>
            </div>
            <div class="social-media">
                <div class="social-media-text">
                    <p>Connect with us</p>
                </div>
                <div class="social-media-image">
                    <img class="media-1" src={facebook} alt="fi_facebook"/>
                    <img class="media-2" src={instagram} alt="fi_instagram"/>
                    <img class="media-3" src={twitter} alt="fi_twitter"/>
                    <img class="media-4" src={mail} alt="fi_mail"/>
                    <img class="media-5" src={twitch} alt="fi_twitch"/>
                </div>
            </div>
            <div class="text-footer">
                <p>Copyright in Binar</p>
                <img class="footer-image" src={rectangle} alt="Rectangle"/>
            </div>
        </div>
    </div>
    )
}

export default Footer