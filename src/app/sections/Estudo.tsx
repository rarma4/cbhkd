'use client'
import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { skils } from '../utils/Utils'
import '../styles/sections/estudo.scss'
import { marker } from '../utils/Fonts'

export default function Estudo() {

  return (
    <div className="container-fluid d-flex bg-body-tertiary justify-content-evenly" id="estudo">
      <div className="container">
        <div className="row mt-5 mb-4">
          <h2 className={`text-center text-warning ${marker.className}`}>Estudo Complementar do Hapkido</h2>
          <h6 className={`text-center text-secondary `}>Este estudo tem a finalidade de ajudar os alunos a se familiarizar</h6>
          <h6 className={`text-center text-secondary `}>com as linguagens usadas no Dodjang e a origem do Hapkido.</h6>

          <div className="col-12 col-lg-12 p-3 d-flex flex-column flex-nowrap">

            <ul className="nav nav-tabs bg-body-tertiary" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" data-bs-toggle="tab" href="#hkd" aria-selected="true" role="tab">O que é o Hapkido?</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#contagem" aria-selected="false" role="tab">Contagem</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#etiquetas" aria-selected="false" role="tab">Etiquetas</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#restricoes" aria-selected="false" role="tab">Restrições</a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="hkd" role="tabpanel">
                <p>Hap Ki Do - HAP=União, KI=Força, Espírito, DO=Caminho; Caminho da União da Força e do Espírito, Arte Marcial Sul-Coreana.</p>
                <p>BUM MOO: Família Tigre, Federação Fundada em 1968 pelo Grão Mestre Yun Sik Kim.</p>
                <p>Grão Mestre Yun Sik Kim, Faixa Preta Internacional, 10º DAN de Hap Ki Do, 9º DAN de Tae Kwon Do; Juiz Presidente Internacional.</p>
              </div>
              <div className="tab-pane fade" id="contagem" role="tabpanel">
                
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Column heading</th>
                      <th scope="col">Column heading</th>
                      <th scope="col">Column heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-active">
                      <th scope="row">1</th>
                      <td>Raná</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Dul</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr className="table-active">
                      <th scope="row">3</th>
                      <td>Sêt</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Nêt</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr className="table-active">
                      <th scope="row">5</th>
                      <td>Dassôt</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Iossôt</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr className="table-active">
                      <th scope="row">7</th>
                      <td>Ilgôp</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Iodol</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr className="table-active">
                      <th scope="row">9</th>
                      <td>Arrôp</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Iol</td>
                      <td>Column content</td>
                      <td>Column content</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="etiquetas" role="tabpanel">
                <ol>
                  <li>Nosso dojang segue as regras tradicionais da conduta apropriada. Seu espírito vem diretamente do fundador do Hapkido, é o lugar da sucessão de seus ensinos. É de responsabilidade de cada um agir apropriadamente e honrar estes ensinos.</li>
                  <li>Ao chegar na academia reverencie os mestres, depois os faixas pretas e depois os seus companheiros de treino, todos por ordem de graduação.</li>
                  <li>Saudar a bandeira e o juramento do Hapkido sempre que for  começar a treinar e também quando terminar se treinar.</li>
                  <li>Respeite o fundador e seus ensinamentos exatamente como foram passados aos alunos, pelos seus instrutores, sem questionar. É necessário respeitara maneira em que o instrutor da classe dirige o treinamento, não há lugar para contestações dentro do dojang.</li>
                  <li>É de responsabilidade dos alunos ajudar na limpeza e na conservação da academia, os antigos faziam isto como um ato de gratidão, cuidavam de sua área de treino como se fosse a sua própria casa.</li>
                  <li>A mensalidade que o aluno paga é para manter seu espaço de treino, para que possa adquirir e aperfeiçoar as técnicas, assim é de responsabilidade de cada aluno, pagar as suas mensalidades em dia.</li>
                  <li>O Hapkido não é uma religião, é o refinamento do espírito.Você não terá que aderir a nenhuma seita ou doutrina religiosa, quando nos curvamos não é um desempenho religioso, mas um sinal de respeito para a outra pessoa.</li>
                  <li>A abertura e a cerimônia de fechamento de cada prática do Hapkido é uma reverencia formal, um agradecimento dirigido ao instrutor que nos ensina.</li>
                  <li>As palavras faladas pelo aluno ao instrutor no final de cada aula são “kanksa há nida”, que significa: (Você tem meus respeitos e gratidão pelo que o senhor fez), ou seja, um simples (obrigado). Esta é a maneira respeitosa de agradecer.</li>
                  <li>É de responsabilidade moral de cada aluno, nunca use as técnicas do Hapkido, para prejudicar outra pessoa, ou para satisfazer o seu ego.</li>
                </ol>
              </div>
              <div className="tab-pane fade" id="restricoes" role="tabpanel">
                <ol>
                  <li>Não trazer alimentos para consumir durante as aulas, principalmente balas, chicletes e  salgadinhos.</li>
                  <li>Não venha para aula se estiver doente, procure tratar – se antes.</li>
                  <li>Nunca utilize gestos obscenos ou palavras de baixo calão, (palavrões),na academia.</li>
                  <li>Não fume nas dependências da academia.</li>
                  <li>Não danifique os aparelhos de treino, os quais você mesmo vai utilizar.</li>
                  <li>Não use drogas, bebidas alcoólicas, ou qualquer substância do gênero, antes, durante e após o treino.</li>
                  <li>Troque de roupa somente no vestiário.</li>
                  <li>Não fique com brincadeiras durante o período de aulas.</li>
                  <li>Não use as técnicas do Hapkido para prejudicar outras pessoas, ou como uma maneira de aumentar o seu ego pessoal.</li>
                  <li> Não falte com respeito para com seus instrutores, companheiros de treino e para com o Hapkido.<br></br>
                    ‘Respeite os outros e a si mesmo, para poder ser respeitado”.</li>
                </ol>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div >
  );
}