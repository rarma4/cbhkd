import '../styles/sections/headerGraduacao.scss'
import { marker } from '../utils/Fonts'

export default function HeaderGraduacao() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column" id="headerGraduacao">
        <header className="container">
          <div className="row p-3 text-center ">
            <div className="col-md-12 col-sm-1 mt-5">
              <h2 className="home-title text-white">Graduação do </h2>
              <h1 className={`home-subtitle text-warning mt-3 ${marker.className}`}>HapKiDo</h1>
              {/* <h4 className="home-title mt-3 text-white">A lenda viva das artes marciais!</h4> */}
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
