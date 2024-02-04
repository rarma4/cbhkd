'use client'
import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/components/mestresItens.scss'
import { MestresItenS } from '../utils/Utils'
import Image from 'next/image'

export default function MestresItens() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    autoplay: true,
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
          slidesToShow: 1,
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
          arrows: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
        }
      }
    ]
  };

  return (
    <>
      <Slider  {...settings}>
        {MestresItenS.map((item, index) => (
          <div className="col-6 col-sm-6 col-lg-3 p-3 text-center mestresItens" key={index} id="mestresItens">
            <div className=" w-100 d-flex justify-content-center" >
              <Image
                src={item.src}
                alt={item.altimg}
                width={item.altura}
                height={item.largura}
              />
            </div>
            <h6 className={`mt-4`}>{item.graduacao01}</h6>
            <h6 className={`mt-4`}>{item.graduacao02}</h6>
            <h4 className={`text-warning mt-4`}>{item.nome}</h4>
            <p>{item.federacao}</p>
          </div>
        ))}
      </Slider>
    </>
  )
}
