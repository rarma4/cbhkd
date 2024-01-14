import '../styles/sections/treine.scss'
import Link from 'next/link'
import Image from 'next/image'
import { marker } from '../utils/Fonts'

export default function Treine() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column" id="treine">
        <header className="container">
          <div className="row p-3 text-center ">

            <div className="col-md-6 col-sm-1 mt-5">
              <h2 className={`home-subtitle text-warning mt-3 ${marker.className}`}>TREINE CONOSCO VOCÊ TAMBÉM</h2>
              <p className="home-title mt-3 text-white">
                Venha fazer parte desta Família com mais de 40 anos de tradição.
              </p>
              <p className="home-title mt-3 text-white">
                Rua da Graça, 89, 4 andar Bom Retiro – São Paulo.
              </p>
              <p className="home-title mt-3 text-white">

                Hapkido e Taekwondo WTF
              </p>
            </div>
            
          </div>
        </header>
      </div>
    </>
  )
}
