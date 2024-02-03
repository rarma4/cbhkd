
import * as React from 'react';
import '../styles/components/videos.scss'
import { GaleriaVideos } from '../utils/Utils'
import Image from 'next/image'
import Link from "next/link"
import LightGallery from 'lightgallery/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Videos() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    rows: 2,
    slidesPerRow: 1,

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
          rows: 1,
          slidesPerRow: 1,
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
          rows: 1,
          slidesPerRow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          rows: 1,
          slidesPerRow: 1,
        }
      }
    ]
  };

  return (
    <>
     {/* <div className="row mt-5 mb-4"> */}
      <Slider  {...settings}>

          {GaleriaVideos.map((item, index) => (
                  <div className="col-md-4 col-sm-6 p-3 text-center" key={index}>
                  <div className="card mb-3 bg-primary text-white">
                    <div className="card-body">
                      <h5 className="card-title text-white">{item.header}</h5>
                    </div>
                    <div className=" card-body w-100 d-flex justify-content-center" >
                  {/* <iframe
                  src={`https://www.youtube.com.br/embed/${item.idVideo}`}
                  width={item.altura}
                  height={item.largura}
                  title={item.header}
                  /> */}
                  <iframe 
                  width={item.altura}
                  height={item.largura}
                  src={`https://www.youtube.com.br/embed/${item.idVideo}`}
                  title={item.header}
                  >

                  </iframe>
                </div>

                <div className="card-footer text-white">
                  
                </div>
              </div>
            </div>


          ))}

      </Slider>
      
    {/* </div> */}
    </>
  );
}

