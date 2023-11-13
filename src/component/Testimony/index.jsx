import "./style.css"
import image1 from "../../assets/img_photo.png"
import stars1 from "../../assets/Star 1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Testimony () {
    return (
    <div id="Testimony" className="container-bg-4">
        <div className="commentary">
            <div className="commentary-text">
                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
        </div>
        <div className="personal-bg">
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="personal-commentary">
                <div className="image-profil-1">
                    <div className="profil-1">
                        <img className="profil-image" src={image1} alt="img_photo"/>   
                    </div>
                </div>
                <div className="position-text-1">
                    <div className="star-position">
                        <div className="star-2">
                            <img className="image-2" src={stars1} alt="star-1"/>
                        </div>
                        <div class="star-3">
                            <img className="image-3" src={stars1} alt="star-1"/>
                        </div>
                        <div className="star-4">
                            <img className="image-4" src={stars1} alt="star-1"/>
                        </div>
                        <div className="star-5">
                            <img className="image-5" src={stars1} alt="star-1"/>
                        </div>
                    </div>
                    <div className="personal-commentary-text">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nesciunt officia a accusantium minus sit magnam rem consectetur libero reiciendis, ratione, natus commodi adipisci corporis deserunt nihil repellendus consequuntur. Alias.</h3>
                        <p>John Dee 32, Bromo</p>
                    </div>
                </div>
            </div></SwiperSlide>
      <SwiperSlide>
      <div className="personal-commentary">
                <div className="image-profil-1">
                    <div className="profil-1">
                        <img className="profil-image" src={image1} alt="img_photo"/>   
                    </div>
                </div>
                <div className="position-text-1">
                    <div className="star-position">
                        <div className="star-2">
                            <img className="image-2" src={stars1} alt="star-1"/>
                        </div>
                        <div className="star-3">
                            <img className="image-3" src={stars1} alt="star-1"/>
                        </div>
                        <div className="star-4">
                            <img className="image-4" src={stars1} alt="star-1"/>
                        </div>
                        <div className="star-5">
                            <img className="image-5" src={stars1} alt="star-1"/>
                        </div>
                    </div>
                    <div className="personal-commentary-text">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nesciunt officia a accusantium minus sit magnam rem consectetur libero reiciendis, ratione, natus commodi adipisci corporis deserunt nihil repellendus consequuntur. Alias.</h3>
                        <p>John Dee 32, Bromo</p>
                    </div>
                </div>
            </div>
      </SwiperSlide>
    </Swiper>
            
        </div>
        
    </div>
    )
}
export default Testimony