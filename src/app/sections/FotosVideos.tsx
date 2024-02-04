'use client'
import * as React from 'react';
import '../styles/sections/fotosvideos.scss'
import { marker } from '../utils/Fonts'
import Fotos from '../components/Fotos';
import Videos from '../components/Videos';

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
                <Fotos />
              </div>
              <div className="tab-pane fade" id="videos" role="tabpanel">
                <Videos />
                <div className=" mt-5 alert alert-dismissible alert-warning">
                  {/* <button type="button" className="btn-close" data-bs-dismiss="alert"></button> */}
                  <h4 className="alert-heading">Mais Vídeos em :</h4>
                  <p className="mb-0">Youtube.com.br. </p>
                  <p><a href="https://www.youtube.com/results?search_query=bummoohapkido" target='blank' className="alert-link"> Clique para ir ao youtube.</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}