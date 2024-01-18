'use client'
import * as React from 'react';
import Image from 'next/image'
import '../styles/sections/historia.scss'
import { marker } from '../utils/Fonts'

export default function Historia() {

  return (
    <div className="container-fluid d-flex justify-content-evenly" id="historia">
      <div className="container">
        <div className="row mt-5 mb-4">
          <h2 className={`text-center text-warning ${marker.className}`}>A história do Hapkido</h2>

          <div className="col-12 col-lg-12 p-3 d-flex flex-column flex-nowrap">

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" data-bs-toggle="tab" href="#mundo" aria-selected="true" role="tab">Mundo</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#brasil" aria-selected="false" role="tab">Brasil</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#kwan" aria-selected="false" role="tab">Kwan</a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="mundo" role="tabpanel">
                <p>A luta pela sobrevivência fez com que o homem adota-se diferentes e variadas formas de combates com ou sem armas, em algumas ocasiões de criação própria e noutras de imitação a animais ou de lutadores mais peritos. Em alguns casos, a base de sustentação tem as suas origens, nas características morfológicas e culturais dos habitantes dos países onde se desenvolveram através de múltiplas gerações.</p>
                <p>De inicio o HAP KI DO não era para ser utilizado como uma forma de defesa, seus movimentos eram treinados apenas para o desenvolvimento do “KI”, (força interior, energia vital), pelos monges budistas que saíram da “Índia”, para China em 67.a.C. Chegando na Coréia em junho do ano 372.D.C, em tempos de “Goryo”. Neste período os monges descobriram que alguns dos movimentos que utilizavam para os seus treinamentos físico serviam para sua auto defasa contra agressores e salteadores, que encontraram em seu caminho, por onde passavam a catequizar, (levar o Budismo), aos povos que viviam, na região do Oriente. Não sabemos ao certo se os monges Indianos já utilizavam as armas brancas como; ”Dan guon”(faca pequena),”Jang guon”(faca longa-espada), “Dan boung”(bastão curto), ‘Jang boung”(bastão longo),”Yi”(bengala),”Kun”(corda) e “Tu sook”(estrela), porém sabemos que estas armas eram propicias para a época e existem até hoje dentro do HAPKIDO. Estes dois fatos históricos comprovam a existência do HAPKIDO e não esta descartada a hipótese de que o HAPKIDO tenha dado origem a outras artes marciais.</p>
                <p>Os monges que chegaram na Coréia datam do 2ª- ano do reinado do rei “SO SURIM”, em tempos de GORYO, logo que os monges chegaram, começaram a catequizar os povos que viviam naquela região, porém as técnicas de auto defesa que descobriram, só eram passadas para os nobres e para a guarda imperial, os pobres que eram a maior parte da população não tinham o conhecimento e nem acesso a estas técnicas. Devido à necessidade dos nobres ter que se defender, começaram a mesclar o que aprenderam com os monges Indianos e as técnicas rudimentares que já utilizavam. Porém os pobres continuaram sem ter acesso às técnicas do então nomeado: (HAP KI DO). O fato de que os pobres continuaram sem ter acesso às técnicas do Hapkido, quase o levou á extinção.</p>
                <p>O HAPKIDO, acompanhou o crescimento do budismo desde os tempos de “GORYO”, até os tempos de três reinos, ”SILA”,(chila, pronuncia em português ); “BAEK JE”, e “KOGURYO”…”Por ser o menor dos três reinos, ”SILA” sofria constantes invasões de salteadores que viviam pela região e de seus vizinhos “KOGURYO” e “BAEK JE”. ..Durante o reinado de “CHIN HEUNG”, vigésimo – quarto rei de “SILA”, que um grupo de jovens aristocratas, todos descendentes de famílias nobres , criaram um corpo de oficiais denominado de “HWARANG “ (jovens em flor ), que tinham um treinamento severo e forte, além de uma sólida formação moral e ética, em pouco tempo muitos outros lutadores uniram-se a eles, formando uma força militar invejável, para a época, que se denominaram e foram conhecidos como os “HWARANG DO”, o reino de “SILA” começou a destacar-se por ser um reino menor e sempre vitorioso em suas batalhas, fazendo com que “COGURYU e BAEK JE”, fossem unificados a “SILA”, em 935 d.C.; Foi fundada a dinastia “KORYO”.</p>
                <p>Foi no período dos três reinos, ”SILA, BAEK JE e KOGURYO”, que o budismo começou a ter a sua decadência por causa do “YUGUIO”, uma forte seita que se instalou na Coréia espalhando-se rapidamente, afetando o povo coreano em tudo… Nos costumes, modos, religião, e até mesmo politicamente, o “YUGUIO”, somente dava importância ao conhecimento da mente e desprezava o conhecimento das lutas ou como conhecemos hoje, as artes marciais. Passado os tempos de “GORYO”, e tempos de “LEE JIO”, o HAPKIDO foi praticamente esquecido e só teve continuidade através das múltiplas gerações de alguns nobres que deram continuidade às técnicas do HAPKIDO. E devido ao fato de não termos um livro, desta época, que relate ou ensine o HAPKIDO, passo a passo, não conseguimos ser reconhecidos como as outras artes marciais.</p>

                <h3 className={`text-center text-warning ${marker.className}`}>O HAPKIDO DA NOVA ERA</h3>

                <p>De 1909 a 1945 as práticas das artes marciais foram expressamente proibidas para o povo coreano, devido à ocupação japonesa na segunda guerra mundial, alguns mestres, de forma secreta, continuaram a trabalhar, para que suas técnicas não fossem esquecidas, o HAPKIDO que praticamente já estava extinto na Coréia, também conseguiu sobreviver a esta época, pois o Grão mestre ‘YOUNG SOOL CHOI”, que ficou órfão aos 9 (nove anos) de idade, encontrou um senhor eremita, (provavelmente descendente de família nobre), que o levou para as montanhas da Coréia, para que ele pudesse aprender o HAPKIDO, o Grão mestre”CHOI”, ficou nas montanhas com seu tutor cerca de uns 33 anos , vivendo como uma espécie de “monge – eremita”. Após a morte de seu tutor, o Grão mestre “CHOI”, decidiu sair das montanhas.</p>
                <p>Quando o Grão mestre “CHOI” saiu das montanhas o Japão já havia sido derrotado na segunda guerra mundial e desocupado o território Coreano, nesta época a península coreana é dividida em duas zonas de ocupação, uma (Norte – americana) ao sul e a outra (Soviética) ao norte, as conversas e negociações de unificação fracassaram e em 1948, são criados dois estados distintos a ”Coréia do sul” e a “Coréia do norte”, separadas por uma linha imaginária chamada de paralelo, 38. O Grão mestre “CHOI”, não teve muitos discípulos, pois além de dar aulas por pouco tempo, estabeleceu-se em uma província de “DEGU”, longe de “SEOUL”, capital da Coréia do sul, o que dificultava o acesso a ele e as técnicas do HAPKIDO. Dentre seus alunos podemos citar Seis de renome mundial: “JI HAN JAE”, “JOO BANG LEE”, “IN HYUK SUB”, “MOO WONG KIM” e “YUN SIK KIM”, os quais foram responsáveis pelos “KWAN”.</p>
                <p>Em 1973, os Grãos mestres, Kim joung tek e myung Kwang Sik, escreveram o primeiro livro que fala e ensina o que é o Hapkido, o qual juntamente com relatos vivenciados pelo Grão mestre YUN SIK KIM e pesquisas, feitas pela Confederação Brasileira de Hapkido, a primeira devidamente reconhecida pelas leis desportivas Brasileiras, é que dão origem, sendo à base de sustentação de nossa história.</p>
              </div>
              <div className="tab-pane fade" id="brasil" role="tabpanel">
                <p>Dos 6 anos, tanto os homens quanto as mulheres, podem treinar o Hapkido pois sua forma circular de movimentação, adapta-se a qualquer tipo de corpo , sem que seja necessário anos treinando alongamentos ou exercícios físicos para ganhar força.</p>
                <p>O poder de adaptação do Hapkido unido com os movimentos circulares em perfeita harmonia, fará com que o praticante aproveite totalmente a força do seu oponente contra ele mesmo, sem que ele tenha chance de reação.</p>
                <p>O Hapkido ainda como terapia, desenvolve, disciplina, libera e equilibra a mente e o corpo, visando nos mostrar o caminho para um melhor entendimento da compreensão do universo e de si mesmo No dia a dia, ajuda na educação de seus filhos, no desenvolvimento dos adolescentes, deixando a mente aberta para os homens de negócios e inibe a tendência às drogas, alcoolismo, timidez e agressividade.</p>
              </div>
              <div className="tab-pane fade" id="kwan" role="tabpanel">
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