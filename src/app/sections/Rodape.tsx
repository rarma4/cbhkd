import '../styles/sections/rodape.scss'
import Image from 'next/image'
import MenuItens from '../components/MenuItens'
import { marker } from '../utils/Fonts'

export default function Rodape() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-evenly flex-column" id="rodape">
        <div className="container">
          <div className="row mt-4 mb-3">
            {/* <h2 className={`text-center text-warning ${marker.className}`}>Experiência</h2> */}
            <div className="col-md-3 col-sm-6 p-3 text-lg-start text-center">
              <h4>Mapa do site</h4>
              <div>
                <ul className="list-group list-group-flush">
                  <MenuItens />
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 p-3 text-lg-start text-center">
              <h4>O Hapkido</h4>
              <p>
                Não é necessário força física para a aplicação das técnicas do Hapkido, o que torna a arte marcial ideal para todas as pessoas, que podem ser utilizadas em diversas situações.
              </p>
            </div>
            <div className="col-md-3 col-sm-6 p-3 text-lg-start text-center">
              <h4>Onde estamos:</h4>
              <p>
                Rua da graça, 89, 4 andar<br />
                Bom Retiro – centro de São Paulo<br />
                Fone: 3223-0486
              </p>
            </div>
            <div className="col-md-3 col-sm-6 p-3 text-lg-start text-center">
              <h4>Filiado à:</h4>
              <div className=" w-100 d-flex justify-content-lg-start justify-content-center" >
                <Image
                  src="/assets/img/logo-bummoo.webp"
                  alt="logo rafart"
                  width={100}
                  height={100}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
