import '../styles/sections/contato.scss'
import Link from 'next/link'
import Image from 'next/image'
import { marker } from '../utils/Fonts'

export default function Contato() {
  return (
    <>
      <div className="container-fluid bg-light d-flex justify-content-evenly flex-column" id="contato">
        <header className="container">
          <div className="row p-3 text-center ">

            <div className="col-md-6 col-sm-1 mt-5 text-center colcenter d-flex align-items-center">
              <div className=' w-100 p-3 d-flex justify-content-center align-items-center flex-column'>

                <h2 className={`home-subtitle text-warning mt-3 ${marker.className}`}>TREINE CONOSCO VOCÊ TAMBÉM</h2>
                <h5 className="home-title mt-3 text-secondary-emphasis">
                  Entre em contato pelo telefone
                </h5>
                <h2 className={`home-subtitle text-warning mt-3 text-warning-emphasis`}>
                  11-3223-0486
                </h2>
                <h5 className="home-title mt-3 text-secondary-emphasis">

                  Faça uma visita em nossa academia
                </h5>
              </div>
            </div>

            <div className="col-md-6 col-sm-1 mt-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58529.49968037665!2d-46.610253!3d-23.529131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce586762c23cb5%3A0x82d78db594cb1b96!2sBrazilian%20Confederation%20of%20Hapkido!5e0!3m2!1sen!2sus!4v1706321421168!5m2!1sen!2sus" width="100%" height="450" style={{ border: "0" }} loading="lazy" ></iframe>
            </div>

          </div>
        </header>
      </div>
    </>
  )
}
