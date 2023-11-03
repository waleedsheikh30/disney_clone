import React from 'react'
import { NavLink } from 'react-router-dom';
import lucaimg from './2sliderimgs/LUCA-2.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nav } from 'react-bootstrap';
import { TrendAPI } from './movieAPI';


function Trending() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
            { breakpoint: 425, settings: { slidesToShow: 1 } },
        ]
    };

    return (
        <div className='movie-section'>
            <h1>Trending</h1>
            <div className='carousel'>
                <Slider {...settings} className='wrap'>
                    {

                        TrendAPI && TrendAPI.map((value, index) => (
                            <div key={index}>
                                <Nav.Link to=""><img src={value.imgSrc} alt="" /></Nav.Link>
                            </div>
                        ))

                    }
                </Slider>
            </div>
        </div>
    )
}

export default Trending;