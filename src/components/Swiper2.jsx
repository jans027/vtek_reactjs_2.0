import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../Data/data";


const [datos] = data
const { swiper1 } = datos
const cards = Object.values(swiper1)
// console.log(datos)


export default class Swiper2 extends Component {



    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            centerMode: true,
            centerPadding: "10px",
            // lazyLoad: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        // initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section>
                <div className="layout2">
                    <h2>¿Como obtengo un certificado de conform​idad para ​mis productos?</h2>
                </div>
                <div className="carousel1">
                    <Slider className="slider swiper" {...settings}>
                        {
                            cards.map((item) =>
                                <div className="cardsSwiper" key={item.id}>
                                    <h6>{item.h6}</h6>
                                    <img src={`./images/${item.img}`} alt={item.h6} />
                                    <h4>{item.h4}</h4>
                                    <p>{item.parrafo}</p>
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </section>
        );
    }
}
