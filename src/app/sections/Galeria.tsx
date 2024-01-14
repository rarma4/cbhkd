import GaleriaItens from '../components/GaleriaItens'
import '../styles/sections/galeria.scss'
import { marker } from '../utils/Fonts'


export default function Galeria() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column " id="galeria">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className={`text-center text-warning ${marker.className}`}>Galeria</h2>
            <GaleriaItens/>
          </div>
        </div>
      </div>
    </>
  )
}
