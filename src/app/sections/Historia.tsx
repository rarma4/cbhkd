'use client'
import * as React from 'react';
import '../styles/sections/historia.scss'
import { marker } from '../utils/Fonts'

export default function Historia() {

  return (
    <div className="container-fluid d-flex bg-body-tertiary justify-content-evenly" id="historia">
      <div className="container">
        <div className="row mt-5 mb-4">
          <h2 className={`text-center text-warning ${marker.className}`}>A história do Hapkido</h2>

          <div className="col-12 col-lg-12 p-3 d-flex flex-column flex-nowrap">

            <ul className="nav nav-tabs bg-body-tertiary" role="tablist">
              <li className="nav-item bg-body-tertiary" role="presentation">
                <a className="nav-link text-secondary-emphasis active" data-bs-toggle="tab" href="#mundo" aria-selected="true" role="tab">Mundo</a>
              </li>
              <li className="nav-item bg-body-tertiary" role="presentation">
                <a className="nav-link text-secondary-emphasis" data-bs-toggle="tab" href="#brasil" aria-selected="false" role="tab">Brasil</a>
              </li>
              <li className="nav-item bg-body-tertiary" role="presentation">
                <a className="nav-link text-secondary-emphasis" data-bs-toggle="tab" href="#kwan" aria-selected="false" role="tab">Kwan</a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="mundo" role="tabpanel">
                <p>A luta pela sobrevivência fez com que o homem adota-se diferentes e variadas formas de combates com ou sem armas, em algumas ocasiões de criação própria e noutras de imitação a animais ou de lutadores mais peritos. Em alguns casos, a base de sustentação tem as suas origens, nas características morfológicas e culturais dos habitantes dos países onde se desenvolveram através de múltiplas gerações.</p>
                <p>De inicio o HAP KI DO não era para ser utilizado como uma forma de defesa, seus movimentos eram treinados apenas para o desenvolvimento do “KI”, (força interior, energia vital), pelos monges budistas que saíram da “Índia”, para China em 67.a.C. Chegando na Coréia em junho do ano 372.D.C, em tempos de “Goryo”. Neste período os monges descobriram que alguns dos movimentos que utilizavam para os seus treinamentos físico serviam para sua auto defasa contra agressores e salteadores, que encontraram em seu caminho, por onde passavam a catequizar, (levar o Budismo), aos povos que viviam, na região do Oriente. Não sabemos ao certo se os monges Indianos já utilizavam as armas brancas como; ”Dan guon”(faca pequena),”Jang guon”(faca longa-espada), “Dan boung”(bastão curto), ‘Jang boung”(bastão longo),”Yi”(bengala),”Kun”(corda) e “Tu sook”(estrela), porém sabemos que estas armas eram propicias para a época e existem até hoje dentro do HAPKIDO. Estes dois fatos históricos comprovam a existência do HAPKIDO e não esta descartada a hipótese de que o HAPKIDO tenha dado origem a outras artes marciais.</p>
                <p>Os monges que chegaram na Coréia datam do 2ª- ano do reinado do rei “SO SURIM”, em tempos de GORYO, logo que os monges chegaram, começaram a catequizar os povos que viviam naquela região, porém as técnicas de auto defesa que descobriram, só eram passadas para os nobres e para a guarda imperial, os pobres que eram a maior parte da população não tinham o conhecimento e nem acesso a estas técnicas. Devido à necessidade dos nobres ter que se defender, começaram a mesclar o que aprenderam com os monges Indianos e as técnicas rudimentares que já utilizavam. Porém os pobres continuaram sem ter acesso às técnicas do então nomeado: (HAP KI DO). O fato de que os pobres continuaram sem ter acesso às técnicas do Hapkido, quase o levou á extinção.</p>
                <p>O HAPKIDO, acompanhou o crescimento do budismo desde os tempos de “GORYO”, até os tempos de três reinos, ”SILA”,(chila, pronuncia em português ); “BAEK JE”, e “KOGURYO”…”Por ser o menor dos três reinos, ”SILA” sofria constantes invasões de salteadores que viviam pela região e de seus vizinhos “KOGURYO” e “BAEK JE”. ..Durante o reinado de “CHIN HEUNG”, vigésimo – quarto rei de “SILA”, que um grupo de jovens aristocratas, todos descendentes de famílias nobres , criaram um corpo de oficiais denominado de “HWARANG “ (jovens em flor ), que tinham um treinamento severo e forte, além de uma sólida formação moral e ética, em pouco tempo muitos outros lutadores uniram-se a eles, formando uma força militar invejável, para a época, que se denominaram e foram conhecidos como os “HWARANG DO”, o reino de “SILA” começou a destacar-se por ser um reino menor e sempre vitorioso em suas batalhas, fazendo com que “COGURYU e BAEK JE”, fossem unificados a “SILA”, em 935 d.C.; Foi fundada a dinastia “KORYO”.</p>
                <p>Foi no período dos três reinos, ”SILA, BAEK JE e KOGURYO”, que o budismo começou a ter a sua decadência por causa do “YUGUIO”, uma forte seita que se instalou na Coréia espalhando-se rapidamente, afetando o povo coreano em tudo… Nos costumes, modos, religião, e até mesmo politicamente, o “YUGUIO”, somente dava importância ao conhecimento da mente e desprezava o conhecimento das lutas ou como conhecemos hoje, as artes marciais. Passado os tempos de “GORYO”, e tempos de “LEE JIO”, o HAPKIDO foi praticamente esquecido e só teve continuidade através das múltiplas gerações de alguns nobres que deram continuidade às técnicas do HAPKIDO. E devido ao fato de não termos um livro, desta época, que relate ou ensine o HAPKIDO, passo a passo, não conseguimos ser reconhecidos como as outras artes marciais.</p>

                <h3 className={`text-danger ${marker.className}`}>O HAPKIDO DA NOVA ERA</h3>

                <p>De 1909 a 1945 as práticas das artes marciais foram expressamente proibidas para o povo coreano, devido à ocupação japonesa na segunda guerra mundial, alguns mestres, de forma secreta, continuaram a trabalhar, para que suas técnicas não fossem esquecidas, o HAPKIDO que praticamente já estava extinto na Coréia, também conseguiu sobreviver a esta época, pois o Grão mestre ‘YOUNG SOOL CHOI”, que ficou órfão aos 9 (nove anos) de idade, encontrou um senhor eremita, (provavelmente descendente de família nobre), que o levou para as montanhas da Coréia, para que ele pudesse aprender o HAPKIDO, o Grão mestre”CHOI”, ficou nas montanhas com seu tutor cerca de uns 33 anos , vivendo como uma espécie de “monge – eremita”. Após a morte de seu tutor, o Grão mestre “CHOI”, decidiu sair das montanhas.</p>
                <p>Quando o Grão mestre “CHOI” saiu das montanhas o Japão já havia sido derrotado na segunda guerra mundial e desocupado o território Coreano, nesta época a península coreana é dividida em duas zonas de ocupação, uma (Norte – americana) ao sul e a outra (Soviética) ao norte, as conversas e negociações de unificação fracassaram e em 1948, são criados dois estados distintos a ”Coréia do sul” e a “Coréia do norte”, separadas por uma linha imaginária chamada de paralelo, 38. O Grão mestre “CHOI”, não teve muitos discípulos, pois além de dar aulas por pouco tempo, estabeleceu-se em uma província de “DEGU”, longe de “SEOUL”, capital da Coréia do sul, o que dificultava o acesso a ele e as técnicas do HAPKIDO. Dentre seus alunos podemos citar Seis de renome mundial: “JI HAN JAE”, “JOO BANG LEE”, “IN HYUK SUB”, “MOO WONG KIM” e “YUN SIK KIM”, os quais foram responsáveis pelos “KWAN”.</p>
                <p>Em 1973, os Grãos mestres, Kim joung tek e myung Kwang Sik, escreveram o primeiro livro que fala e ensina o que é o Hapkido, o qual juntamente com relatos vivenciados pelo Grão mestre YUN SIK KIM e pesquisas, feitas pela Confederação Brasileira de Hapkido, a primeira devidamente reconhecida pelas leis desportivas Brasileiras, é que dão origem, sendo à base de sustentação de nossa história.</p>
              </div>

              <div className="tab-pane fade" id="brasil" role="tabpanel">
                <p>A Confederação Brasileira de Hapkido vem por meio deste site, contar como chegou e como anda o Hapkido no Brasil, de uma forma direta e sem rodeios, para que não só os instrutores e alunos, mas também o público em geral, possa entender o que se passa dentro do cenário do Hapkido no Brasil.</p>
                <p>É importante lembrar que a Confederação Brasileira de Hapkido é uma entidade Oficial, devidamente regulamentada, dentro das leis de nosso país. É o órgão máximo criado para organizar e comandar o Hapkido Brasileiro.</p>
                <hr></hr>
                <h3 className={`text-danger ${marker.className}`}>1977</h3>
                <p>chega a São Paulo o Grão Mestre YUN SIK KIM, discípulo direto do fundador do Hapkido o Grão mestre YOUNG SOOL CHOI e do Grão mestre JI HAN JAE. O Grão Mestre YUN SIK KIM chega ao Brasil para difundir o Hapkido, trazendo á “WORLD BUM MOO HAPKIDO FEDERATION”, coligada á ”KOREA HAPKIDO ASSOCIATION”, também conhecida como “DEHAN HAPKIDO FEDERATION”, na Coréia</p>
                <h3 className={`text-danger ${marker.className}`}>1993</h3>
                <p>O Grão mestre Yun Sik Kim, auxiliado pelos seus alunos dá mais um grande passo para a divulgação e organização do Hapkido no Brasil, que é a fundação da Federação de Hapkido do Estado de São Paulo, a Primeira devidamente registrada e regulamentada no Brasil. Desde então o Grão Mestre Yun Sik Kim junto com seus alunos, começam a desenvolver vários eventos como: seminários, campeonatos, apresentações em redes de televisão, matérias em jornais e revistas, etc… – É importante ressaltar que os Integrantes da “World Bum Moo Hapkido Federation”, sempre participaram desde o primeiro encontro das artes marciais no Brasil até o último, realizado em 2012. Sendo citados pela mídia em geral como a melhor exibição de artes marciais.</p>
                <h3 className={`text-danger ${marker.className}`}>2001</h3>
                
                <p>Com o auxilio de seus alunos o Grão mestre Yun Sik Kim dá o maior passo para legalizar e regulamentar definitivamente o Hapkido no Brasil. É fundada á “Confederação Brasileira de Hapkido ”, Órgão Máximo desenvolvido dentro das leis Brasileiras para comandar, coordenar e organizar o Hapkido no Brasil.</p>
                <p>Ainda em 2001, Analisando a situação do Hapkido no Brasil, de uma forma geral, é que a Confederação Brasileira de Hapkido, dá ao Grão mestre YUN SIK KIM o título de “fundador do Hapkido no Brasil”, pelos seguintes fatos:</p>
                <p>1º – Pelo seu trabalho e desempenho pelo Hapkido no Brasil e em outros países, como, Coréia, Canadá, EUA, etc…</p>
                <p>2º – Por ser No Brasil o único discípulo direto do Fundador do Hapkido o Grão mestre Young Sool Choi e Do Grão mestre JI Han Jae, o maior divulgador do Hapkido a nível mundial.</p>
                <p>3º – Por ter sido o primeiro Grão mestre de Hapkido a chegar no Brasil.</p>
                <p>4º – Por ser o fundador da Confederação Brasileira de Hapkido e da Federação de Hapkido do estado de São Paulo.</p>
              </div>
              <div className="tab-pane fade" id="kwan" role="tabpanel">
                <p>Família de escolas ou academias de artes marciais</p>
                <p>Entre as décadas de 50 e 60, após a separação da Coréia, a Coréia do Sul passou por uma grande e rigorosa reformulação, saía do regime (Imperial – Comunista), para o regime (capitalista), esta grande reformulação só foi possível devido a forte união do povo Coreano.</p>
                <p>O governo que se estabeleceu, teve que reformular todas as leis na Coréia do Sul e dentro das artes marciais esta reformulação também foi marcante, pois o governo Sul Coreano a fim de organizar as artes marciais Coreanas, instalou o registro de “Kwan” (Família de escolas ou academias de artes marciais), porém muitas artes marciais Coreanas, não conseguiram seu registro de Kwan devido ao rigoroso critério imposto pelo governo. Para registrar um Kwan, o mestre tinha que provar que era um mestre de 7º, 8º, 9º ou 10º dan e ter no mínimo 30 academias ligadas a ele.</p>
                <p>No caso do Hapkido, foram três os registro de Kwan, os quais são estes que respondiam pelo nome do Hapkido, junto com seus fundadores:</p>
                <hr></hr>
                <h3 className={`text-danger ${marker.className}`}>KWAN – Fundadores</h3>
                <p>Sung Moo Kwan Hapkido – Han Jae Ji</p>
                <p>Shin Moo Kwan Hapkido – Moo Wong Kim</p>
                <p>Hapkido Bum Moo Kwan – Yun Sik Kim</p>
                <hr></hr>
                <p>O governo Coreano também decretou o registro de “Associação”, a qual seria responsável pela organização dos Kwan, o mestre tinha que primeiro registrar o seu Kwan no governo e depois na associação, a primeira a ser reconhecida pelo governo foi à “Korea Kido Association”, tendo como seu primeiro presidente o Sr “Du Young Kim”.</p>
                <p>A Korea Kido Association, não era uma associação especifica de Hapkido e até hoje ela incorpora mais de 30 (trinta) tipos de artes marciais diferentes.</p>
                <p>Para resolver esta questão, os mestres: HAN JAE JI; YOUNG JIN KIM; KWANG SIK MIUNG; YONG WHAN KIM; TAE JOON LEE; DUK KYU WHANG; YOUNG WOO YU; BONG SOO HAN; SE LIM OH; SEO OH CHOI; YUN SIK KIM; JAE NAN MYUNG; JONG TEK KIM; e outros Uniram – se para fundar a primeira associação que cuida – se especificamente do Hapkido, a ”Korea Hapkido Association”, também conhecida como “Dehan hapkido”, tendo como seu primeiro presidente o Sr “Ji Han Jae”. A união destes mestres também resultou no lançamento do 1º(primeiro) livro de hapkido, escrito pelos mestres “Kim Jong Tek e Myung Kwang Sik” Com a participação de todos os mestres da (KHA) Korea Hapkido Association. Este livro é a maior fonte de origem de nossa história, juntamente com pesquisas feitas pela Confederação Brasileira de Hapkido e relatos vivenciados pelo Grão mestre Yun Sik Kim, o único discípulo direto do Grão mestre Young Sool Choi o fundador do Hapkido da nova era.</p>
                <p>Os registros de Kwan foram feitos até 1970 dentro do governo Coreano, após esta data não foi registrado mais nenhum Kwan, pois em 1971, o presidente da Coréia assina uma lei declarando o Tae Kwon Do, como esporte nacional Coreano.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}