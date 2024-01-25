'use client'
import * as React from 'react';
import Image from 'next/image'
import '../styles/sections/mestres.scss'
import { marker } from '../utils/Fonts'
import Kim from '../components/Kim';
import Choi from '../components/Choi';

export default function Mestres() {

  return (
    <div className="container-fluid d-flex bg-body-tertiary justify-content-evenly" id="historia">
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
              </div>

              <div className="tab-pane fade" id="mestres" role="tabpanel">
                <p>A Confederação Brasileira de Hapkido vem por meio deste site, contar como chegou e como anda o Hapkido no Brasil, de uma forma direta e sem rodeios, para que não só os instrutores e alunos, mas também o público em geral, possa entender o que se passa dentro do cenário do Hapkido no Brasil.</p>
              </div>

              <div className="tab-pane fade" id="faixasPretas" role="tabpanel">
                <p>Família de escolas ou academias de artes marciais</p>
                <p>Entre as décadas de 50 e 60, após a separação da Coréia, a Coréia do Sul passou por uma grande e rigorosa reformulação, saía do regime (Imperial – Comunista), para o regime (capitalista), esta grande reformulação só foi possível devido a forte união do povo Coreano.</p>
                
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}