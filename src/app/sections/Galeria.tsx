import '../styles/sections/galeria.scss'
import { marker } from '../utils/Fonts'
import Image from 'next/image'
import Link from "next/link"

export default function Galeria() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column " id="galeria">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className={`text-center text-warning ${marker.className}`}>Galeria</h2>

            <div className="col-md-4 col-sm-6 p-3 text-center">
              <div className="card mb-3">
                <h3 className="card-header">Fotos</h3>
                <div className="card-body">
                  <h5 className="card-title">Álbum de fotos </h5>
                  <h6 className="card-subtitle text-muted">dos atletas da Confederação Brasileira de HAPKIDO.</h6>
                </div>
                <div className=" w-100 d-flex justify-content-center" >
                  <Image
                    src="/assets/img/bannerHkd03.webp"
                    alt="logo CBHKD"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="card-body">
                  {/* <p className="card-text">Demostrações, campeonatos, seminários e recordações</p> */}
                  <Link className="btn btn-outline-warning smoothScroll tm-view-more-btn" href="#">Confira</Link>
                </div>
                <div className="card-footer text-muted">
                  Demostrações, campeonatos, seminários e recordações
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
