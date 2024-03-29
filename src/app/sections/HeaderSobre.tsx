import '../styles/sections/headerSobre.scss'
import Link from 'next/link'
import Image from 'next/image'
import { marker } from '../utils/Fonts'

export default function HeaderSobre() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column" id="headerSobre">
        <header className="container">
          <div className="row p-3 text-center ">
            <div className="col-md-12 col-sm-1 mt-5">
              <h2 className="home-title text-white">SOBRE O </h2>
              <h1 className={`home-subtitle text-warning mt-3 ${marker.className}`}>HapKiDo</h1>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
