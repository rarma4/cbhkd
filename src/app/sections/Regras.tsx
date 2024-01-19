'use client'
import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { skils } from '../utils/Utils'
import '../styles/sections/regras.scss'
import { marker } from '../utils/Fonts'

export default function Regras() {

  return (
    <div className="container-fluid d-flex justify-content-evenly" id="regras">
      <div className="container">
        <div className="row mt-5 mb-4">
          <h2 className={`text-center text-warning ${marker.className}`}>As regras do Hapkido?</h2>
          <h6 className={`text-center text-secondary `}>As regras e etiqueta do Hapkido são fundamentadas na tradição da arte</h6>
          <h6 className={`text-center text-secondary `}>devem ser respeitadas, usadas e passadas a todos os Hapkidoístas.</h6>

          <div className="col-12 col-lg-12 p-3 d-flex flex-column flex-nowrap">

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" data-bs-toggle="tab" href="#juramento" aria-selected="true" role="tab">Juramento</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#treino" aria-selected="false" role="tab">Treino</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#etiquetas" aria-selected="false" role="tab">Etiquetas</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#restricoes" aria-selected="false" role="tab">Restrições</a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="juramento" role="tabpanel">
                <p>1º Observar as regras do Hapkido.</p>
                <p>2º Respeitar o instrutor e meus superiores.</p>
                <p>3º Nunca fazer mau uso do Hapkido.</p>
                <p>4º Construir um mundo mais pacífico.</p>
                <p>5º Ser campeão da liberdade e da justiça.</p>
              </div>
              <div className="tab-pane fade" id="treino" role="tabpanel">
                <p>Dos 6 anos, tanto os homens quanto as mulheres, podem treinar o Hapkido pois sua forma circular de movimentação, adapta-se a qualquer tipo de corpo , sem que seja necessário anos treinando alongamentos ou exercícios físicos para ganhar força.</p>
                <p>O poder de adaptação do Hapkido unido com os movimentos circulares em perfeita harmonia, fará com que o praticante aproveite totalmente a força do seu oponente contra ele mesmo, sem que ele tenha chance de reação.</p>
                <p>O Hapkido ainda como terapia, desenvolve, disciplina, libera e equilibra a mente e o corpo, visando nos mostrar o caminho para um melhor entendimento da compreensão do universo e de si mesmo No dia a dia, ajuda na educação de seus filhos, no desenvolvimento dos adolescentes, deixando a mente aberta para os homens de negócios e inibe a tendência às drogas, alcoolismo, timidez e agressividade.</p>
              </div>
              <div className="tab-pane fade" id="etiquetas" role="tabpanel">
                <p>Dos 6 anos, tanto os homens quanto as mulheres, podem treinar o Hapkido pois sua forma circular de movimentação, adapta-se a qualquer tipo de corpo , sem que seja necessário anos treinando alongamentos ou exercícios físicos para ganhar força.</p>
                <p>O poder de adaptação do Hapkido unido com os movimentos circulares em perfeita harmonia, fará com que o praticante aproveite totalmente a força do seu oponente contra ele mesmo, sem que ele tenha chance de reação.</p>
                <p>O Hapkido ainda como terapia, desenvolve, disciplina, libera e equilibra a mente e o corpo, visando nos mostrar o caminho para um melhor entendimento da compreensão do universo e de si mesmo No dia a dia, ajuda na educação de seus filhos, no desenvolvimento dos adolescentes, deixando a mente aberta para os homens de negócios e inibe a tendência às drogas, alcoolismo, timidez e agressividade.</p>
              </div>
              <div className="tab-pane fade" id="restricoes" role="tabpanel">
                <p>Dos 6 anos, tanto os homens quanto as mulheres, podem treinar o Hapkido pois sua forma circular de movimentação, adapta-se a qualquer tipo de corpo , sem que seja necessário anos treinando alongamentos ou exercícios físicos para ganhar força.</p>
                <p>O poder de adaptação do Hapkido unido com os movimentos circulares em perfeita harmonia, fará com que o praticante aproveite totalmente a força do seu oponente contra ele mesmo, sem que ele tenha chance de reação.</p>
                <p>O Hapkido ainda como terapia, desenvolve, disciplina, libera e equilibra a mente e o corpo, visando nos mostrar o caminho para um melhor entendimento da compreensão do universo e de si mesmo No dia a dia, ajuda na educação de seus filhos, no desenvolvimento dos adolescentes, deixando a mente aberta para os homens de negócios e inibe a tendência às drogas, alcoolismo, timidez e agressividade.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}