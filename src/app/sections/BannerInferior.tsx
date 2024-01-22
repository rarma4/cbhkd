import '../styles/sections/bannerInferior.scss'
import Link from 'next/link'
import Image from 'next/image'
import { marker } from '../utils/Fonts'

export default function BannerInferior() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column" id="bannerInferior">
        <div className="container">
          <div className="row text-center ">

            <div className="col-lg-3 col-md-3"></div>

            <div className="col-lg-6 col-md-6 text-center bg-light colcenter d-flex align-items-center">

              <div className=" w-100 p-3 d-flex justify-content-center align-items-center flex-column" >
                <h2 className="home-title">Hapkido</h2>
                <Image
                  src="/assets/img/logo-cbhkd.webp"
                  alt="logo rafart"
                  width={100}
                  height={100}
                  className="mt-4"
                />
                <Image
                  src="/assets/img/hkd-korea.webp"
                  alt="logo rafart"
                  width={256}
                  height={61}
                  className="mt-5"
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-3"></div>

          </div>
        </div>
      </div>
    </>
  )
}
