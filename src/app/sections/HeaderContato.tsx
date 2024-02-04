import '../styles/sections/headerContato.scss'
import { marker } from '../utils/Fonts'

export default function HeaderContato() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column" id="headerContato">
        <header className="container">
          <div className="row p-3 text-center ">
            <div className="col-md-12 col-sm-1 mt-5">
              <h2 className="home-title text-white">Entre  em contato</h2>
              <h1 className={`home-subtitle text-warning mt-3 ${marker.className}`}>Conosco</h1>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
