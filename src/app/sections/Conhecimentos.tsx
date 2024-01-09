import '../styles/sections/conhecimentos.scss'
import Conhecimento from '../components/Conhecimento'
import { marker } from '../utils/Fonts'

export default function Conhecimentos() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column " id="conhecimentos">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className={`text-center text-warning ${marker.className}`}>Conhecimentos</h2>
            <Conhecimento/>
          </div>
        </div>
      </div>
    </>
  )
}
