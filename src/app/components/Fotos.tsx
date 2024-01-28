
import * as React from 'react';
import '../styles/components/galeriaItens.scss'
import { GaleriaFotos } from '../utils/Utils'
import Image from 'next/image'
import Link from "next/link"
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

export default function Fotos() {
  const onBeforeSlide = (detail: any) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  
  return (
    <>
      <LightGallery
        elementClassNames="custom-wrapper-class"
        // onBeforeSlide={onBeforeSlide}
        speed={500}
        plugins={[lgThumbnail]}
      >
        {GaleriaFotos.map((item, index) => (
          <a href={item.src} key={index}>
            <Image
              src={item.srcThumb}
              alt={item.altimg}
              width={item.altura}
              height={item.largura}
            />
          </a>
        ))}
      </LightGallery>
    </>
  );
}

