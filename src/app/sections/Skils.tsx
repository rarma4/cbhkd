'use client'
import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { skils } from '../utils/Utils'
import '../styles/sections/skils.scss'
import { marker } from '../utils/Fonts'

export default function Skils() {

  return (
    <div className="container-fluid d-flex justify-content-evenly" id="skils">
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
        </div>
      </div>
    </div>
  );
}