'use client'
import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { skils } from '../utils/Utils'
import '../styles/sections/skils.scss'
import { marker } from '../utils/Fonts'

export default function Skils() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    customPaging: function () {
      return (
        <button>
          <div className="dotInside"></div>
          <span className="progressSlider-stay progressSlider--thin">
            <svg height="70" width="70">
              <circle id="outer" cx="35" cy="35" r="25" strokeWidth="3" fill="none" stroke="#f89406" />
              <circle id="inner" cx="35" cy="35" r="25" strokeWidth="5" fill="none" stroke="#e6d0d2" />
            </svg>
          </span>
        </button>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };


  return (
    <div className="container-fluid text-white bg-primary d-flex justify-content-evenly" id="skils">
      <div className="container">
        <div className="row mt-5 mb-4">
          {skils.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-3 p-3 text-center" key={index}>
              <div className=" w-100 d-flex justify-content-center" >
                <Image
                  src={item.src}
                  alt={item.titulo}
                  width={item.altura}
                  height={item.largura}
                />
              </div>
              <h4 className={`text-warning mt-4 ${marker.className}`}>{item.titulo}</h4>
              <p>{item.texto}</p>
            </div>
          ))}

          
          {/* <Slider  {...settings}>

            {skils.map((item, index) => (
              <div className=" w-100 d-flex justify-content-center"  key={index}>
                <Image
                  src={item.src}
                  alt={item.titulo}
                  width={item.altura}
                  height={item.largura}
                />
              </div>
            ))}

          </Slider> */}

        </div>
      </div>
    </div>
  );
}