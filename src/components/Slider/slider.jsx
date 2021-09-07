import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider.scss';
import "swiper/css/scrollbar"
import SwiperCore, {
  Scrollbar
} from 'swiper';
import Anime from 'react-animejs-wrapper'
SwiperCore.use([Scrollbar]);


const Slider = () => {

  return (
    <Anime 
    config={{
      translateY: [2500, 0],
      scale: [0, 1],
      loop: 1,
      delay: 2000,
      duration: 3000,
    }}>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{
        "hide": true
      }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><div className="apple">
      <a className="example-link" href="https://mvpmiami.github.io/apple/">Посмотреть</a>
        </div></SwiperSlide>
      <SwiperSlide><div className="company">
        <a className="example-link" href="https://mvpmiami.github.io/TestTask/dist/">Посмотреть</a>
        </div></SwiperSlide>
      <SwiperSlide><div className="onliner">
      <a className="example-link" href="https://mvpmiami.github.io/Onliner/">Посмотреть</a>
        </div></SwiperSlide>
      <SwiperSlide><div className="shelter">
      <a className="example-link" href="https://mvpmiami.github.io/shelter/pages/main/main-page.html">Посмотреть</a>
        </div></SwiperSlide>
      ...
    </Swiper>
    </Anime>
  )
}

export default Slider;