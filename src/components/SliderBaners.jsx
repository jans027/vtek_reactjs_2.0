import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../Data/data'


const [datos] = data
const { sliderBaners } = datos
const banner0 = Object.values(sliderBaners.banner1920)
const banner1 = Object.values(sliderBaners.banner1280)
const banner2 = Object.values(sliderBaners.banner600)
// console.log(banner0)



export default class SliderBaners extends Component {



    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
        };
        return (
            <section className='containerCarousel'>
                <div className="carousel1">
                    <Slider {...settings}>
                        {
                            banner0.map((item) =>
                                <div 
                                className="banner"
                                key={item.id}
                                >
                                    <img 
                                    className='imgBanner' 
                                    src={`./images/${item.img}`} 
                                    alt={item.img} />
                                </div>
                            )
                        }
                    </Slider>
                </div>
                <div className="carousel2">
                    <Slider {...settings}>
                        {
                            banner1.map((item) =>
                                <div 
                                className="banner"
                                key={item.id}
                                >
                                    <img 
                                    className='imgBanner' 
                                    src={`./images/${item.img}`} 
                                    alt={item.img} />
                                </div>
                            )
                        }
                    </Slider>
                </div>
                <div className="carousel3">
                    <Slider {...settings}>
                        {
                            banner2.map((item) =>
                                <div 
                                className="banner"
                                key={item.id}
                                >
                                    <img 
                                    className='imgBanner' 
                                    src={`./images/${item.img}`} 
                                    alt={item.img} />
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </section>
        );
    }
}