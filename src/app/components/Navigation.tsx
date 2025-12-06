import Image from 'next/image'
import Link from 'next/link'
import '../styles/components/navigation.scss'
import OffNavigation from '../components/OffNavigation'
import MenuItens from '../components/MenuItens'
import { marker } from '../utils/Fonts'

export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src="/assets/img/logo-cbhkd.webp"
              alt="logo CBHKD"
              width={85}
              height={85}
            />
          </Link>
          <Link className={`navbar-brand logo-header ${marker.className}`} href="/">Hapkido</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-md-auto">
              <MenuItens />
            </ul>
          </div>
        </div>
      </nav>
      <OffNavigation />
    </>
  )
}
