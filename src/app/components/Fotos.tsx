
import * as React from 'react';
import '../styles/components/fotos.scss'
import { GaleriaFotos } from '../utils/Utils'
import Image from 'next/image'
import Link from "next/link"
import LightGallery from 'lightgallery/react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import styles
import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

export default function Fotos() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 10,
    slidesToScroll: 10,
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
    {/* <Slider  {...settings}> */}
      <div className="box-galeria" >
        <LightGallery
          elementClassNames="custom-wrapper-class"
          // onBeforeSlide={onBeforeSlide}
          speed={500}
          plugins={[lgThumbnail]}
        >
          {GaleriaFotos.map((item, index) => (


            <a className="box-foto" href={item.src} key={index} >
              <Image
                src={item.srcThumb}
                alt={item.altimg}
                width={item.largura}
                height={item.altura}
              // sizes="100vw"
              // style={{
              //   width: '100%',
              //   maxWidth: '400px',
              //   aspectRatio: '1/1',
              //   objectFit: 'cover',
              // }}
              />
            </a>

          ))}
        </LightGallery>
      </div>
      {/* </Slider> */}
    </>
  );
}

