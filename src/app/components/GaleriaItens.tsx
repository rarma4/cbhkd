 'use client'
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/components/galeriaItens.scss'
import { GaleriaItenS } from '../utils/Utils'
import Image from 'next/image'
import Link from "next/link"

export default function GaleriaItens() {
  var settings = {
    loop: true,
    speed: 2000,
    slidesPerView: 3,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { clickable: true },
    breakpoints: {
      1024: { slidesPerView: 2 },
      600: { slidesPerView: 1.04 },
      480: { slidesPerView: 1.04 }
    }
  };

  return (
    <>
      <Swiper {...settings} modules={[Autoplay, Pagination]}>
        {GaleriaItenS.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="col-md-4 col-sm-6 p-3 text-center">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
