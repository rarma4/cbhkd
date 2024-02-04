'use client'
import Image from 'next/image'
import '../styles/components/offnavigation.scss'
import MenuItens from '../components/MenuItens'

export default function OffNavigation() {
  return (
    <>
      <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <a className="navbar-brand" href="/">
            <Image
              src="/assets/img/logo-cbhkd.webp"
              alt="logo CBHKD"
              width={60}
              height={60}
            />
          </a>
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav nav-pills flex-column">
            <MenuItens mobile="offcanvas" />
          </ul>
        </div>
      </div>
    </>
  )
}