 'use client'
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/components/mestresItens.scss'
import { MestresItenS } from '../utils/Utils'
import Image from 'next/image'

export default function MestresItens() {
  var settings = {
    loop: true,
    speed: 2000,
    slidesPerView: 1,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { clickable: true },
    breakpoints: {
      1024: { slidesPerView: 1 },
      600: { slidesPerView: 1.04 },
      480: { slidesPerView: 1.04 }
    }
  };

  return (
    <>
      <Swiper {...settings} modules={[Autoplay, Pagination]}>
        {MestresItenS.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="col-6 col-sm-6 col-lg-3 p-3 text-center mestresItens" id="mestresItens">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
