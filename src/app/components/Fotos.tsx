
import * as React from 'react';
import '../styles/components/fotos.scss'
import { GaleriaFotos } from '../utils/Utils'
import Image from 'next/image'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

export default function Fotos() {

  return (
    <>
      <div className="box-galeria" >
        <LightGallery
          elementClassNames="custom-wrapper-class"
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
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </>
  );
}

