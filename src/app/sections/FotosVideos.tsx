'use client'
import * as React from 'react';
import Image from 'next/image'
import '../styles/sections/fotosvideos.scss'
import { marker } from '../utils/Fonts'
import Fotos from '../components/Fotos';


export default function FotosVideos() {

  return (
    <div className="container-fluid d-flex bg-body-tertiary justify-content-evenly" id="fotosvideos">
      <div className="container">
        <div className="row mt-5 mb-4">
          <h2 className={`text-center text-warning ${marker.className}`}>Galeria de</h2>
          <h5 className={`text-center text-secondary `}>Fotos e vídeos</h5>

          <div className="col-12 col-lg-12 p-3 d-flex flex-column flex-nowrap">

            <ul className="nav nav-tabs bg-body-tertiary" role="tablist">
              <li className="nav-item bg-body-tertiary" role="presentation">
                <a className="nav-link text-secondary-emphasis active" data-bs-toggle="tab" href="#fotos" aria-selected="true" role="tab">Fotos</a>
              </li>
              <li className="nav-item bg-body-tertiary" role="presentation">
                <a className="nav-link text-secondary-emphasis" data-bs-toggle="tab" href="#videos" aria-selected="false" role="tab">Videos</a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="fotos" role="tabpanel">
                <Fotos/>
              </div>

              <div className="tab-pane fade" id="videos" role="tabpanel">
                b
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}