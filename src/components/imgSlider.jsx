import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

  return (

    <div className='slide'>
        <Slider {...settings}>
             <div>
                <img src="./images/poster 5.jpg"  alt="" />
             </div>
             <div>
                <img src="./images/slider-badging.jpg"  alt="" />    
            </div>
            <div>
                <img src="./images/slider-scale.jpg"  alt="" />    
            </div>   
            <div>
                <img src="./images/slider-scales.jpg"  alt="" />    
            </div>
        </Slider>
    </div>
    


    
  )
}

export default ImgSlider