import '../styles/sections/headerHome.scss'
import Image from 'next/image'
import { marker } from '../utils/Fonts'

export default function HeaderHome() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column" id="headerHome">
        <header className="container">
          <div className="row p-3 text-center ">
            <div className="col-md-6 col-sm-1 mt-5">
              <h2 className="home-title text-white">MAIS DE 40 ANOS DE TRADIÇÃO</h2>
              <h1 className={`home-subtitle text-warning mt-3 ${marker.className}`}>Grão Mestre Yun Sik Kim</h1>
              <h4 className="home-title mt-3 text-white">A lenda viva das artes marciais!</h4>
            </div>
            <div className="col-md-6 col-sm-1">
              <Image
                src="/assets/img/YunSikKim.webp"
                alt="Foto grão mestre Yun Sik Kim"
                width={160}
                height={362}
              />
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
