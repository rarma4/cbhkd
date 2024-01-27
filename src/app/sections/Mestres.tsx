'use client'
import * as React from 'react';
import Image from 'next/image'
import '../styles/sections/mestres.scss'
import { marker } from '../utils/Fonts'
import Kim from '../components/Kim';
import Choi from '../components/Choi';
import Jae from '../components/Jae';
import MestresHkd from '../components/MestresHkd';
import FaixasPretas from '../components/FaixasPretas';

export default function Mestres() {

  return (
    <div className="container-fluid d-flex bg-body-tertiary justify-content-evenly" id="mestres">
      <div className="container">
        <div className="row mt-5 mb-4">
          <h2 className={`text-center text-warning ${marker.className}`}>Grão Mestres do Hapkido</h2>
          <h6 className={`text-center text-secondary `}>
e lista dos graduados da Confederação Brasileira de Hapkido</h6>

          <div className="col-12 col-lg-12 p-3 d-flex flex-column flex-nowrap">

            <ul className="nav nav-tabs bg-body-tertiary" role="tablist">
              <li className="nav-item bg-body-tertiary" role="presentation">
                <a className="nav-link text-secondary-emphasis active" data-bs-toggle="tab" href="#graoMestres" aria-selected="true" role="tab">Grão Mestres</a>
              </li>
              <li className="nav-item bg-body-tertiary" role="presentation">
                <a className="nav-link text-secondary-emphasis" data-bs-toggle="tab" href="#mestres" aria-selected="false" role="tab">Mestres</a>
              </li>
              <li className="nav-item bg-body-tertiary" role="presentation">
                <a className="nav-link text-secondary-emphasis" data-bs-toggle="tab" href="#faixasPretas" aria-selected="false" role="tab">Faixas pretas</a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="graoMestres" role="tabpanel">
                <Kim/>
                <Choi/>
                <Jae/>
              </div>

              <div className="tab-pane fade" id="mestres" role="tabpanel">
                <MestresHkd/>
              </div>

              <div className="tab-pane fade" id="faixasPretas" role="tabpanel">
                <FaixasPretas/>
                
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}