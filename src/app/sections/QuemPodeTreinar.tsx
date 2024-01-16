'use client'
import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { skils } from '../utils/Utils'
import '../styles/sections/quemPodeTreinar.scss'
import { marker } from '../utils/Fonts'

export default function QuemPodeTreinar() {

  return (
    <div className="container-fluid d-flex justify-content-evenly" id="quemPodeTreinar">
      <div className="container">
        <div className="row mt-5 mb-4">
          <h2 className={`text-center text-warning ${marker.className}`}>Quem pode treinar o Hapkido?</h2>
          <div className="col-12 col-sm-6 col-lg-6 p-3 text-center">
            <div className=" w-100 d-flex justify-content-center" >
              <Image
                src="/assets/img/home-bg-w.webp"
                alt="logo rafart"
                width={451}
                height={254}
              />
            </div>

          </div>

          <div className="col-12 col-sm-6 col-lg-6 p-3">

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Hapkido para as mulheres
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Não é necessário força física para a aplicação das técnicas do Hapkido, o que torna a arte marcial ideal para o sexo feminino.</p>
                    <p>Um estudo profundo aliado ao treino constante desta singular arte marcial, pelas mulheres, confere uma grande variedade de técnicas lógicas, muito úteis, que podem ser utilizadas em diversas situações.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Hapkido para todos
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Dos 6 anos, tanto os homens quanto as mulheres, podem treinar o Hapkido pois sua forma circular de movimentação, adapta-se a qualquer tipo de corpo , sem que seja necessário anos treinando alongamentos ou exercícios físicos para ganhar força.</p>
                    <p>O poder de adaptação do Hapkido unido com os movimentos circulares em perfeita harmonia, fará com que o praticante aproveite totalmente a força do seu oponente contra ele mesmo, sem que ele tenha chance de reação.</p>
                    <p>O Hapkido ainda como terapia, desenvolve, disciplina, libera e equilibra a mente e o corpo, visando nos mostrar o caminho para um melhor entendimento da compreensão do universo e de si mesmo No dia a dia, ajuda na educação de seus filhos, no desenvolvimento dos adolescentes, deixando a mente aberta para os homens de negócios e inibe a tendência às drogas, alcoolismo, timidez e agressividade.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" data-bs-toggle="tab" href="#mulheres" aria-selected="true" role="tab">Para as mulheres</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#todos" aria-selected="false" role="tab">Para todos</a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="mulheres" role="tabpanel">
                <p>Não é necessário força física para a aplicação das técnicas do Hapkido, o que torna a arte marcial ideal para o sexo feminino.</p>
                <p>Um estudo profundo aliado ao treino constante desta singular arte marcial, pelas mulheres, confere uma grande variedade de técnicas lógicas, muito úteis, que podem ser utilizadas em diversas situações.</p>
              </div>
              <div className="tab-pane fade" id="todos" role="tabpanel">
                <p>Dos 6 anos, tanto os homens quanto as mulheres, podem treinar o Hapkido pois sua forma circular de movimentação, adapta-se a qualquer tipo de corpo , sem que seja necessário anos treinando alongamentos ou exercícios físicos para ganhar força.</p>
                <p>O poder de adaptação do Hapkido unido com os movimentos circulares em perfeita harmonia, fará com que o praticante aproveite totalmente a força do seu oponente contra ele mesmo, sem que ele tenha chance de reação.</p>
                <p>O Hapkido ainda como terapia, desenvolve, disciplina, libera e equilibra a mente e o corpo, visando nos mostrar o caminho para um melhor entendimento da compreensão do universo e de si mesmo No dia a dia, ajuda na educação de seus filhos, no desenvolvimento dos adolescentes, deixando a mente aberta para os homens de negócios e inibe a tendência às drogas, alcoolismo, timidez e agressividade.</p>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </div>
  );
}