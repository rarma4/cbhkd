'use client'
import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/sections/regras.scss'
import { marker } from '../utils/Fonts'

export default function Regras() {

  return (
    <div className="container-fluid d-flex justify-content-evenly" id="regras">
      <div className="container">
        <div className="row mt-5 mb-4">
          <h2 className={`text-center text-warning ${marker.className}`}>As regras do Hapkido</h2>
          <h6 className={`text-center text-secondary `}>As regras e etiqueta do Hapkido são fundamentadas na tradição da arte</h6>
          <h6 className={`text-center text-secondary `}>devem ser respeitadas, usadas e passadas a todos os Hapkidoístas.</h6>

          <div className="col-12 col-lg-12 p-3 d-flex flex-column flex-nowrap">

            <ul className="nav nav-tabs bg-body-tertiary" role="tablist">
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
                <ol>
                  <li>Só os mestres de 4° dan acima e os faixas pretas de 2° e 3° dan, com a devida autorização do Grão mestre, é quem pode ministrar aulas de Hapkido.</li>
                  <li>Mantenha a sua higiene pessoal em dia, assim como as unhas dos pés e das mãos sempre limpas e curtas.</li>
                  <li>Manter o dobok sempre limpo e asseado.</li>
                  <li>Alimente – se sempre duas horas antes do treino, para não ter problemas de indigestão.</li>
                  <li>O praticante de Hapkido deve estar sempre atento durante as aulas, para evitar riscos de acidentes desnecessários.</li>
                  <li>Retire anéis, brincos, pulseiras, relógio, correntes e qualquer outro objeto, que possa causar riscos acidentais, para você e para seus companheiros.</li>
                  <li>As conversas durante as aulas devem ser mínimas e restritas a um único tópico, Hapkido.</li>
                  <li>Em caso de dúvidas consulte sempre o instrutor, nunca um aluno mais graduado.</li>
                  <li>Exceto os alunos que trabalham na área da saúde ou militares todos os outros alunos devem manter os celulares desligados.</li>
                  <li>Caso esteja esperando uma ligação urgente, deixe o telefone da academia para contato.</li>
                  <li>Chegar cinco minutos antes das aulas.</li>
                  <li>Se chegar atrasado, reverencie a bandeira e depois o instrutor, que lhe dirá o que fazer, nunca cumprimente os companheiros durante o horário de aula, para não provocar tumultos e prejudicar o andamento das aulas.</li>
                  <li>Se precisar sair mais cedo durante o horário de aula, comunique antecipadamente o instrutor para ter a sua permissão.</li>
                  <li>Ao entrar e sair do dojang, sempre reverencie o instrutor e as bandeiras, principalmente na presença dos Grãos mestres, este é um gesto de respeito para com aqueles que nos ensinam.</li>
                  <li>O aluno de Hapkido deve – se comportar da mesma forma dentro e fora do dojang.</li>
                </ol>
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