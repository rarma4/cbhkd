'use client'
import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
                <a className="nav-link" data-bs-toggle="tab" href="#vocabulario" aria-selected="false" role="tab">Vocabulário</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#maos" aria-selected="false" role="tab">Técnica de mãos</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#chutes" aria-selected="false" role="tab">Chutes</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#quedas" aria-selected="false" role="tab">Quedas</a>
              </li>
            </ul>
            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="hkd" role="tabpanel">
                <p>Hap Ki Do - HAP=União, KI=Força, Espírito, DO=Caminho; Caminho da União da Força e do Espírito, Arte Marcial Sul-Coreana.</p>
                <p>BUM MOO: Família Tigre, Federação Fundada em 1968 pelo Grão Mestre Yun Sik Kim.</p>
                <p>Grão Mestre Yun Sik Kim, Faixa Preta Internacional, 10º DAN de Hap Ki Do, 9º DAN de Tae Kwon Do; Juiz Presidente Internacional.</p>
              </div>
              <div className="tab-pane fade" id="contagem" role="tabpanel">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Raná</td>
                        <td></td>
                        <td>11</td>
                        <td>Iol raná</td>
                        <td></td>
                        <td>1º</td>
                        <td>il</td>
                        <td></td>
                        <td>11º</td>
                        <td>sip il</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Dul</td>
                        <td></td>
                        <td>12</td>
                        <td>Iol dul</td>
                        <td></td>
                        <td>2º</td>
                        <td>I</td>
                        <td></td>
                        <td>20º</td>
                        <td>ee sip</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sêt</td>
                        <td></td>
                        <td>13</td>
                        <td>Iol sêt</td>
                        <td></td>
                        <td>3º</td>
                        <td>sam</td>
                        <td></td>
                        <td>21º</td>
                        <td>ee sip il</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Nêt</td>
                        <td></td>
                        <td>20</td>
                        <td>Sumul</td>
                        <td></td>
                        <td>4º</td>
                        <td>sa</td>
                        <td></td>
                        <td>30º</td>
                        <td>sam sip</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Dassôt</td>
                        <td></td>
                        <td>21</td>
                        <td>Sumul raná</td>
                        <td></td>
                        <td>5º</td>
                        <td>oh</td>
                        <td></td>
                        <td>40º</td>
                        <td>sa sip</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Iossôt</td>
                        <td></td>
                        <td>22</td>
                        <td>Sumul dul</td>
                        <td></td>
                        <td>6º</td>
                        <td>yuk</td>
                        <td></td>
                        <td>50º</td>
                        <td>oh sip</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Ilgôp</td>
                        <td></td>
                        <td>30</td>
                        <td>Sórum</td>
                        <td></td>
                        <td>7º</td>
                        <td>tchil</td>
                        <td></td>
                        <td>60º</td>
                        <td>yuk sip</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Iodol</td>
                        <td></td>
                        <td>40</td>
                        <td>Marhun</td>
                        <td></td>
                        <td>8º</td>
                        <td>pal</td>
                        <td></td>
                        <td>70º</td>
                        <td>tchil sip</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Arrôp</td>
                        <td></td>
                        <td>50</td>
                        <td>Shirum</td>
                        <td></td>
                        <td>9º</td>
                        <td>kou</td>
                        <td></td>
                        <td>80º</td>
                        <td>pal sip</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Iol</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>10º</td>
                        <td>chib</td>
                        <td></td>
                        <td>90º</td>
                        <td>koo sip</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>100º</td>
                        <td>Bek</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1000º</td>
                        <td>Tchon</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="vocabulario" role="tabpanel">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>Aksul</td>
                        <td>Cumprimentar-se</td>
                      </tr>
                      <tr>
                        <td>Anhon ra gueseio</td>
                        <td>Tchau</td>
                      </tr>
                      <tr>
                        <td>Anhon ra seio</td>
                        <td>Bom Dia</td>
                      </tr>
                      <tr>
                        <td>Ap</td>
                        <td>Frontal</td>
                      </tr>
                      <tr>
                        <td>Balbacuó</td>
                        <td>Trocar</td>
                      </tr>
                      <tr>
                        <td>Baró</td>
                        <td>Parar, voltar</td>
                      </tr>
                      <tr>
                        <td>Bartchagui Jumbi</td>
                        <td>Preparar Chute</td>
                      </tr>
                      <tr>
                        <td>Can Sá Mida</td>
                        <td>Obrigado</td>
                      </tr>
                      <tr>
                        <td>Chong</td>
                        <td>Azul</td>
                      </tr>
                      <tr>
                        <td>Dobok</td>
                        <td>Uniforme de treino</td>
                      </tr>
                      <tr>
                        <td>Donji Gui</td>
                        <td>Projetar, derrubar</td>
                      </tr>
                      <tr>
                        <td>Galhio</td>
                        <td>Separar</td>
                      </tr>
                      <tr>
                        <td>Gub</td>
                        <td>Categoria de faixa</td>
                      </tr>
                      <tr>
                        <td>Handjo</td>
                        <td>Sentar</td>
                      </tr>
                      <tr>
                        <td>Ho Shin Sull</td>
                        <td>Defesa pessoal</td>
                      </tr>
                      <tr>
                        <td>Hong</td>
                        <td>Vermelho</td>
                      </tr>
                      <tr>
                        <td>Irosot</td>
                        <td>Levantar</td>
                      </tr>
                      <tr>
                        <td>Kalyo</td>
                        <td>Separar</td>
                      </tr>
                      <tr>
                        <td>Kenue</td>
                        <td>Cumprimentar</td>
                      </tr>
                      <tr>
                        <td>Kesok</td>
                        <td>Continuar</td>
                      </tr>
                      <tr>
                        <td>Kihap</td>
                        <td>Grito (kiai)</td>
                      </tr>
                      <tr>
                        <td>Kiosanim</td>
                        <td>Professor</td>
                      </tr>
                      <tr>
                        <td>Kokc Ki</td>
                        <td>Torcer, Quebrar</td>
                      </tr>
                      <tr>
                        <td>Kuman</td>
                        <td>Parar</td>
                      </tr>
                      <tr>
                        <td>Kwandjanim</td>
                        <td>Grão Mestre</td>
                      </tr>
                      <tr>
                        <td>kwanzul</td>
                        <td>Dedos</td>
                      </tr>
                      <tr>
                        <td>Makki</td>
                        <td>Defesa</td>
                      </tr>
                      <tr>
                        <td>Moktuil</td>
                        <td>Nuca</td>
                      </tr>
                      <tr>
                        <td>Montong</td>
                        <td>Mão Fechada</td>
                      </tr>
                      <tr>
                        <td>Murupurot</td>
                        <td>Ajoelhar</td>
                      </tr>
                      <tr>
                        <td>Napot</td>
                        <td>Queda</td>
                      </tr>
                      <tr>
                        <td>Palioat</td>
                        <td>Rápido</td>
                      </tr>
                      <tr>
                        <td>Palkut</td>
                        <td>Cotovelo</td>
                      </tr>
                      <tr>
                        <td>Poomse</td>
                        <td>Sequência composta</td>
                      </tr>
                      <tr>
                        <td>Radan</td>
                        <td>Baixo</td>
                      </tr>
                      <tr>
                        <td>Rel tchio</td>
                        <td>Retirar</td>
                      </tr>
                      <tr>
                        <td>Sandan</td>
                        <td>Meio</td>
                      </tr>
                      <tr>
                        <td>Son Nar</td>
                        <td>Mão Aberta</td>
                      </tr>
                      <tr>
                        <td>Sudô</td>
                        <td>Faca da Mão</td>
                      </tr>
                      <tr>
                        <td>Tandio</td>
                        <td>Palma da Mão</td>
                      </tr>
                      <tr>
                        <td>Tanjon hohoprop</td>
                        <td>Respiração</td>
                      </tr>
                      <tr>
                        <td>Tchagui</td>
                        <td>Chute</td>
                      </tr>
                      <tr>
                        <td>Tchariot</td>
                        <td>Sentido</td>
                      </tr>
                      <tr>
                        <td>Tchio</td>
                        <td>Respirar</td>
                      </tr>
                      <tr>
                        <td>Tchumbi</td>
                        <td>Preparar</td>
                      </tr>
                      <tr>
                        <td>Tchundan</td>
                        <td>Cima</td>
                      </tr>
                      <tr>
                        <td>Terigui</td>
                        <td>Bater</td>
                      </tr>
                      <tr>
                        <td>Til djak</td>
                        <td>Começar</td>
                      </tr>
                      <tr>
                        <td>Yop</td>
                        <td>Lateral</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div className="tab-pane fade" id="maos" role="tabpanel">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>Apacatdu</td>
                        <td>Gancho</td>
                      </tr>
                      <tr>
                        <td>Ademissá</td>
                        <td>Mão Aberta</td>
                      </tr>
                      <tr>
                        <td>Palcunti</td>
                        <td>Cotovelo&nbsp;</td>
                      </tr>
                      <tr>
                        <td>Tchu tchum so Dirigui</td>
                        <td>Posição do Cavalo</td>
                      </tr>
                      <tr>
                        <td>Pal Ban Yuk Sull</td>
                        <td>Técnica da Esquirva</td>
                      </tr>
                      <tr>
                        <td>Sonal Sull</td>
                        <td>Técnica da Mão Aberta</td>
                      </tr>
                      <tr>
                        <td>Palcunti Sull</td>
                        <td>Técnica do Cotovelo</td>
                      </tr>
                    </tbody>

                  </table>

                </div>
              </div>
              <div className="tab-pane fade" id="chutes" role="tabpanel">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>Antari Tchonaki</td>
                        <td>Canela com parte interna do pé&nbsp;</td>
                      </tr>
                      <tr>
                        <td>Tchicun Titcha Negui</td>
                        <td>Arranca rótula</td>
                      </tr>
                      <tr>
                        <td>Tiuk Derigui</td>
                        <td>Dedão na virilha</td>
                      </tr>
                      <tr>
                        <td>Tchicun Titcha Dirigui (Biglupso)</td>
                        <td>Calcanhar atrás da perna</td>
                      </tr>
                      <tr>
                        <td>Burop Tchagui</td>
                        <td>Joelhada</td>
                      </tr>
                      <tr>
                        <td>Radan Ap Dolio Tchagui</td>
                        <td>Paulistinha</td>
                      </tr>
                      <tr>
                        <td>Radan Yop Tchagui</td>
                        <td>Faca do pé no joelho</td>
                      </tr>
                      <tr>
                        <td>Ap Tchagui</td>
                        <td>Frontal no estômago</td>
                      </tr>
                      <tr>
                        <td>Ap Tchaoligui</td>
                        <td>Frontal com perna estendida</td>
                      </tr>
                      <tr>
                        <td>Ap Dolio Tchagui</td>
                        <td>Lateral com peito do pé</td>
                      </tr>
                      <tr>
                        <td>Olgul Tchigo Tchagui</td>
                        <td>Lateral na cabeça</td>
                      </tr>
                      <tr>
                        <td>Antari</td>
                        <td>Perna estendida de fora p/ dentro</td>
                      </tr>
                      <tr>
                        <td>Bakatari</td>
                        <td>Perna estendida de dentro p/ fora</td>
                      </tr>
                      <tr>
                        <td>Yop Tchagui</td>
                        <td>Lateral c/ faca do pé</td>
                      </tr>
                      <tr>
                        <td>Yop Tchaoligui</td>
                        <td>Lateral c/ faca do pé perna estendida</td>
                      </tr>
                      <tr>
                        <td>Idan Ap Tchagui</td>
                        <td>Pulando Ameaça e chuta</td>
                      </tr>
                      <tr>
                        <td>Idan Yop Tchagui</td>
                        <td>Pulando cruza e chuta</td>
                      </tr>
                      <tr>
                        <td>Timiop Tchagui</td>
                        <td>Voadora</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>Di Tchagui</td>
                        <td>De Costas</td>
                      </tr>
                      <tr>
                        <td>Dora Yop Tchagui</td>
                        <td>Giratória c/ Faca do pé</td>
                      </tr>
                      <tr>
                        <td>Dora Tchagui (Pande )</td>
                        <td>Giratória c/ Calcanhar</td>
                      </tr>
                      <tr>
                        <td>Tchiro tchagui</td>
                        <td>Giratória com Bakatari</td>
                      </tr>
                      <tr>
                        <td>Ant Tchagui</td>
                        <td>Perna flexionada de fora p/ dentro</td>
                      </tr>
                      <tr>
                        <td>Tchicun Titcha Nerigui</td>
                        <td>Perna flexionada de dentro p/ fora</td>
                      </tr>
                      <tr>
                        <td>Tchicun Titcha Doligui</td>
                        <td>Puxando calcanhar</td>
                      </tr>
                      <tr>
                        <td>Ap Bituro Tchagui</td>
                        <td>Frontal co/ peito do pé</td>
                      </tr>
                      <tr>
                        <td>Miro Tchagui</td>
                        <td>Frontal empurrando</td>
                      </tr>
                      <tr>
                        <td>Ap da Tchagui</td>
                        <td>Lateral Saindo de lado</td>
                      </tr>
                      <tr>
                        <td>Radan Dolio Tchagui</td>
                        <td>Rasteira de frente</td>
                      </tr>
                      <tr>
                        <td>Radan Dora Tchagui</td>
                        <td>Rasteira de costas</td>
                      </tr>
                      <tr>
                        <td>Rambar Radan Dora Tchagui</td>
                        <td>Passo + Rasteira de costas</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>Tosso Di Tchagui</td>
                        <td>De costas pulando</td>
                      </tr>
                      <tr>
                        <td>Tosso Dora Tchagui</td>
                        <td>Giratória c/ Calcanhar pulando</td>
                      </tr>
                      <tr>
                        <td>Goandjun Di Tchagui</td>
                        <td>Yop Tchagui + Di tchagui</td>
                      </tr>
                      <tr>
                        <td>Goandjun Dora Tchagui</td>
                        <td>Ap Dolio + Dora Tchagui</td>
                      </tr>
                      <tr>
                        <td>Duban Ap Tchagui</td>
                        <td>Frontal com as duas pernas</td>
                      </tr>
                      <tr>
                        <td>Duban Yop Tchagui</td>
                        <td>Lateral com as duas pernas</td>
                      </tr>
                      <tr>
                        <td>Sambar Ap Tchagui</td>
                        <td>Frontal com as pernas abertas peito do pé</td>
                      </tr>
                      <tr>
                        <td>Sambar Yop Tchagui</td>
                        <td>Frontal com as pernas abertas faca do pé</td>
                      </tr>
                      <tr>
                        <td>Gaui Tchagui (Exbartchagui)</td>
                        <td>Espacate Frontal</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div className="tab-pane fade" id="quedas" role="tabpanel">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>Tchanban Napo</td>
                        <td>Queda de frente</td>
                      </tr>
                      <tr>
                        <td>Fuban Napo</td>
                        <td>Queda de costas</td>
                      </tr>
                      <tr>
                        <td>Tchupan Napo</td>
                        <td>Queda lateral</td>
                      </tr>
                      <tr>
                        <td>Napo</td>
                        <td>Rolamento com breque</td>
                      </tr>
                      <tr>
                        <td>Hidjan Napo</td>
                        <td>Rolamento sem barulho</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>Tchaemur Napo</td>
                        <td>Distância</td>
                      </tr>
                      <tr>
                        <td>Cgoen Napo</td>
                        <td>Altura</td>
                      </tr>
                      <tr>
                        <td>Domburin Napo</td>
                        <td>Mortal caindo de costas</td>
                      </tr>
                      <tr>
                        <td>Goandjun Napo</td>
                        <td>Mortal caindo de lado</td>
                      </tr>
                      <tr>
                        <td>Pbior</td>
                        <td>Estrela</td>
                      </tr>
                      <tr>
                        <td>Hanzon Pbior</td>
                        <td>Estrela com uma mão</td>
                      </tr>
                      <tr>
                        <td>Goandjun Pbior</td>
                        <td>Estrela sem mãos</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>Dusson Domburin</td>
                        <td>Flick de frente</td>
                      </tr>
                      <tr>
                        <td>Domburin</td>
                        <td>Mortal de frente</td>
                      </tr>
                      <tr>
                        <td>Pek Hanzon Domburin</td>
                        <td>Macaquinho</td>
                      </tr>
                      <tr>
                        <td>Pek Dusson Domburin</td>
                        <td>Flick de costas</td>
                      </tr>
                      <tr>
                        <td>Pek Domburin</td>
                        <td>Mortal de Costas</td>
                      </tr>
                    </tbody>


                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}