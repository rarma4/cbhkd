import '../styles/sections/footer.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faSquareInstagram, faSquareGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-primary text-light" id="footer">
        <footer className="container">
          <div className="row pb-2 pt-4 text-center d-flex justify-content-evenly">
            <div className="col-xl-6 col-md-12 col-xs-1 d-flex justify-content-evenly">
              <p><small>Copyright © CBHKD - Confederação Brasileira de Hapkido</small></p>
            </div>
            <div className="col-xl-6 col-md-12 col-xs-1 d-flex justify-content-evenly">
              <p>
                <small>
                  Powered by 
                </small>
                <a className="p-2" href="https://www.rafart.com.br/" target="_blank" title="Raf'Art Developer and WebDesign">
                  <Image
                    src="/assets/img/rafart-logo.svg"
                    alt="logo rafart"
                    width={20}
                    height={20}
                  />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
