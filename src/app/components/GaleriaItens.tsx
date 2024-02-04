'use client'
import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/components/galeriaItens.scss'
import { GaleriaItenS } from '../utils/Utils'
import Image from 'next/image'
import Link from "next/link"

export default function GaleriaItens() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
        {GaleriaItenS.map((item, index) => (
          <div className="col-md-4 col-sm-6 p-3 text-center" key={index}>
            <div className="card mb-3 bg-primary text-white">
              <h3 className="card-header text-white">{item.header}</h3>
              <div className="card-body">
                <h5 className="card-title text-white">{item.titulo}</h5>
                <h6 className="card-subtitle text-white">{item.subtitulo}</h6>
              </div>
              <div className=" card-body w-100 d-flex justify-content-center" style={{ backgroundImage: "url('../../../../public/assets/img/home-bg-default.webp')!important", backgroundSize: "cover!important", backgroundPosition: "center center!important" }} >
                <Image
                  src={item.src}
                  alt={item.altimg}
                  width={item.altura}
                  height={item.largura}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="card-footer text-white">
                <Link className="btn btn-outline-warning smoothScroll tm-view-more-btn" href={item.srcbtn}>{item.txtbtn}</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}
