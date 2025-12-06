
import * as React from 'react';
import '../styles/components/videos.scss'
import { GaleriaVideos } from '../utils/Utils'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

export default function Videos() {
  var settings = {
    loop: true,
    speed: 2000,
    slidesPerView: 2,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { clickable: true },
    grid: { rows: 1 },
    breakpoints: {
      1024: { slidesPerView: 2 },
      600: { slidesPerView: 1.04 },
      480: { slidesPerView: 1.04 }
    }
  };

  return (
    <>
      <Swiper {...settings} modules={[Autoplay, Pagination, Grid]}>
        {GaleriaVideos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="col-md-4 col-sm-6 p-3 text-center">
              <div className="card mb-3 bg-primary text-white">
                <div className="card-body">
                  <h5 className="card-title text-white">{item.header}</h5>
                </div>
                <div className=" card-body w-100 d-flex justify-content-center" >
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

