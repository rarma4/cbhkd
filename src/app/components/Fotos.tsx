'use client'
import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/components/galeriaItens.scss'
import { GaleriaFotos } from '../utils/Utils'
import Image from 'next/image'
import Link from "next/link"

export default function Fotos() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    rows: 2,
    // slidesPerRow: 2,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };

  return (
    <>
      <Slider  {...settings}>

        {GaleriaFotos.map((item, index) => (

          <div className=" card-body w-100 d-flex justify-content-center" key={index}>
            <Image
              src={item}
              alt={""}
              width={40}
              height={30}
              className="img-fluid" 
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>

        ))}

      </Slider>

    </>
  )
}
