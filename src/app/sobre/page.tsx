import '../styles/pages/page.scss'
import HeaderSobre from '../sections/HeaderSobre'
import Galeria from '../sections/Galeria'
import QuemPodeTreinar from '../sections/QuemPodeTreinar'
import Treine from '../sections/Treine'

export default function Sobre() {
  return (
    <>
      <HeaderSobre/>
      <QuemPodeTreinar/>
      <Treine/>
      <Galeria/>
    </>
  )
}
